#!/usr/bin/env node

import { createHash } from "node:crypto"
import { copyFile, readFile, readdir, realpath, stat, writeFile } from "node:fs/promises"
import { dirname, relative, resolve, sep } from "node:path"
import process from "node:process"
import { fileURLToPath } from "node:url"

const protocolRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const packageRoot = resolve(protocolRoot, "../..")
const protocolPath = resolve(protocolRoot, "PROTOCOL.md")
const lockPath = resolve(protocolRoot, "LOCK.json")
const protocolDigest = await fileDigest(protocolPath)
const previous = JSON.parse(await readFile(lockPath, "utf8"))
if (previous.status === "accepted") {
  throw new Error("refusing to reseal an accepted protocol lock; create a new candidate bundle")
}
const inputs = process.argv.slice(2)
const hosts = inputs.length === 0
  ? [packageRoot, resolve(protocolRoot, "templates/intent-package"), resolve(protocolRoot, "examples/dsh-right-sidebar")]
  : inputs.map((input) => resolve(input))

const roots = []
for (const host of hosts) {
  const root = await resolveSemanticRoot(host)
  roots.push(root)
  const statePath = resolve(root, "state/STATE.json")
  const state = JSON.parse(await readFile(statePath, "utf8"))
  state.$schema = "meta-intent/0.2/state"
  state.protocol = {
    ...state.protocol,
    id: "meta-intent",
    revision: "0.2",
    package: "meta-intent",
    uri: "https://github.com/sch246/meta-intent.git",
    lock: "locks/protocol-0.2/LOCK.json",
    artifactDigest: protocolDigest,
  }
  await writeFile(statePath, `${JSON.stringify(state, null, 2)}\n`)
}

const root = roots[0]
if (root !== packageRoot) throw new Error("first reseal root must be the self-hosted meta-intent package")
const statePath = resolve(root, "state/STATE.json")
const documentPath = resolve(root, "state/STATE.md")
const stateBytes = await readFile(statePath)
const documentBytes = await readFile(documentPath)
const state = JSON.parse(stateBytes)
await copyFile(statePath, resolve(protocolRoot, "inputs/state/STATE.json"))
await copyFile(documentPath, resolve(protocolRoot, "inputs/state/STATE.md"))

const logs = []
for (const selected of state.logs) {
  const path = resolve(dirname(statePath), selected)
  logs.push({ path: portable(relative(protocolRoot, path)), digest: await fileDigest(path) })
}

const artifacts = []
for (const path of await listFiles(protocolRoot)) {
  if (path === lockPath || path.startsWith(`${resolve(protocolRoot, "inputs/state")}${sep}`)) continue
  artifacts.push({ path: portable(relative(protocolRoot, path)), digest: await fileDigest(path) })
}

const lock = {
  ...previous,
  kind: "protocol",
  id: "meta-intent-protocol",
  revision: "0.2",
  status: "candidate",
  protocol: { id: "meta-intent", revision: "0.2" },
  package: { id: state.id, revision: state.revision },
  state: {
    revision: state.revision,
    entry: { path: "inputs/state/STATE.json", digest: digest(stateBytes) },
    document: { path: "inputs/state/STATE.md", digest: digest(documentBytes) },
  },
  logs,
  implementation: { path: "PROTOCOL.md", digest: protocolDigest },
  artifacts,
  acceptance: {
    status: "incomplete",
    evidence: [
      {
        id: "structural-conformance-0.2",
        observedOn: "2026-08-25",
        command: "node locks/protocol-0.2/bin/validate.mjs . locks/protocol-0.2/templates/intent-package locks/protocol-0.2/examples/dsh-right-sidebar",
        result: "self-hosted, standalone template, and embedded sidebar example passed",
      },
      {
        id: "validator-regressions-0.2",
        observedOn: "2026-08-25",
        command: "node --test locks/protocol-0.2/tests/validate.test.mjs",
        result: "19 structural conformance tests passed",
      },
    ],
  },
  authority: { decision: "pending-user-review" },
  unresolved: [
    "real reference-backed install, drift-maintenance, and uninstall evidence",
    "cross-revision migration policy",
    "portable trust, signing, and maintainer succession",
    "machine-readable capability and ownership vocabulary",
  ],
}
await writeFile(lockPath, `${JSON.stringify(lock, null, 2)}\n`)
console.log(`sealed protocol 0.2 for ${roots.length} package roots`)

async function resolveSemanticRoot(host) {
  const root = await realpath(host)
  if (await isFile(resolve(root, "state/STATE.json"))) return root
  if (await isFile(resolve(root, ".intent/state/STATE.json"))) return realpath(resolve(root, ".intent"))
  throw new Error(`cannot find intent state below ${root}`)
}

async function listFiles(root) {
  const result = []
  async function visit(directory) {
    for (const entry of await readdir(directory, { withFileTypes: true })) {
      const path = resolve(directory, entry.name)
      if (entry.isDirectory()) await visit(path)
      else if (entry.isFile()) result.push(path)
      else throw new Error(`unsupported lock artifact: ${path}`)
    }
  }
  await visit(root)
  return result.sort()
}

async function isFile(path) {
  try {
    return (await stat(path)).isFile()
  } catch {
    return false
  }
}

async function fileDigest(path) {
  return digest(await readFile(path))
}

function digest(value) {
  return `sha256:${createHash("sha256").update(value).digest("hex")}`
}

function portable(path) {
  return path.split(sep).join("/")
}
