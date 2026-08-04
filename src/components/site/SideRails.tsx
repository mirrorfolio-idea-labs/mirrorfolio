import Link from "next/link";
import { LogoMark } from "./Logo";

/**
 * SideRails — fixed vertical rails flanking the grid (desktop only).
 * Left: lab mark in a bordered cell. Right: stacked audience cells.
 */
export function SideRails() {
  return (
    <div className="hidden xl:block">
      <div className="fixed left-0 top-16 z-40 border-b border-r border-border bg-background">
        <Link
          href="/"
          aria-label="Mirrorfolio home"
          className="flex h-14 w-14 items-center justify-center brackets"
        >
          <LogoMark className="h-[18px] w-[18px]" />
        </Link>
      </div>

      <div className="fixed right-0 top-16 z-40 flex flex-col border-l border-border bg-background">
        {[
          { label: "Families", to: "/families" as const },
          { label: "Hospitals", to: "/hospitals" as const },
          { label: "Contact", to: "/contact" as const },
        ].map((i) => (
          <Link
            key={i.label}
            href={i.to}
            className="mono-label flex h-28 w-14 items-center justify-center border-b border-border transition-colors hover:bg-secondary hover:text-foreground"
          >
            <span className="[writing-mode:vertical-rl] whitespace-nowrap text-[9px]">
              {i.label}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
