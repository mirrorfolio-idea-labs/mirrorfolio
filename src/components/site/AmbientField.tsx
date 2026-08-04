/**
 * AmbientField — measurement mesh backdrop.
 * A static engineered field: fine grid, hairline crosshair, signal ticks.
 * No glow, no blobs, no gradients.
 */
export function AmbientField({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 overflow-hidden grid-mesh ${className}`}
    >
      <div className="absolute left-1/2 top-0 h-full w-px bg-border" />
      <div className="absolute left-0 top-1/2 h-px w-full bg-border" />
      <span className="absolute left-1/2 top-1/2 -ml-[3px] -mt-[3px] h-1.5 w-1.5 bg-signal signal-pulse" />
    </div>
  );
}
