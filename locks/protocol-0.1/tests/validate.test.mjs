import assert from "node:assert/strict"
import { execFile } from "node:child_process"
import { createHash } from "node:crypto"
import { cp, mkdir, mkdtemp, readFile, symlink, writeFile } from "node:fs/promises"
import { tmpdir } from "node:os"
import { dirname, join, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { promisify } from "node:util"
import test from "node:test"

const execFileAsync = promisify(execFile)
const protocolRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..")
const packageRoot = resolve(protocolRoot, "../..")
const validator = resolve(protocolRoot, "bin/validate.mjs")
const sidebarExample = resolve(protocolRoot, "examples/dsh-right-sidebar")
const protocolDigest = await digestFile(resolve(protocolRoot, "PROTOCOL.md"))

test("accepts the self-hosted package and zero-code sidebar example", async () => {
  await execFileAsync(process.execPath, [validator, packageRoot, sidebarExample])
})

test("accepts a root README as non-normative presentation", async () => {
  const root = await makeReferencePackage()
  await writeFile(join(root, "README.md"), "# Presentation only\n")
  await execFileAsync(process.execPath, [validator, root])
})

test("rejects an extra top-level semantic entry", async () => {
  const root = await makeReferencePackage()
  await mkdir(join(root, "src"))
  await rejects(root, "unsupported top-level entry: src")
})

test("rejects a missing state document", async () => {
  const root = await makeReferencePackage()
  const entryPath = join(root, "state/STATE.json")
  const state = JSON.parse(await readFile(entryPath, "utf8"))
  state.document = "MISSING.md"
  await writeFile(entryPath, JSON.stringify(state, null, 2))
  await rejects(root, "MISSING.md")
})

test("rejects a lexical path escape", async () => {
  const parent = await mkdtemp(join(tmpdir(), "meta-intent-escape-"))
  const root = await makeReferencePackage(join(parent, "package"))
  await writeFile(join(parent, "OUTSIDE.md"), "outside")
  const entryPath = join(root, "state/STATE.json")
  const state = JSON.parse(await readFile(entryPath, "utf8"))
  state.document = "../../OUTSIDE.md"
  await writeFile(entryPath, JSON.stringify(state, null, 2))
  await rejects(root, "escapes the package root")
})

test("rejects a symbolic-link path escape", async () => {
  const parent = await mkdtemp(join(tmpdir(), "meta-intent-symlink-"))
  const root = await makeReferencePackage(join(parent, "package"))
  await writeFile(join(parent, "OUTSIDE.md"), "outside")
  await symlink(join(parent, "OUTSIDE.md"), join(root, "state/ESCAPE.md"))
  const entryPath = join(root, "state/STATE.json")
  const state = JSON.parse(await readFile(entryPath, "utf8"))
  state.document = "ESCAPE.md"
  await writeFile(entryPath, JSON.stringify(state, null, 2))
  await rejects(root, "symbolic link")
})

test("rejects a selection for another protocol revision", async () => {
  const root = await makeReferencePackage()
  const statePath = join(root, "state/STATE.json")
  const state = JSON.parse(await readFile(statePath, "utf8"))
  state.protocol.revision = "9.9"
  await writeFile(statePath, JSON.stringify(state, null, 2))
  await rejects(root, "selected protocol identity does not match")
})

test("rejects a selection with another protocol artifact digest", async () => {
  const root = await makeReferencePackage()
  const statePath = join(root, "state/STATE.json")
  const state = JSON.parse(await readFile(statePath, "utf8"))
  state.protocol.artifactDigest = `sha256:${"0".repeat(64)}`
  await writeFile(statePath, JSON.stringify(state, null, 2))
  await rejects(root, "selected protocol artifact digest does not match")
})

test("rejects authority evidence not bound by the historical lock", async () => {
  const root = await copySelfPackage()
  const bundle = join(root, "locks/historical-realization")
  await mkdir(join(bundle, "inputs/state"), { recursive: true })
  const stateJson = await readFile(join(root, "state/STATE.json"))
  const stateDocument = await readFile(join(root, "state/STATE.md"))
  await writeFile(join(bundle, "inputs/state/STATE.json"), stateJson)
  await writeFile(join(bundle, "inputs/state/STATE.md"), stateDocument)
  const state = JSON.parse(stateJson)
  const lockedLog = "2026-08-25-information-flow.md"
  const authorityLog = "2026-08-25-three-layer-self-hosting.md"
  await writeFile(join(bundle, "LOCK.json"), JSON.stringify({
    kind: "realization",
    id: "historical-realization",
    revision: "0.1",
    status: "accepted",
    protocol: { id: "meta-intent", revision: "0.1" },
    package: { id: state.id, revision: state.revision },
    state: {
      revision: state.revision,
      entry: { path: "inputs/state/STATE.json", digest: digest(stateJson) },
      document: { path: "inputs/state/STATE.md", digest: digest(stateDocument) },
    },
    logs: [{
      path: `../../logs/${lockedLog}`,
      digest: await digestFile(join(root, "logs", lockedLog)),
    }],
    target: {
      kind: "git-checkout",
      identity: "historical-target",
      baseline: "example-baseline",
    },
    artifacts: [],
    acceptance: { status: "passed", evidence: [{ id: "adoption-check" }] },
    authority: {
      decision: "approved",
      decisionLog: `../../logs/${authorityLog}`,
      digest: await digestFile(join(root, "logs", authorityLog)),
    },
  }, null, 2))
  await rejects(root, "authority log is not bound by its governing logs")
})

test("rejects a changed concrete lock artifact", async () => {
  const root = await copySelfPackage()
  await writeFile(join(root, "locks/protocol-0.1/PROTOCOL.md"), "tampered")
  await rejects(root, "digest mismatch")
})

test("rejects passed acceptance without evidence", async () => {
  const root = await copySelfPackage()
  const lockPath = join(root, "locks/protocol-0.1/LOCK.json")
  const lock = JSON.parse(await readFile(lockPath, "utf8"))
  lock.acceptance = { status: "passed", evidence: [] }
  await writeFile(lockPath, JSON.stringify(lock, null, 2))
  await rejects(root, "passed acceptance requires evidence")
})

test("rejects an accepted lock without a bound authority decision", async () => {
  const root = await copySelfPackage()
  const lockPath = join(root, "locks/protocol-0.1/LOCK.json")
  const lock = JSON.parse(await readFile(lockPath, "utf8"))
  lock.status = "accepted"
  lock.acceptance = { status: "passed", evidence: [{ id: "syntactic-only" }] }
  delete lock.authority
  await writeFile(lockPath, JSON.stringify(lock, null, 2))
  await rejects(root, "requires an approved authority decision")
})

async function makeReferencePackage(at) {
  const root = at ?? await mkdtemp(join(tmpdir(), "meta-intent-reference-"))
  await mkdir(join(root, "logs"), { recursive: true })
  await mkdir(join(root, "state"), { recursive: true })
  await mkdir(join(root, "locks"), { recursive: true })
  const logText = "# Source\n"
  const stateText = "# Intent\n"
  const state = {
    $schema: "meta-intent/0.1/state",
    id: "example.package",
    revision: "0.1.0-draft.1",
    status: "draft",
    document: "STATE.md",
    logs: ["../logs/source.md"],
    protocol: {
      id: "meta-intent",
      revision: "0.1",
      package: "meta-intent",
      lock: "locks/protocol-0.1/LOCK.json",
      artifactDigest: protocolDigest,
    },
    resources: [],
    activeLocks: [],
    candidateLocks: [],
  }
  const stateJson = JSON.stringify(state, null, 2)
  await writeFile(join(root, "logs/source.md"), logText)
  await writeFile(join(root, "state/STATE.md"), stateText)
  await writeFile(join(root, "state/STATE.json"), stateJson)
  return root
}

async function copySelfPackage() {
  const parent = await mkdtemp(join(tmpdir(), "meta-intent-self-"))
  const root = join(parent, "package")
  await cp(packageRoot, root, {
    recursive: true,
    filter: (source) => !source.includes(`${join(packageRoot, ".git")}`),
  })
  return root
}

async function rejects(root, message) {
  await assert.rejects(
    execFileAsync(process.execPath, [validator, root]),
    (error) => error.code === 1 && error.stderr.includes(message),
  )
}

async function digestFile(path) {
  return digest(await readFile(path))
}

function digest(value) {
  return `sha256:${createHash("sha256").update(value).digest("hex")}`
}
