"use client";

import { useEffect } from "react";

export function scrollToHash(id: string, behavior: ScrollBehavior = "smooth") {
  if (!id) {
    window.scrollTo({ top: 0, behavior });
    return;
  }
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior, block: "start" });
}

export default function HashScroll() {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const run = () => {
      const id = window.location.hash.replace(/^#/, "");
      if (!id) return;
      window.setTimeout(() => scrollToHash(id), 150);
    };

    run();
    window.addEventListener("hashchange", run);
    return () => window.removeEventListener("hashchange", run);
  }, []);

  return null;
}
