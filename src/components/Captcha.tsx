"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    turnstile?: any;
  }
}

export default function Turnstile({
  onVerify,
}: {
  onVerify: (token: string) => void;
}) {
  const renderedRef = useRef(false);

  useEffect(() => {
    // Avoid double-loading script
    if (window.turnstile) {
      renderTurnstile();
      return;
    }

    const script = document.createElement("script");
    script.src =
      "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
    script.async = true;

    script.onload = () => {
      renderTurnstile();
    };

    document.body.appendChild(script);

    function renderTurnstile() {
      if (renderedRef.current) return;
      if (!window.turnstile) return;

      window.turnstile.render("#cf-turnstile", {
        sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
        callback: onVerify,
      });

      renderedRef.current = true;
    }
  }, [onVerify]);

  return (
    <div className="mb-4 rounded-xl bg-white p-12 shadow-cardShadow dark:bg-s2 dark:text-slate-200">
      <div className="postHead flex items-start justify-start !rounded-t-xl">
        <h1 className="text-lg">Loading Graffiti Protocol safely</h1>
      </div>
      <div className="postBody">
        <div className="mt-4">
          <div id="cf-turnstile" />
        </div>
      </div>
    </div>
  );
}
