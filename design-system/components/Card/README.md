# Card

The brand's container family. `card` is the raised version for service grids; `panel`, `proof-box` and `faq-item` are flat; `hero-card` sits beside the hero heading.

**Consumer provides:** an `h3` title and either a paragraph or a `ul.list`.

| class | fill | shadow | padding | use |
| --- | --- | --- | --- | --- |
| `card` | `brand-tint` fading to clear | `shadow-lift` | `space-card` | Service grids, 3-up |
| `hero-card` | `brand-tint-strong` → `brand-tint`, 160° | `shadow-lift` | `space-lg` | One aside beside the hero h1 |
| `panel`, `proof-box` | `brand-tint` | none | `space-card` | About and proof sections, 2-up |
| `faq-item` | `brand-tint` | none | `space-md` | FAQ, 2-up |

- All use a `hairline` border and `radius-lg`. Titles are `heading-sm` in `brand`, body `body-sm` in `ink-muted`.
- Grids gap at `space-gap`: 3-up drops to 2-up at `bp-tablet` and 1-up at `bp-mobile`.
- `proof-link` is the in-card text link: `brand`, bold, with a `hairline-strong` underline.
