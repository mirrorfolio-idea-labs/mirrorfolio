import * as React from "react";

import { cn } from "@/lib/utils";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => {
    return (
      <input
        type={type}
        data-slot="input"
        className={cn(
          // Base styles — warm, dignified
          "flex w-full bg-card border text-foreground text-body transition-all duration-200",
          "placeholder:text-muted-foreground",
          // Sizing
          "h-12 px-4 py-3",
          // Focus states — accent highlight
          "outline-none focus:border-accent focus:ring-2 focus:ring-accent/20",
          // Disabled
          "disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-muted",
          // Error state
          error
            ? "border-destructive focus:border-destructive focus:ring-destructive/20"
            : "border-border",
          // File input
          "file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
