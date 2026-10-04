One system for Mark Tulloch's four brands. Lumindra is the umbrella and the source: its live site (deep forest green, antique gold, Palatino headings, pill buttons, gold hairlines) defines every component and spacing value here. Sunshooters Bar & Grill, Conscious Systems and Bali AI Consultant reuse the same components and re-skin them through four colour themes. Pick the theme for the brand you're building; never mix two brands' themes on one page.

## The family

| theme | brand | ground | signature | second light | voice |
| --- | --- | --- | --- | --- | --- |
| `lumindra` | Lumindra (umbrella: AI consulting + clarity) | forest `#16271a` | antique gold `#c9a24b` | tree-of-life spark green | Calm, senior, practical |
| `sunshooters` | Sunshooters Bar & Grill, Legian | night black | neon-sign blue | globe green | Warm, social, a little loud |
| `conscious` | Conscious Systems (clarity coaching) | deep space black | monogram gold | teal thread | Reflective, precise, unhurried |
| `bali-ai` | Bali AI Consultant (YouTube, workshops) | charcoal | line-art teal | circuit glow | Clear, teacherly, upbeat |

The `house-*` colour tokens hold each brand's fixed identity colour regardless of theme. Use them only where several brands appear together: a portfolio grid, a "Our businesses" strip, a brand picker.

## Content fundamentals

- **Speak as Mark or as the business, to "you".** "Tell Mark what's slowing your business down." First person singular for Mark's own pages; "we" only for Sunshooters staff and venue copy.
- **Operator, not agency.** Lead with lived proof: "Former COO, Bali Realty · 35+ years operational experience", "Systems tested inside active businesses, not just presented in decks". Name the real venue (Sunshooters, Legian) when citing proof.
- **Middle dot as the house separator.** Eyebrows, meta lines and fine print join short phrases with ` · `: "AI Consultant Bali · Real-World Systems".
- **Title Case for headings and buttons; sentence case for body.** Buttons are verb phrases: "Book a Clarity Call", "Book on WhatsApp", "View Real-World Proof".
- **Prices in rupiah**, written `Rp 2,500,000` in full or `IDR 750k – 1.5jt` short. Say what's included in the `<small>` line.
- **WhatsApp is the primary channel.** Every primary CTA opens `wa.me/6282144029645` with a pre-filled message naming the offer. Also print the number as text. The path is Low Friction → Fast Connection → Human Close.
- **Bilingual where staff read it.** Sunshooters operational copy pairs English with Bahasa Indonesia.
- **No emoji in UI.** The only glyphs are ★ for ratings and the curly “ quote mark.
- Brand taglines, used verbatim: Sunshooters "Your home away from home"; Conscious Systems "Awaken · Align · Evolve".

## Colour

- Grounds: `surface` for the page, `surface-2` for an alternate band, `surface-raised` for solid objects (testimonials). All four brands are dark-first; there is no light theme.
- Text: `ink` for headings and key text, `ink-muted` for paragraphs, list items and nav links. Both pass 7:1 on every surface in every theme.
- `brand` is the one accent: card titles, eyebrows, prices, stars, link underlines, the primary button. `brand-bright` is its hover and gradient partner. Text on either fill is `on-brand`, never white.
- Separation comes from translucent brand tints, not greys: `brand-tint` fills panels and tiles; `brand-tint-strong` marks hover and highlights; borders use `hairline` (default), `hairline-faint` (section dividers) and `hairline-strong` (pills, CTA box).
- `accent-2` is each logo's second light. Use it for one thing per view at most (a live dot, one chart series).
- Sunshooters note: the logo's neon blue (`house-sunshooters-blue`, `#2f62ff`) is 4.2:1 on black, under the text threshold. The theme's `brand` is lifted to `#4f7bff` (5.4:1) so titles and prices stay readable; keep `#2f62ff` for fills, glows and signage.
- Focus: a 2px solid `focus` ring, 3px offset, on every link and button.

## Type

- **Headings** use `--font-display`, the Palatino stack the site ships with (no web font needed). Styles: `display-xl` (hero, clamp 2.2–4rem), `heading-lg` (section h2), `heading-cta`, `heading-sm` (card h3 in `brand`), `stat-number`, `price`, `quote`.
- **Body** uses `--font-body`, the system UI stack: `lead` (hero paragraph, 740px max), `body`, `body-sm`, `small`, `ui` (buttons and nav).
- **Labels**: `eyebrow` and `tag`, uppercase with 0.09–0.1em tracking. The nav wordmark is spaced at 0.32em: `L U M I N D R A`.
- **Brand faces** (Google Fonts, for logos-in-type and brand headers only): Cinzel for the Lumindra and Bali AI wordmarks, Cormorant Garamond for Conscious Systems, Satisfy + Fredoka for Sunshooters. They mirror each logo's lettering. Body copy stays in `--font-body` in every brand.
- Headings `text-wrap: balance`, tracking -0.02em on display sizes. Keep running text near 65 characters.

## Layout and spacing

- Content sits in `.wrap`: max width `max-site` (1140px; `max-article` 1000px for case studies, `max-profile` 960px for profiles), side padding `gutter`, `gutter-mobile` at 680px and below.
- Every `section` has `space-section` vertical padding and a `hairline-faint` top border. The hero gets `space-hero` on top.
- Grids gap at `space-gap` (cards, offers, FAQ) or `space-gap-tight` (tiles, buttons). Cards pad `space-card`.
- Breakpoints: `bp-tablet` (980px) stacks two-column layouts and drops 3-up grids to 2-up; `bp-mobile` (680px) hides nav links and makes everything one column.
- Common section order: Nav → Hero (eyebrow, h1, lead, two buttons, meta line, hero card) → Trust strip → Proof → Testimonials → Services → Offers → About → FAQ → CTA box → Footer.

## Shape, depth and motion

- Radii: `radius-pill` for every button and label, `radius-lg` for cards, `radius-md` for tiles, `radius-xl` only on the CTA box.
- One elevation, `shadow-lift`, on primary buttons, cards, offers, the hero card, testimonials and the CTA box. Flat panels and tiles use tint and hairline instead.
- `glow` is the brand's light source (Sunshooters neon, Conscious Systems gold, Bali AI circuit, Lumindra spark). Use it once per screen, on a logo or the brand script.
- Motion is limited to 0.2s colour and transform transitions on hover. Respect `prefers-reduced-motion`.

## Imagery and logos

- Logos live in **Logos**. All are full-colour raster art on black or transparent; place them on `surface` (or the near-black brand grounds), never on a light background or a busy photo.
- Photography is real: the Sunshooters venue, staff and food, Bali locations, Mark in session. No stock people.
- Video posters and thumbnails crop to 4:5 or 16:9 with `radius-sm` corners.

## Iconography

The live site uses no icon set. Proof lines use words, ratings use ★, quotes use “. If a build needs icons, use a thin-line set at 1.5px stroke tinted `brand`, matching the logos' line-art style, and record the choice here.
