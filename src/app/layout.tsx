import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
});

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
    <html lang="en" className={`${montserrat.variable} ${openSans.variable}`}>
      <body className="antialiased bg-navy text-light font-body">
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
