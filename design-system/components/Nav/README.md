# Nav

A sticky top bar with the spaced wordmark on the left and anchor links plus a WhatsApp button on the right.

**Consumer provides:** the brand name split into two halves (the second half wrapped in `<span>` turns `brand`), 4–7 anchor links, and the WhatsApp link.

- Background `nav-glass` with a 14px backdrop blur; bottom edge `hairline`; min height `nav-height`.
- The Lumindra wordmark is spaced letter by letter (`L U M I N <span>D R A</span>`) at `nav-wordmark`. Other brands use their own split: `SUN <span>SHOOTERS</span>`, `CONSCIOUS <span>SYSTEMS</span>`, `BALI <span>AI</span>`.
- Links are `ink-muted`, turning `brand` on hover. The last item is always the WhatsApp `btn-secondary`.
- At `bp-mobile` hide `.nav-links`; the hero's primary button carries the CTA instead.
- Anchored sections get `scroll-margin-top: 90px` so the sticky bar doesn't cover headings.
