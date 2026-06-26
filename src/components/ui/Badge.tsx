import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  tone?: "default" | "primary" | "accent";
}

const tones = {
  default: "border-border bg-surface-2 text-muted",
  primary: "border-primary/30 bg-primary/10 text-primary-soft",
  accent: "border-accent/30 bg-accent/10 text-accent-soft",
};

/** Small pill used for tech tags and labels. */
export function Badge({
  tone = "default",
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium",
        tones[tone],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
