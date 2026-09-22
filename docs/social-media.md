# Social media hosting

Social videos, their thumbnails, and social-only graphics are stored outside this
website's deployment output. Website images, blog/OG artwork, and downloads remain
in `public/`.

`social-media.config.json` contains the media origin and the six separated path
prefixes. Next.js external rewrites preserve existing `www.thirdpowerlife.ai`
asset URLs, including query strings and byte-range requests. New social posts
should use the direct media-origin URL to avoid routing delivery through Vercel.
The origin must return the correct media Content-Type, support HEAD and Range,
and require no login for these already-public assets.

## Publishing

Publish approved media to the separate origin first. Verify the complete file,
Content-Type, and a byte-range response before adding its URL to a social queue.
Use a new filename when replacing media rather than overwriting a cached URL.
Do not put media back into the separated `public/` directories: `prebuild` checks
for this and fails rather than silently growing every deployment again.

## Recovery

The migration baseline is Git commit
`a42e44c083650b979c714eeb8d2055d28edce17f`; it retains the original assets.
The operator also keeps a SHA-256 manifest and a separate verified media copy.
Reverting the complete migration commit restores both the original files and
routing. Do not remove the media origin while any deployed website version
still rewrites to it.

The current origin uses independently served storage on the existing operations
server. Origin availability depends on that server and its internet connection.
External rewrite caching is enabled explicitly for this older Vercel project,
but an uncached request still requires the origin to be available.

Removing files from a new deployment does not delete previous Vercel deployments
or immediately reset storage usage. Retention cleanup is a separate operation.
