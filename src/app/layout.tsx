import type { Metadata } from "next";
import Script from "next/script";
import { Montserrat, Open_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { safeJsonLd } from "@/lib/jsonld";
import "./globals.css";

const GA_ID = "G-7189T07H60";
const FB_PIXEL_ID = "193078867851800";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

const siteIdentityJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://www.thirdpowerlife.ai/#website",
      name: "Third Power Life",
      url: "https://www.thirdpowerlife.ai",
      description:
        "Dan Gentry helps leaders leverage AI to grow their business without losing their humanity.",
      publisher: {
        "@id": "https://www.thirdpowerlife.ai/#organization",
      },
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      "@id": "https://www.thirdpowerlife.ai/#organization",
      name: "Third Power Performance",
      url: "https://www.thirdpowerlife.ai",
      logo: "https://www.thirdpowerlife.ai/images/headshot.png",
      founder: {
        "@id": "https://www.thirdpowerlife.ai/#person",
      },
      sameAs: [
        "https://www.linkedin.com/in/daniel-gentry/",
        "https://www.youtube.com/channel/UCLoq_zdO_H37-VV2GttNP6g",
        "https://www.skool.com/impact-ai",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://www.thirdpowerlife.ai/#person",
      name: "Dan Gentry",
      jobTitle: "Founder and AI Strategist",
      url: "https://www.thirdpowerlife.ai/about",
      image: "https://www.thirdpowerlife.ai/images/headshot.png",
      worksFor: {
        "@id": "https://www.thirdpowerlife.ai/#organization",
      },
      sameAs: [
        "https://www.linkedin.com/in/daniel-gentry/",
        "https://www.youtube.com/channel/UCLoq_zdO_H37-VV2GttNP6g",
      ],
      knowsAbout: [
        "Artificial Intelligence",
        "AI Strategy",
        "Fractional Chief AI Officer",
        "AI Leadership",
        "Human-centered AI",
      ],
    },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.thirdpowerlife.ai"),
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
    images: [
      {
        url: "https://www.thirdpowerlife.ai/images/tedx-stage-photo.jpg",
        width: 1200,
        height: 630,
        alt: "Dan Gentry on the TEDx stage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dan Gentry — Your Personal Chief AI Officer",
    description:
      "TEDx Speaker · AI Strategist. AI for your business. Humanity for your life.",
    images: ["https://www.thirdpowerlife.ai/images/tedx-stage-photo.jpg"],
  },
  alternates: {
    canonical: "https://www.thirdpowerlife.ai",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonLd(siteIdentityJsonLd) }}
        />

        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
          `}
        </Script>

        {/* Facebook Pixel */}
        <Script id="fb-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${FB_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${FB_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      </head>
      <body className="antialiased bg-navy text-light font-body">
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
