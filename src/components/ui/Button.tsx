import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-white shadow-lg shadow-primary/25 hover:bg-primary-soft hover:shadow-primary/40",
  secondary:
    "bg-surface-2 text-foreground border border-border hover:border-primary/50 hover:bg-surface",
  outline:
    "border border-border text-foreground hover:border-primary/60 hover:text-primary-soft",
  ghost: "text-muted hover:text-foreground hover:bg-surface-2",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-6 text-sm",
  lg: "h-13 px-8 text-base",
};

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50";

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}

interface LinkButtonProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
  size?: Size;
}

/** Same styling as Button, rendered as an anchor — handy for links & CTAs. */
export function LinkButton({
  variant = "primary",
  size = "md",
  className,
  ...props
}: LinkButtonProps) {
  return (
    <a
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}
