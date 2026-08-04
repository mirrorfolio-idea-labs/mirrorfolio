/**
 * Canonical origin for the site. Used for metadataBase, canonical links,
 * sitemap entries and JSON-LD. Override per environment with NEXT_PUBLIC_SITE_URL
 * (e.g. https://mirrorfolio.com once the domain is live).
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://mirrorfolio-preview.lovable.app";
