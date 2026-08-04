import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-background text-foreground">
      <div className="max-w-md text-center">
        <div className="mono-label">404 · Not found</div>
        <h1 className="mt-4 font-display text-5xl">This page is quiet.</h1>
        <p className="mt-4 text-muted-foreground">
          The page you were looking for isn&apos;t here — or it&apos;s still becoming.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground text-primary-foreground px-5 py-2.5 text-sm"
        >
          Return home <span aria-hidden>→</span>
        </Link>
      </div>
    </div>
  );
}
