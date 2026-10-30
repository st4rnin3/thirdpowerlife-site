# Bundled production fonts

These are the exact font files and `@font-face` rules served by the existing
production site on 2026-10-30, before the speaker reel release. They replace the
build-time `next/font/google` fetch because that loader fails while parsing the
current Google font URLs. No font files were modified or regenerated.

Source stylesheet:
`https://www.thirdpowerlife.ai/_next/static/css/e155428e8917b72e.css`

`production-font-manifest.json` records the original public URLs, byte lengths,
and SHA-256 hashes. The 15 WOFF2 files are in `public/fonts/`; `fonts.css` retains
all 42 production `@font-face` rules, changing only the source URL prefix from
`/_next/static/media/` to `/fonts/`. It preserves:

- Montserrat normal weights 400, 500, 600, 700, 800, and 900, with the existing
  Cyrillic extended, Cyrillic, Vietnamese, Latin extended, and Latin subsets.
- Open Sans normal variable weights 300–800 and stretch 100%, with the existing
  Cyrillic extended, Cyrillic, Greek extended, Greek, Hebrew, math, symbols,
  Vietnamese, Latin extended, and Latin subsets.
- `font-display: swap`, every original Unicode range, and the exact Arial
  fallback ascent/descent/line-gap/size-adjust metrics.
- The `--font-montserrat` and `--font-open-sans` family lists used by the site's
  existing Tailwind theme. The root's stable `site-fonts` class defines them.

The root layout preloads the same two Latin files as the existing deployment.
Fonts are served from this deployment; neither builds nor visitors need a Google
Fonts request.

The original fonts are distributed under the SIL Open Font License 1.1. License
notices are included as `public/fonts/Montserrat-OFL.txt` and
`public/fonts/Open-Sans-OFL.txt`, retrieved from the official Google Fonts repo:

- `https://raw.githubusercontent.com/google/fonts/main/ofl/montserrat/OFL.txt`
- `https://raw.githubusercontent.com/google/fonts/main/ofl/opensans/OFL.txt`
