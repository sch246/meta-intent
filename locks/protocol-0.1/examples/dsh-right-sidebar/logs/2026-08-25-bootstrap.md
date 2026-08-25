# Source record: right-sidebar bootstrap

Record ID: `SRC-2026-08-25-DSH-RIGHT-SIDEBAR`

Status: selective bootstrap provenance. The fuller existing design remains at `/root/dsh-right-sidebar/PROPOSAL.md` until the user approves this intent package as its replacement authority.

## Desired effect carried into investigation

- Add a full-height right sidebar that participates in horizontal layout like the left sidebar.
- Make it default-hidden, resizable, and able to remember the last width after refresh.
- Allow plugins to register tabs and expose global show/hide plus internal collapse actions.
- Allow main-view and sidebar interactions to share session-scoped state.
- Keep the platform free of built-in business features.
- Track any required Harness source modifications with the package rather than leaving them as unowned local edits.

## Investigated reality

- The current Harness layout has a details column that may provide the relevant geometry, but current public layout actions do not fully express width preference semantics.
- The desired global navbar contribution and some main-view action seams may require new public target capabilities.
- Existing `/root/dsh-right-sidebar` files are scaffold and implementation evidence; they do not override the desired behavior.

## Intent tension and next decisions

- The requested platform behavior is clear, but the exact tab contribution shape and target public API names depend on deeper target inspection.
- Default width, limits, narrow-layout behavior, and persistent storage are implementation choices unless investigation shows that they change the observable intent.
- A first realization cannot be locked until a clean target revision is selected and the official extension seams are verified.
