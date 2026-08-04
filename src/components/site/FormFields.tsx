"use client";

import * as React from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

/**
 * The site's form controls: a hairline underline, no box, no radius, no shadow.
 * These wrap the shadcn primitives and neutralise their card-style defaults
 * (h-9, rounded-md, px-3, shadow, focus ring) so the rendered control matches
 * the original markup exactly while keeping shadcn's accessibility wiring.
 */
const CONTROL = cn(
  "h-auto w-full rounded-none border-0 border-b border-border bg-transparent px-0 py-3 text-sm shadow-none transition-none",
  "focus:border-foreground focus:outline-none focus-visible:ring-0 focus-visible:outline-none",
  "md:text-sm",
);

/** Applied when a field has failed validation. */
const INVALID = "border-destructive focus:border-destructive";

export function FieldLabel({
  htmlFor,
  children,
  optional = false,
}: {
  htmlFor: string;
  children: React.ReactNode;
  optional?: boolean;
}) {
  return (
    <Label htmlFor={htmlFor} className="mono-label font-normal">
      {children}
      {optional && <span className="text-muted-foreground"> (optional)</span>}
    </Label>
  );
}

export function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mono-label text-destructive">
      {message}
    </p>
  );
}

export const TextField = React.forwardRef<
  HTMLInputElement,
  React.ComponentProps<"input"> & { invalid?: boolean }
>(({ className, invalid, ...props }, ref) => (
  <Input ref={ref} className={cn(CONTROL, invalid && INVALID, className)} {...props} />
));
TextField.displayName = "TextField";

export const TextAreaField = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea"> & { invalid?: boolean }
>(({ className, invalid, ...props }, ref) => (
  <Textarea
    ref={ref}
    className={cn(CONTROL, "min-h-0 resize-none", invalid && INVALID, className)}
    {...props}
  />
));
TextAreaField.displayName = "TextAreaField";

/**
 * A native <select> on purpose. The shadcn/Radix Select is a div-based listbox
 * with its own trigger and portal popover — a different control with different
 * rendering, which would break visual parity with the original form and lose
 * the OS-native picker on mobile. The styling below matches the other fields.
 */
export const SelectField = React.forwardRef<
  HTMLSelectElement,
  React.ComponentProps<"select"> & { invalid?: boolean; options: readonly string[] }
>(({ className, invalid, options, ...props }, ref) => (
  <select ref={ref} className={cn(CONTROL, invalid && INVALID, className)} {...props}>
    <option value="" disabled>
      Select…
    </option>
    {options.map((o) => (
      <option key={o} value={o}>
        {o}
      </option>
    ))}
  </select>
));
SelectField.displayName = "SelectField";

/**
 * Honeypot + timing guard, submitted by every form on the site.
 * Hidden from people and from assistive tech; bots fill it in anyway.
 */
export function SpamGuard() {
  return (
    <div aria-hidden className="hidden">
      <label htmlFor="company_website">Company website</label>
      <input
        id="company_website"
        name="company_website"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        defaultValue=""
      />
    </div>
  );
}
