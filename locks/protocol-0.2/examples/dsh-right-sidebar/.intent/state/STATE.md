# DeepSeek Harness right sidebar

Status: draft embedded reference state. This package intentionally contains no target implementation code and does not treat the existing plugin proposal or worktree as semantic authority.

## Intent

Add a default-hidden, full-height right sidebar platform to DeepSeek Harness Web. It participates in horizontal layout, supports a global visibility action, remembers its last nonzero width, allows other plugins to register tabs, and enables a feature plugin to share session-scoped state between the main view and a right-sidebar tab.

The platform itself supplies no review, terminal, browser, file, Git, tool-detail, session-analysis, or other business feature.

## Acceptance criteria

- `SIDEBAR-001`: Opening the sidebar creates a full-height third layout column and reduces main-content width; closing it does not overlay or intercept the main view.
- `SIDEBAR-002`: A global navbar action opens and closes it, an internal action collapses it, and both expose state consistent with actual visibility.
- `SIDEBAR-003`: The official layout divider resizes it within official limits. Refresh restores the last nonzero width while visibility still starts hidden.
- `SIDEBAR-004`: An external fixture registers at least two ordered tabs, switches them, unloads them, and leaves the production platform with no built-in business tab.
- `SIDEBAR-005`: An external fixture uses one session-scoped store from both the main view and a sidebar tab; updates are immediately shared and sessions remain isolated.
- `SIDEBAR-006`: A linked local checkout can be installed, rebuilt, restarted through the existing `dsh-web` service, and removed without residual configuration or UI registration.
- `SIDEBAR-007`: Injection, HMR, session switching, narrow viewport behavior, and uninstall leave no duplicate slot, style, subscription, or state owner.
- `SIDEBAR-008`: Every required modification to DeepSeek Harness source is owned by the package realization lock and identifies the exact upstream baseline.
- `SIDEBAR-009`: A cold Agent starting at the host root discovers this embedded package through the protocol bootstrap without treating host plugin files as intent authority.

## Resources

- Target project: DeepSeek Harness Web.
- Development assembly: the `web` profile and its linked-plugin workflow.
- Runtime service currently used by the target: `dsh-web`.
- Existing design evidence: `/root/dsh-right-sidebar/PROPOSAL.md`, interpreted only as implementation evidence.
- Existing target checkout for bootstrap inspection: `/root/deepseek-harness`.

Local paths are bootstrap evidence and must be replaced by portable target/resource identities in an accepted package.

## Constraints and permissions

- Prefer public Harness services, slots, layout actions, and plugin lifecycle.
- Do not use fixed-position overlay layout, DOM queries, private stores, or a copied ChatView.
- Persist only the last nonzero right-sidebar width, not visibility, current session, narrow-viewport derivations, or the entire layout store.
- Business state belongs to the contributing feature plugin, not the sidebar platform.
- Source modifications may be synthesized only inside a target repository explicitly authorized by the user.
- Publishing, pushing, restarting services, installing into a live profile, or changing GitHub state requires authority granted for that operation.

## Non-goals

- Reimplementing ChatView, trajectory, the left sidebar, or official tool details.
- Defining feature-specific message collapse, jump target, or session display semantics.
- Providing a general DOM automation or private-store bridge.

## Implementation hints

- The current target has a `ui-layout` details column whose geometry may be reusable.
- A session-scoped list slot named `rightbar.tab` is a plausible contribution surface.
- A global additive navbar action and a narrow width-preference API may need to be added to Harness.
- A local profile `link:` dependency is a plausible development realization.

These hints may become obsolete when Harness changes. They are not acceptance requirements.

## Known tensions and decisions

- The exact public shape of a tab contribution is not yet approved by this state.
- Default width, width limits, narrow breakpoint, persistence key, and storage backend remain target-reality decisions unless they change observable intent.
- The current plugin repository contains a scaffold and historical handoff statements that do not all match its current worktree. They are implementation evidence, not normative truth.
- This reference package has not been cold-installed by an Agent and has no accepted realization lock.
