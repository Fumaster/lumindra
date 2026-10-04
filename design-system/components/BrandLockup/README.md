# BrandLockup

Type-only lockups for each brand in the family, for headers, thumbnails and social tiles where the full logo image is too detailed.

**Consumer provides:** the brand name and, where it has one, the tagline. Switch the theme to the brand you are setting so `brand`, `ink` and `glow` follow it.

| brand | name | tagline / second line |
| --- | --- | --- |
| Lumindra | `lumindra-wordmark` (Cinzel 600, 0.24em) in `brand` | none |
| Sunshooters | `sunshooters-script` (Satisfy) in `ink` with `glow` as text-shadow | `sunshooters-caps` "BAR AND GRILL" (Fredoka 600) with a 1px `brand` stroke; `sunshooters-tagline` "Your home away from home" |
| Conscious Systems | `conscious-caps` (Cormorant Garamond 500, uppercase) in `ink` | `conscious-motto` "Awaken · Align · Evolve" in `ink-muted` |
| Bali AI Consultant | `bali-ai-wordmark` (Cinzel 700) in `brand` | a 160px `brand` rule underneath, like the logo |

- Load the Google faces with: `https://fonts.googleapis.com/css2?family=Cinzel:wght@600;700&family=Cormorant+Garamond:wght@400;500&family=Fredoka:wght@600&family=Satisfy&display=swap`.
- When a logo image is available and there is room for it, use the image from **Logos** instead.
