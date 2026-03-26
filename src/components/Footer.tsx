import Link from "next/link";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/speaking", label: "Speaking" },
  { href: "/consulting", label: "Consulting" },
  { href: "/podcast", label: "Podcast" },
  { href: "/contact", label: "Contact" },
] as const;

const SOCIAL_LINKS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/daniel-gentry/",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCLoq_zdO_H37-VV2GttNP6g",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "Apple Podcasts",
    href: "https://podcasts.apple.com/us/podcast/third-power-life/id1440527025",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M5.34 0A5.328 5.328 0 000 5.34v13.32A5.328 5.328 0 005.34 24h13.32A5.328 5.328 0 0024 18.66V5.34A5.328 5.328 0 0018.66 0H5.34zm6.525 2.568c2.336 0 4.448.902 6.025 2.466 1.326 1.32 2.16 3.07 2.418 5.074.06.47-.312.882-.792.882a.788.788 0 01-.786-.69 7.632 7.632 0 00-1.95-4.108c-1.278-1.272-2.988-2.004-4.915-2.004-1.926 0-3.636.732-4.914 2.004a7.632 7.632 0 00-1.95 4.108.788.788 0 01-.786.69c-.48 0-.852-.414-.792-.882.258-2.004 1.092-3.756 2.418-5.074 1.577-1.564 3.69-2.466 6.024-2.466zm.072 3.132c1.56 0 2.988.588 4.074 1.674a5.712 5.712 0 011.554 3.024.684.684 0 01-.678.78.69.69 0 01-.684-.594c-.18-1.14-.72-2.166-1.53-2.976A5.048 5.048 0 0011.937 6.6c-1.38 0-2.664.528-3.636 1.488a5.048 5.048 0 00-1.53 2.976.69.69 0 01-.684.594.684.684 0 01-.678-.78 5.712 5.712 0 011.554-3.024 6.036 6.036 0 014.074-1.674v.12-.12zm-.06 3.036a3.24 3.24 0 013.24 3.24c0 .948-.414 1.8-1.068 2.388.63 1.386.93 2.85.93 4.404 0 .858-.6 2.664-3.09 2.664-2.49 0-3.09-1.806-3.09-2.664 0-1.554.3-3.018.93-4.404A3.223 3.223 0 018.637 11.976a3.24 3.24 0 013.24-3.24z" />
      </svg>
    ),
  },
  {
    label: "Spotify",
    href: "https://open.spotify.com/show/5bNph2wNURGSVgcDvtnNlu",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
      </svg>
    ),
  },
] as const;

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Top section: brand + nav + social */}
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand Column */}
          <div>
            <Link href="/" className="font-heading font-bold text-xl tracking-tight">
              <span className="text-white">Third Power</span>
              <span className="text-electric"> Life</span>
            </Link>
            <p className="mt-2 text-sm text-light/50">
              Your Personal Chief AI Officer
            </p>
            <p className="mt-4 text-sm text-light/50">
              <a
                href="mailto:info@ThirdPowerPerformance.com"
                className="transition-colors hover:text-electric"
              >
                info@ThirdPowerPerformance.com
              </a>
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-light/50">
              Navigate
            </h3>
            <ul className="mt-4 space-y-3">
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-light/60 transition-colors hover:text-electric"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Column */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-light/50">
              Connect
            </h3>
            <div className="mt-4 flex gap-4">
              {SOCIAL_LINKS.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light/40 transition-colors hover:text-electric"
                  aria-label={label}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-light/40">
              &copy; 2026 Third Power Performance, LLC
            </p>
            <div className="flex gap-6">
              <a
                href="https://www.thirdpowerperformance.com/terms"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-light/40 transition-colors hover:text-electric"
              >
                Terms
              </a>
              <a
                href="https://www.thirdpowerperformance.com/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-light/40 transition-colors hover:text-electric"
              >
                Privacy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
