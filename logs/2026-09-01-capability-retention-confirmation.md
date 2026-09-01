# Capability retention confirmation before aggregate retirement

Date: 2026-09-01

## Observed migration failure

During a destructive DeepSeek Harness update, the candidate deployment retired `super-injector` and reinstalled the independently identified plugins. The deployment omitted four useful responsibilities that had already been extracted into local source packages because the migration treated the aggregate plugin's retirement direction and an Agent-reconstructed plugin list as sufficient authority. The candidate profile therefore contained neither the aggregate injector nor the four independent packages.

The user reported overall satisfaction with the migrated result but asked where Agent Games and the other previously discussed extractions had gone. The user explicitly corrected the process: the Agent should ask which features of every plugin must be preserved instead of deciding from code or its own judgment.

## Authority decision

The user explicitly retained these desired effects:

- `tool-model-catalog`, providing `list_models`;
- `spawn-agent`, providing a `spawn_agent` whose caller can select the model;
- `agent-games`, including preservation of the Who Is the Undercover prompt;
- `shared-room`, as an independent capability that games may use.

This authority confirms the capabilities, not every current UI detail, data format, argument name, default, or implementation mechanism. Those lower-order details require their own user confirmation before they become locked STATE.

## Meta-intent correction

Replacing, decomposing, or retiring an aggregate plugin requires a responsibility inventory before removal. For each discovered feature, the Agent names the proposed owning package or the absence of one, reports overlap and deployment status, and asks the user to classify the feature as retained, retired, or still requiring a decision. Every retained desired effect then enters the STATE of its owning package before realization or aggregate retirement proceeds.

Source code, runtime registration, historical use, and Agent reconstruction are evidence for what may exist; none can silently decide which behavior the user values. Post-migration feedback is a privileged clarification window: when the user identifies a missing or changed behavior and says it should remain, that authority sharpens the owning STATE for later migrations. Satisfaction with the rest of a candidate does not implicitly lock every unmentioned implementation detail.

## Scope

The four plugin names above belong to their owning packages, not to generic meta-intent STATE. The generic correction is the feature-inventory and confirmation requirement for aggregate decomposition, destructive migration, and retirement.
