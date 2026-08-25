#!/usr/bin/env node

import { createHash } from "node:crypto"
import { readFile, readdir, realpath, stat } from "node:fs/promises"
import { basename, dirname, isAbsolute, relative, resolve, sep } from "node:path"
import process from "node:process"
import { fileURLToPath } from "node:url"

const verifierProtocolPath = resolve(dirname(fileURLToPath(import.meta.url)), "../PROTOCOL.md")
const verifierProtocolDigest = await fileDigest(verifierProtocolPath)
const verifierProtocol = { id: "meta-intent", revision: "0.2" }

const roots = process.argv.slice(2)
if (roots.length === 0) roots.push(".")

let failed = false
for (const input of roots) {
  try {
    await validatePackage(resolve(input))
    console.log(`ok ${input}`)
  } catch (error) {
    failed = true
    console.error(`invalid ${input}: ${error instanceof Error ? error.message : String(error)}`)
  }
}
process.exitCode = failed ? 1 : 0

async function validatePackage(inputRoot) {
  const { hostRoot, root } = await resolvePackageRoot(inputRoot)
  await requireHostAgentEntry(hostRoot)
  await validateTopology(root)

  const stateEntryPath = resolve(root, "state/STATE.json")
  const state = await readJson(stateEntryPath)
  validateStateShape(state)

  const stateDocumentPath = await requireAreaFile(root, dirname(stateEntryPath), state.document, "state document", "state")
  const logPaths = await requireUniqueAreaFiles(root, dirname(stateEntryPath), state.logs, "state log", "logs")
  await validateResources(root, dirname(stateEntryPath), state.resources)

  if (state.protocol.id !== verifierProtocol.id || state.protocol.revision !== verifierProtocol.revision) {
    throw new Error("selected protocol identity does not match the executing protocol")
  }
  if (state.protocol.artifactDigest !== verifierProtocolDigest) {
    throw new Error("selected protocol artifact digest does not match the executing protocol")
  }
  validateProtocolLockLocator(state.protocol.lock)
  let localProtocolLockPath
  if (state.protocol.package === state.id) {
    localProtocolLockPath = await requireAreaFile(root, root, state.protocol.lock, "self-hosted protocol lock", "locks")
    requireLockEntryPath(root, localProtocolLockPath, "self-hosted protocol lock")
  }

  const activePaths = await requireUniqueLockPaths(root, dirname(stateEntryPath), state.activeLocks, "active lock")
  const candidatePaths = await requireUniqueLockPaths(root, dirname(stateEntryPath), state.candidateLocks, "candidate lock")
  assertDisjoint(activePaths, candidatePaths, "activeLocks and candidateLocks")

  const lockPaths = await discoverLocks(root)
  const locks = new Map()
  const lockIdentities = new Set()
  for (const lockPath of lockPaths) {
    const lock = await validateLock({
      root,
      lockPath,
      state,
      stateEntryPath,
      stateDocumentPath,
      logPaths,
      mustMatchCurrent: candidatePaths.includes(lockPath),
    })
    const identity = `${lock.kind}:${lock.id}:${lock.revision}`
    if (lockIdentities.has(identity)) throw new Error(`duplicate lock identity: ${identity}`)
    lockIdentities.add(identity)
    locks.set(lockPath, lock)
  }

  const selected = localProtocolLockPath ? locks.get(localProtocolLockPath) : undefined
  if (localProtocolLockPath && !selected) throw new Error("self-hosted protocol lock is not an immediate lock bundle")
  if (selected && selected.kind !== "protocol") throw new Error("self-hosted protocol lock must have kind protocol")
  if (selected && (selected.protocol.id !== state.protocol.id || selected.protocol.revision !== state.protocol.revision)) {
    throw new Error("self-hosted protocol lock identity does not match state")
  }
  if (selected && selected.implementation.digest !== state.protocol.artifactDigest) {
    throw new Error("self-hosted protocol implementation digest does not match state selection")
  }

  for (const lockPath of activePaths) {
    const lock = locks.get(lockPath)
    if (!lock) throw new Error(`active lock is not an immediate lock bundle: ${relative(root, lockPath)}`)
    if (lock.status !== "accepted") throw new Error(`active lock is not accepted: ${relative(root, lockPath)}`)
  }
  for (const lockPath of candidatePaths) {
    const lock = locks.get(lockPath)
    if (!lock) throw new Error(`candidate lock is not an immediate lock bundle: ${relative(root, lockPath)}`)
    if (lock.status !== "candidate") throw new Error(`candidate lock does not have candidate status: ${relative(root, lockPath)}`)
  }

  if (state.status === "approved") {
    if (selected && selected.status !== "accepted") throw new Error("approved self-hosted state must select an accepted protocol lock")
    await validateAuthority(state.authority, root, dirname(stateEntryPath), logPaths, "approved state")
  }
}

async function resolvePackageRoot(inputRoot) {
  const input = await realpath(inputRoot)
  if (basename(input) === ".intent" && await isFile(resolve(input, "state/STATE.json"))) {
    return { hostRoot: dirname(input), root: input }
  }
  const standalone = await isFile(resolve(input, "state/STATE.json"))
  const embedded = await isFile(resolve(input, ".intent/state/STATE.json"))
  if (standalone && embedded) throw new Error("host contains both standalone and embedded intent-package roots")
  if (standalone) return { hostRoot: input, root: input }
  if (embedded) return { hostRoot: input, root: await realpath(resolve(input, ".intent")) }
  throw new Error("cannot locate state/STATE.json or .intent/state/STATE.json")
}

async function requireHostAgentEntry(hostRoot) {
  const entry = resolve(hostRoot, "AGENTS.md")
  if (!await isFile(entry)) throw new Error("host root requires AGENTS.md bootstrap entry")
}

async function isFile(path) {
  try {
    return (await stat(path)).isFile()
  } catch {
    return false
  }
}

async function validateTopology(root) {
  const entries = await readdir(root, { withFileTypes: true })
  const requiredAreas = new Set(["locks", "logs", "state"])
  const foundAreas = new Set()
  for (const entry of entries) {
    if (entry.name.startsWith(".")) continue
    if (requiredAreas.has(entry.name)) {
      if (!entry.isDirectory()) throw new Error(`top-level semantic area is not a directory: ${entry.name}`)
      foundAreas.add(entry.name)
      continue
    }
    if (entry.isFile()) continue
    throw new Error(`unsupported top-level entry: ${entry.name}`)
  }
  const missing = [...requiredAreas].filter((name) => !foundAreas.has(name))
  if (missing.length > 0) {
    throw new Error(`missing top-level semantic area${missing.length > 1 ? "s" : ""}: ${missing.join(", ")}`)
  }
}

function validateStateShape(state) {
  if (state?.$schema !== "meta-intent/0.2/state") throw new Error("unsupported state schema")
  requireString(state.id, "state id")
  requireString(state.revision, "state revision")
  if (!["draft", "approved", "retired"].includes(state.status)) {
    throw new Error("state status must be draft, approved, or retired")
  }
  requireString(state.document, "state document")
  if (!Array.isArray(state.logs) || state.logs.length === 0) throw new Error("state logs must be a non-empty array")
  if (!Array.isArray(state.resources)) throw new Error("state resources must be an array")
  if (!Array.isArray(state.activeLocks)) throw new Error("state activeLocks must be an array")
  if (!Array.isArray(state.candidateLocks)) throw new Error("state candidateLocks must be an array")
  requireString(state.protocol?.id, "state protocol id")
  requireString(state.protocol?.revision, "state protocol revision")
  requireString(state.protocol?.package, "state protocol package")
  requireString(state.protocol?.uri, "state protocol uri")
  requireString(state.protocol?.lock, "state protocol lock")
  requireDigest(state.protocol?.artifactDigest, "state protocol artifact digest")
}

function validateProtocolLockLocator(value) {
  requireString(value, "state protocol lock")
  if (!/^locks\/[^/]+\/LOCK\.json$/.test(value)) {
    throw new Error("state protocol lock must be a package-relative locks/<lock-id>/LOCK.json path")
  }
}

async function validateResources(root, base, resources) {
  const ids = new Set()
  for (const resource of resources) {
    if (typeof resource === "string") {
      await requireAreaFile(root, base, resource, "state file resource", "state")
      continue
    }
    if (resource === null || typeof resource !== "object") throw new Error("resource must be a state path or object")
    requireString(resource.id, "resource id")
    requireString(resource.kind, "resource kind")
    requireString(resource.uri, "resource uri")
    if (ids.has(resource.id)) throw new Error(`duplicate resource id: ${resource.id}`)
    ids.add(resource.id)
  }
}

async function discoverLocks(root) {
  const locksRoot = resolve(root, "locks")
  const entries = await readdir(locksRoot, { withFileTypes: true })
  const paths = []
  for (const entry of entries) {
    if (entry.name.startsWith(".")) continue
    if (!entry.isDirectory()) throw new Error(`locks may contain only lock directories: locks/${entry.name}`)
    paths.push(await requireFileWithin(root, resolve(locksRoot, entry.name, "LOCK.json"), `lock entry locks/${entry.name}/LOCK.json`))
  }
  return paths.sort()
}

async function validateLock(context) {
  const { root, lockPath, state, stateEntryPath, stateDocumentPath, logPaths, mustMatchCurrent } = context
  const lock = await readJson(lockPath)
  if (!["protocol", "realization"].includes(lock.kind)) {
    throw new Error(`invalid lock kind in ${relative(root, lockPath)}`)
  }
  requireString(lock.id, "lock id")
  requireString(lock.revision, "lock revision")
  if (!["candidate", "accepted", "failed", "stale", "retired"].includes(lock.status)) {
    throw new Error(`invalid lock status in ${relative(root, lockPath)}`)
  }
  requireString(lock.protocol?.id, "lock protocol id")
  requireString(lock.protocol?.revision, "lock protocol revision")
  validateAcceptance(lock.acceptance, lockPath)

  if (mustMatchCurrent && (lock.protocol.id !== state.protocol.id || lock.protocol.revision !== state.protocol.revision)) {
    throw new Error(`current lock protocol does not match state in ${relative(root, lockPath)}`)
  }
  requireString(lock.package?.id, "lock package id")
  requireString(lock.package?.revision, "lock package revision")
  if (mustMatchCurrent && (lock.package.id !== state.id || lock.package.revision !== state.revision)) {
    throw new Error(`lock package identity does not match state in ${relative(root, lockPath)}`)
  }

  const snapshotPaths = await validateStateBinding(
    root,
    dirname(lockPath),
    lock.state,
    stateEntryPath,
    stateDocumentPath,
    state,
    lock.package,
    mustMatchCurrent,
  )
  const lockedLogPaths = await validateLogBindings(root, dirname(lockPath), lock.logs, logPaths, mustMatchCurrent)

  const artifactPaths = await validateArtifacts(root, dirname(lockPath), lockPath, lock.artifacts, snapshotPaths)

  if (lock.kind === "protocol") {
    requireString(lock.implementation?.path, "protocol implementation path")
    requireDigest(lock.implementation?.digest, "protocol implementation digest")
    const implementationPath = await requireFileWithin(root, resolve(dirname(lockPath), lock.implementation.path), "protocol implementation")
    if (!isWithin(dirname(lockPath), implementationPath)) throw new Error("protocol implementation must be inside its lock bundle")
    await verifyDigest(implementationPath, lock.implementation.digest)
    if (!artifactPaths.has(implementationPath)) throw new Error("protocol implementation must be listed as a lock artifact")
  } else {
    validateRealizationTarget(lock.target)
  }

  if (lock.status === "accepted") {
    if (lock.acceptance.status !== "passed") throw new Error(`accepted lock lacks passed acceptance in ${relative(root, lockPath)}`)
    await validateAuthority(lock.authority, root, dirname(lockPath), lockedLogPaths, `accepted lock ${relative(root, lockPath)}`)
  }
  return lock
}

async function validateStateBinding(root, base, binding, stateEntryPath, stateDocumentPath, state, lockPackage, mustMatchCurrent) {
  requireString(binding?.revision, "lock state revision")
  if (mustMatchCurrent && binding.revision !== state.revision) throw new Error("candidate lock state revision does not match current state")
  requireDigest(binding?.entry?.digest, "lock state entry digest")
  requireDigest(binding?.document?.digest, "lock state document digest")
  const entryPath = await requireFileWithin(root, resolve(base, binding?.entry?.path), "lock state entry snapshot")
  const documentPath = await requireFileWithin(root, resolve(base, binding?.document?.path), "lock state document snapshot")
  const snapshotRoot = resolve(base, "inputs/state")
  if (!isWithin(snapshotRoot, entryPath) || !isWithin(snapshotRoot, documentPath)) {
    throw new Error("lock state snapshots must be inside inputs/state")
  }
  await verifyDigest(entryPath, binding.entry.digest)
  await verifyDigest(documentPath, binding.document.digest)
  const snapshotState = await readJson(entryPath)
  if (snapshotState?.id !== lockPackage.id) throw new Error("lock state snapshot id does not match lock package")
  if (snapshotState?.revision !== binding.revision || snapshotState.revision !== lockPackage.revision) {
    throw new Error("lock state snapshot revision does not match lock binding")
  }
  if (mustMatchCurrent) {
    await verifyDigest(stateEntryPath, binding.entry.digest)
    await verifyDigest(stateDocumentPath, binding.document.digest)
  }
  return new Set([entryPath, documentPath])
}

async function validateLogBindings(root, base, bindings, selectedLogPaths, mustMatchCurrent) {
  if (!Array.isArray(bindings) || bindings.length === 0) throw new Error("concrete lock logs must be a non-empty array")
  const locked = new Set()
  for (const binding of bindings) {
    requireString(binding?.path, "lock log path")
    requireDigest(binding?.digest, "lock log digest")
    const path = await requireAreaFile(root, base, binding.path, "lock log", "logs")
    if (locked.has(path)) throw new Error(`duplicate lock log: ${binding.path}`)
    locked.add(path)
    await verifyDigest(path, binding.digest)
  }
  if (mustMatchCurrent && (locked.size !== selectedLogPaths.length || selectedLogPaths.some((path) => !locked.has(path)))) {
    throw new Error("candidate lock logs do not exactly match state logs")
  }
  return [...locked]
}

async function validateArtifacts(root, bundleRoot, lockPath, artifacts, snapshotPaths) {
  if (!Array.isArray(artifacts)) throw new Error(`lock artifacts must be an array in ${relative(root, lockPath)}`)
  const declared = new Set()
  for (const artifact of artifacts) {
    requireString(artifact?.path, "lock artifact path")
    requireDigest(artifact?.digest, "lock artifact digest")
    const path = await requireFileWithin(root, resolve(bundleRoot, artifact.path), "lock artifact")
    if (!isWithin(bundleRoot, path)) throw new Error(`lock artifact leaves its bundle: ${artifact.path}`)
    if (path === lockPath) throw new Error("LOCK.json cannot list itself as an artifact")
    if (declared.has(path)) throw new Error(`duplicate lock artifact: ${artifact.path}`)
    declared.add(path)
    await verifyDigest(path, artifact.digest)
  }
  const actual = await listBundleFiles(root, bundleRoot, lockPath)
  const accounted = new Set([...declared, ...snapshotPaths])
  if (actual.length !== accounted.size || actual.some((path) => !accounted.has(path))) {
    const missing = actual.filter((path) => !accounted.has(path)).map((path) => relative(bundleRoot, path))
    const absent = [...accounted].filter((path) => !actual.includes(path)).map((path) => relative(bundleRoot, path))
    throw new Error(`lock artifact manifest is incomplete; undeclared=[${missing.join(", ")}], absent=[${absent.join(", ")}]`)
  }
  return declared
}

function validateAcceptance(acceptance, lockPath) {
  if (!["pending", "passed", "failed", "incomplete"].includes(acceptance?.status)) {
    throw new Error(`invalid lock acceptance status in ${lockPath}`)
  }
  if (!Array.isArray(acceptance.evidence)) throw new Error(`lock acceptance evidence must be an array in ${lockPath}`)
  if (acceptance.status === "passed" && acceptance.evidence.length === 0) {
    throw new Error(`passed acceptance requires evidence in ${lockPath}`)
  }
}

function validateRealizationTarget(target) {
  requireString(target?.kind, "realization target kind")
  if (target.kind === "git") {
    requireString(target.uri, "git realization target uri")
    if (typeof target.commit !== "string" || !/^[0-9a-f]{40,64}$/.test(target.commit)) {
      throw new Error("git realization target commit must be a full hexadecimal object id")
    }
    if (!Array.isArray(target.paths) || target.paths.length === 0) {
      throw new Error("git realization target paths must be a non-empty array")
    }
    const paths = target.paths.map((path) => normalizeTargetPath(path))
    const unique = new Set(paths)
    if (unique.size !== paths.length) throw new Error("git realization target paths must be unique")
    for (const left of paths) {
      for (const right of paths) {
        if (left !== right && right.startsWith(`${left}/`)) {
          throw new Error("git realization target paths must not overlap")
        }
      }
    }
    return
  }
  requireString(target.identity, "realization target identity")
  requireString(target.baseline, "realization target baseline")
}

function normalizeTargetPath(value) {
  requireString(value, "git realization target path")
  if (value.startsWith("/") || value.endsWith("/") || value.includes("\\") || value.split("/").some((part) => part === "" || part === "." || part === "..")) {
    throw new Error(`invalid git realization target path: ${value}`)
  }
  return value
}

async function validateAuthority(authority, root, base, selectedLogPaths, label) {
  if (authority?.decision !== "approved") throw new Error(`${label} requires an approved authority decision`)
  requireString(authority.decisionLog, `${label} authority decision log`)
  requireDigest(authority.digest, `${label} authority decision digest`)
  const path = await requireAreaFile(root, base, authority.decisionLog, `${label} authority log`, "logs")
  if (!selectedLogPaths.includes(path)) throw new Error(`${label} authority log is not bound by its governing logs`)
  await verifyDigest(path, authority.digest)
}

async function requireUniqueAreaFiles(root, base, candidates, label, area) {
  const paths = []
  const seen = new Set()
  for (const candidate of candidates) {
    const path = await requireAreaFile(root, base, candidate, label, area)
    if (seen.has(path)) throw new Error(`duplicate ${label}: ${candidate}`)
    seen.add(path)
    paths.push(path)
  }
  return paths
}

async function requireUniqueLockPaths(root, base, candidates, label) {
  return requireUniqueAreaFiles(root, base, candidates, label, "locks")
}

async function requireAreaFile(root, base, candidate, label, area) {
  requireString(candidate, label)
  const path = await requireFileWithin(root, resolve(base, candidate), label)
  const areaRoot = resolve(root, area)
  if (!isWithin(areaRoot, path)) throw new Error(`${label} must be inside ${area}: ${candidate}`)
  return path
}

async function requireFileWithin(root, candidatePath, label) {
  const lexical = relative(root, candidatePath)
  if (lexical === ".." || lexical.startsWith(`..${sep}`) || isAbsolute(lexical)) {
    throw new Error(`${label} escapes the package root`)
  }
  const path = await realpath(candidatePath)
  if (!isWithin(root, path)) throw new Error(`${label} escapes the package root through a symbolic link`)
  const info = await stat(path)
  if (!info.isFile()) throw new Error(`${label} is not a file`)
  return path
}

function requireLockEntryPath(root, lockPath, label) {
  const rel = relative(resolve(root, "locks"), lockPath).split(sep)
  if (rel.length !== 2 || rel[1] !== "LOCK.json") throw new Error(`${label} must be locks/<lock-id>/LOCK.json`)
}

async function listBundleFiles(root, bundleRoot, lockPath) {
  const result = []
  async function visit(directory) {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const entryPath = resolve(directory, entry.name)
      if (entry.isSymbolicLink()) throw new Error(`lock bundle contains symbolic link: ${relative(root, entryPath)}`)
      if (entry.isDirectory()) await visit(entryPath)
      else if (entry.isFile()) {
        const real = await realpath(entryPath)
        if (real !== lockPath) result.push(real)
      } else {
        throw new Error(`lock bundle contains unsupported entry: ${relative(root, entryPath)}`)
      }
    }
  }
  await visit(bundleRoot)
  return result.sort()
}

function assertDisjoint(left, right, label) {
  const rightSet = new Set(right)
  if (left.some((item) => rightSet.has(item))) throw new Error(`${label} must be disjoint`)
}

function isWithin(parent, child) {
  const fromParent = relative(parent, child)
  return fromParent === "" || (!fromParent.startsWith(`..${sep}`) && fromParent !== ".." && !isAbsolute(fromParent))
}

async function readJson(path) {
  try {
    return JSON.parse(await readFile(path, "utf8"))
  } catch (error) {
    throw new Error(`cannot read JSON ${path}: ${error instanceof Error ? error.message : String(error)}`)
  }
}

async function verifyDigest(path, expected) {
  const actual = await fileDigest(path)
  if (actual !== expected) throw new Error(`digest mismatch for ${path}: expected ${expected}, got ${actual}`)
}

async function fileDigest(path) {
  const source = await readFile(path)
  return `sha256:${createHash("sha256").update(source).digest("hex")}`
}

function requireString(value, label) {
  if (typeof value !== "string" || value.trim() === "") throw new Error(`${label} must be a non-empty string`)
}

function requireDigest(value, label) {
  if (typeof value !== "string" || !/^sha256:[0-9a-f]{64}$/.test(value)) {
    throw new Error(`${label} must be a concrete sha256 digest`)
  }
}
