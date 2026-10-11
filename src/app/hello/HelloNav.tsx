"use client";

import { useEffect, useState } from "react";

export const NAV_SECTIONS: [id: string, label: string][] = [
  ["h-gap", "The problem"],
  ["h-belief", "The solution"],
  ["h-ask", "The ask"],
  ["h-resources", "Documents"],
  ["h-contact", "Leave your details"],
  ["h-team", "Founder and team"],
  ["h-why", "Why us"],
  ["h-tech", "The technology"],
  ["h-product", "The product"],
  ["h-how", "How it works"],
  ["h-privacy", "Privacy"],
  ["h-where", "Where we are"],
];

/**
 * Section menu. On wide screens it is a sticky rail beside the column with the
 * current section highlighted; on phones it collapses into a "Jump to" list so
 * the QR-landing experience stays a single scroll. Plain anchors throughout, so
 * it still works if the observer never runs.
 */
export function HelloNav() {
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const els = NAV_SECTIONS.map(([id]) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null,
    );
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length) {
          visible.sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-10% 0px -70% 0px" },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const links = NAV_SECTIONS.map(([id, label]) => (
    <li key={id}>
      <a href={`#${id}`} aria-current={active === id ? "true" : undefined}>
        {label}
      </a>
    </li>
  ));

  return (
    <>
      <nav className="h-rail" aria-label="Sections">
        <p className="h-label">On this page</p>
        <ul>{links}</ul>
      </nav>
      <details className="h-jump">
        <summary>Jump to a section</summary>
        <ul>{links}</ul>
      </details>
    </>
  );
}
