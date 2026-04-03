"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */

import { useEffect } from "react";

/**
 * Cal.com inline embed for the CONNECT landing page.
 * Uses the same 30min link but with CONNECT-specific prefill context.
 */
export default function CalEmbedConnect() {
  useEffect(() => {
    const w = window as any;

    if (!w.Cal) {
      w.Cal = function (...args: any[]) {
        const cal = w.Cal;
        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          const s = document.createElement("script");
          s.src = "https://app.cal.com/embed/embed.js";
          s.async = true;
          document.head.appendChild(s);
          cal.loaded = true;
        }
        cal.q.push(args);
      };
      w.Cal.q = w.Cal.q || [];
    }

    w.Cal("init", { origin: "https://cal.com" });

    w.Cal("inline", {
      calLink: "thirdpowerlife/30min",
      elementOrSelector: "#cal-connect-embed",
      config: {
        layout: "month_view",
        theme: "dark",
        notes: "CONNECT 2026 attendee — AI Clarity Call",
      },
    });

    w.Cal("ui", {
      theme: "dark",
      cssVarsPerTheme: {
        dark: {
          "cal-bg": "#001433",
          "cal-bg-emphasis": "#00266E",
          "cal-border": "rgba(255, 255, 255, 0.1)",
          "cal-border-emphasis": "rgba(0, 210, 255, 0.3)",
          "cal-text": "#E6E8EA",
          "cal-text-emphasis": "#ffffff",
          "cal-text-subtle": "rgba(230, 232, 234, 0.6)",
          "cal-brand": "#0057FF",
          "cal-brand-emphasis": "#00D2FF",
        },
      },
      hideEventTypeDetails: false,
    });
  }, []);

  return (
    <div
      id="cal-connect-embed"
      className="w-full overflow-visible"
      style={{ minHeight: "500px" }}
    />
  );
}
