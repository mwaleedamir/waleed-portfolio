import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Adds a primary-tinted hover glow + lift. */
  interactive?: boolean;
}

/** Surface card used across services, projects and testimonials. */
export function Card({ interactive, className, children, ...props }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-surface p-6",
        interactive &&
          "group relative transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
