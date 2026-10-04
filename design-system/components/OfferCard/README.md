# OfferCard

A priced offer: tag, name, italic tagline, price with a fine-print line, optional tier chips, a benefit list and a WhatsApp button pinned to the bottom.

**Consumer provides:** `offer-tag` (audience or "Start Here · Free"), `h3` name, `offer-tagline` (the question or promise in one line), `offer-price` with a `<small>` terms line, optional `.tier` chips (`<b>` for the number), a `ul.list` of 2–5 benefits, and a `btn-primary` to WhatsApp.

- Prices in Indonesian rupiah, written `Rp 2,500,000` or short `IDR 750k – 1.5jt`. Fine print uses ` · ` separators.
- In a 3-up `offer-grid` the cards stretch to equal height and buttons align along the bottom (`margin-top: auto`).
- The house ladder: Clarity Mapping Session (IDR 750k–1.5jt) → 5 Session Journey (IDR 5–8jt) → Strategic Soul Consulting (IDR 10jt+). Start the row with the free consultation.
