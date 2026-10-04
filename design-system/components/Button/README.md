# Button

A pill-shaped link or button in two weights: `btn-primary` for the one action a section exists for, `btn-secondary` for everything else.

**Markup:** `<a class="btn btn-primary">` or `<a class="btn btn-secondary">`. Add `btn-block` for a full-width button inside an offer card or on phones.

**Primary** fills with a 135° gradient from `brand` to `brand-bright`, sets its label in `on-brand` and lifts with `shadow-lift`. On hover it rises 1px and brightens 6%. **Secondary** is a `brand-tint` fill with a `hairline-strong` border and `ink` label; hover deepens the fill to `brand-tint-strong`.

**Consumer provides:** the label (a verb phrase from the reader's side: "Book a Clarity Call", "Book on WhatsApp") and the href.

- The primary CTA always opens WhatsApp with a pre-filled message to +62 821 4402 9645, `target="_blank" rel="noopener"`.
- One primary button per section. Pair it with at most one secondary.
- At 680px and below, stack hero buttons full width (`flex-direction: column; align-items: stretch`).
- Never put white text on a primary button: the label is always `on-brand`.
