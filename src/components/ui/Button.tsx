import { motion, type HTMLMotionProps } from "framer-motion";
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

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50";

// Subtle tactile feedback shared by every button/link.
const motionProps = {
  whileHover: { y: -2 },
  whileTap: { scale: 0.97 },
} as const;

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: Variant;
  size?: Size;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      {...motionProps}
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}

interface LinkButtonProps extends HTMLMotionProps<"a"> {
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
    <motion.a
      {...motionProps}
      className={cn(baseClasses, variants[variant], sizes[size], className)}
      {...props}
    />
  );
}
