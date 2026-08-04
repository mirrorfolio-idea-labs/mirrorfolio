import type { Metadata } from "next";

/**
 * Every interior route carried the same head() shape under TanStack: title,
 * description, the og:* trio, twitter:card and a canonical link. This keeps
 * that identical across the App Router pages without repeating it ten times.
 */
export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    openGraph: { title, description, type: "website", url: path },
    twitter: { card: "summary_large_image" },
    alternates: { canonical: path },
  };
}
