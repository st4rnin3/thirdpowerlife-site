# Speaking reel — 2026-10-30

The user approved speaker reel v2 and requested publication on `/speaking` to help
book speaking engagements. Publish only the approved 79.9-second reel, not the full
keynote.

## Implementation

- Added a responsive native video player after the existing hero, retaining the
  site's typography, colors, and booking destination (`/schedule`).
- Playback is user initiated, supports inline playback, and preloads metadata.
- The video has burned-in captions; a text transcript preserves the approved SRT
  wording. A separate default caption overlay is unnecessary.
- Public media URL:
  `https://openclaw.thirdpowerperformance.com/social-media/videos/social/dan-gentry-connect-2026-speaker-reel-v2.mp4`
- Poster: `/images/speaking/connect-2026-reel-poster.jpg`.
- Transcript: `/transcripts/connect-2026-speaker-reel-v2.txt`.

## Verification checkpoint

Source branch: `codex/speaking-reel`, based on
`e0d9c8050586984987e13ea5afc4d408739de5da`.

Implementation inspection confirms the reel precedes the keynote details and the
new booking link points to `/schedule`. On Windows with the repository's installed
dependencies, `git diff --check` and scoped ESLint
(`node_modules/.bin/eslint.cmd src/app/speaking/page.tsx`) passed on the working
changes. These checks do not test playback. Build, independent review, media upload
integrity/range checks, desktop/mobile playback and layout checks, deployment, and
live verification remain pending with the coordinating agent. This checkpoint
does not establish publication or successful playback.

## Build-enabling font fix

Both local Windows and Vercel builds failed in the installed `next/font/google`
loader's extension parser. The release now bundles the exact 15 existing
production font files and 42 font-face rules rather than requesting Google font
CSS during builds. Only font source URL prefixes change. All existing weights,
Unicode subsets, fallback metrics, CSS variables, and the two Latin preloads are
preserved. Provenance, SHA-256 hashes, and licensing are recorded in
`src/app/fonts/README.md` and `production-font-manifest.json`.

The root layout change is limited to its font import/configuration and preloads.
Scoped ESLint on `src/app/layout.tsx` passed with zero errors and the existing
tracking-pixel `no-img-element` warning. `git diff --check` passed. Direct
comparison against the source production stylesheet confirmed all 42 font-face
rules match exactly except source URL prefixes. All 15 font binaries passed
manifest byte-length/SHA-256 and WOFF2-signature checks.
## Release checkpoint

Verified application source: `2fbab5669b699b6db03240b42d6fbde04229a5e1`.
The earlier pending items above describe the initial implementation checkpoint.

- Windows production build passed (48 static pages); all four existing tests passed.
- Vercel preview `dpl_Fgcjg5i3usnM4RK3HD9grMH21FHP` completed its build.
- Independent reel review and expanded font review found no blocking issues.
- Public video HEAD returned 200 and `video/mp4`, with 58,693,013 bytes. Range
  returned 206 (`bytes 0-1023/58693013`); a subsequent full GET returned 200 and
  matched approved source SHA-256
  `3da36c1d2d5e37efedf24e5b6f89e049b668cf2c8a2ec3e9db08b1c46f6d3669`.
- Edge played the production build at desktop and 390px phone viewport sizes:
  duration 79.901 seconds, readyState 4, and currentTime advanced after keyboard
  play. Pause and seek responded; no horizontal overflow was observed. The
  transcript and poster return 200. This is browser viewport testing, not a
  physical phone test.
- Existing hero typography retained its font families and 672 × 180 heading
  dimensions at the original desktop viewport. All existing font binaries and
  font-face rules remain identical apart from asset URL prefixes.

Production publication and final public-page verification follow this checkpoint.
The coordinating workspace stores screenshots and final deployment evidence in
`artifacts/connect-2026-20261030/publication/`, outside this website repository.
Previous production deployment for rollback: `dpl_2NwY7zv1TqZUXut6Di3bF4XoQSpS`.
