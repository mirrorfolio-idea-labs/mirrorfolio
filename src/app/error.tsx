"use client";

import Link from "next/link";
import { useEffect } from "react";

import { reportLovableError } from "@/lib/lovable-error-reporting";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
    reportLovableError(error, { boundary: "next_app_error_boundary" });
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-background text-foreground">
      <div className="max-w-md text-center">
        <div className="mono-label">Error</div>
        <h1 className="mt-4 font-display text-4xl">Something didn&apos;t load.</h1>
        <p className="mt-4 text-muted-foreground">
          A signal got interrupted. Try again, or return home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={reset}
            className="rounded-full bg-foreground text-primary-foreground px-5 py-2.5 text-sm"
          >
            Try again
          </button>
          <Link href="/" className="rounded-full border border-border px-5 py-2.5 text-sm">
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
