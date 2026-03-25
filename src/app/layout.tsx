import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dan Gentry — Your Personal Chief AI Officer | Third Power Life",
  description:
    "TEDx Speaker · AI Strategist · Founder, Third Power Performance. Dan helps leaders leverage AI to grow their business — without losing their humanity in the process.",
  openGraph: {
    title: "Dan Gentry — Your Personal Chief AI Officer",
    description:
      "TEDx Speaker · AI Strategist. AI for your business. Humanity for your life.",
    url: "https://www.thirdpowerlife.ai",
    siteName: "Third Power Life",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-white text-gray-900">
        <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm border-b border-gray-100 z-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <a href="/" className="font-bold text-xl text-gray-900">
                Third Power<span className="text-blue-600">Life</span>
              </a>
              <div className="hidden md:flex items-center space-x-8">
                <a href="/about" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">About</a>
                <a href="/speaking" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">Speaking</a>
                <a href="/consulting" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">Consulting</a>
                <a href="/podcast" className="text-sm font-medium text-gray-600 hover:text-gray-900 transition">Podcast</a>
                <a href="/contact" className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition">
                  Get in Touch
                </a>
              </div>
              <button className="md:hidden p-2" aria-label="Menu">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </nav>
        <main className="pt-16">{children}</main>
        <footer className="bg-gray-50 border-t border-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-3">Third Power Life</h3>
                <p className="text-sm text-gray-600">AI for your business. Humanity for your life.</p>
                <p className="text-sm text-gray-500 mt-2">Third Power Performance, LLC</p>
              </div>
              <div>
                <h3 className="font-semibold text-sm uppercase tracking-wide text-gray-500 mb-3">Connect</h3>
                <div className="space-y-2 text-sm">
                  <a href="https://www.linkedin.com/in/daniel-gentry/" className="block text-gray-600 hover:text-blue-600" target="_blank" rel="noopener">LinkedIn</a>
                  <a href="https://www.youtube.com/channel/UCLoq_zdO_H37-VV2GttNP6g" className="block text-gray-600 hover:text-blue-600" target="_blank" rel="noopener">YouTube</a>
                  <a href="https://www.skool.com/impact-ai" className="block text-gray-600 hover:text-blue-600" target="_blank" rel="noopener">IMPACT AI Community</a>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-sm uppercase tracking-wide text-gray-500 mb-3">Legal</h3>
                <div className="space-y-2 text-sm">
                  <a href="https://www.thirdpowerperformance.com/terms" className="block text-gray-600 hover:text-blue-600">Terms of Service</a>
                  <a href="https://www.thirdpowerperformance.com/privacy-policy" className="block text-gray-600 hover:text-blue-600">Privacy Policy</a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200 text-center text-sm text-gray-500">
              © {new Date().getFullYear()} Third Power Performance, LLC. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
