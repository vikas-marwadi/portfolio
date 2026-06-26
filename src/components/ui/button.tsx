import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "btn-ripple inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        variant === "primary" &&
          "bg-primary text-primary-foreground shadow-sm hover:opacity-90 hover:shadow-md hover:shadow-primary/20",
        variant === "outline" &&
          "border border-border bg-transparent text-foreground hover:bg-muted hover:border-primary/40",
        variant === "ghost" &&
          "text-foreground hover:bg-muted",
        size === "sm" && "h-8 px-3 text-sm",
        size === "md" && "h-10 px-5 text-sm",
        size === "lg" && "h-12 px-8 text-base",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

interface ButtonLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export function ButtonLink({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a
      className={cn(
        "btn-ripple inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        variant === "primary" &&
          "bg-primary text-primary-foreground shadow-sm hover:opacity-90 hover:shadow-lg hover:shadow-primary/25",
        variant === "outline" &&
          "border border-border bg-transparent text-foreground hover:bg-muted hover:border-primary/40",
        variant === "ghost" &&
          "text-foreground hover:bg-muted",
        size === "sm" && "h-8 px-3 text-sm",
        size === "md" && "h-10 px-5 text-sm",
        size === "lg" && "h-12 px-8 text-base",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
