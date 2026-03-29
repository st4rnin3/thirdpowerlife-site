"use client";

import { useEffect } from "react";

/** Price data for each product slug — used for conversion event values */
const productPrices: Record<string, { value: number; currency: string; name: string }> = {
  "speaking-engagement": { value: 5000, currency: "USD", name: "Speaking Engagement" },
  "fcaio-initial": { value: 1000, currency: "USD", name: "fCAIO Initial Session" },
  "fcaio-monthly": { value: 2500, currency: "USD", name: "fCAIO Monthly Retainer" },
};

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
  }
}

export default function ConversionTracker({ slug }: { slug: string }) {
  useEffect(() => {
    const product = productPrices[slug];
    const value = product?.value ?? 0;
    const currency = product?.currency ?? "USD";
    const name = product?.name ?? slug;

    // Facebook Pixel — Purchase event
    if (typeof window.fbq === "function") {
      window.fbq("track", "Purchase", {
        value,
        currency,
        content_name: name,
        content_ids: [slug],
        content_type: "product",
      });
    }

    // Google Analytics — purchase event
    if (typeof window.gtag === "function") {
      window.gtag("event", "purchase", {
        currency,
        value,
        items: [
          {
            item_id: slug,
            item_name: name,
            price: value,
            quantity: 1,
          },
        ],
      });
    }
  }, [slug]);

  return null;
}
