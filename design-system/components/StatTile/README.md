# StatTile

Proof tiles. `stat-item` leads with a big figure; `trust-item` leads with a bold claim. Both sit in a row under a hero.

**Consumer provides:** for `stat-item`, a `.num` (a real figure: "4.9★", "11", "Live") and a `.label`; for `trust-item`, a `<strong>` claim and a `<span>` detail.

- `brand-tint` fill, `hairline` border, `radius-md`. Figures use `stat-number` in `brand`; labels `ink-muted`.
- Only real, checkable numbers. A word like "Live" is fine when the number doesn't exist yet.
- Rows of 3 (stats) or 4 (trust), gap `space-gap-tight`.
