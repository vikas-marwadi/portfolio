import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "accent";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-transform hover:scale-105",
        variant === "default" && "bg-secondary text-secondary-foreground",
        variant === "primary" && "bg-primary/10 text-primary",
        variant === "accent" && "bg-accent/10 text-accent",
        className
      )}
    >
      {children}
    </span>
  );
}
