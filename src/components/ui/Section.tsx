import { cn } from "@/lib/utils";
import { Container } from "./Container";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Anchor id used by the navbar links. */
  id: string;
  /** When true, the section uses the slightly lighter "soft" background. */
  soft?: boolean;
  /** Disable the default inner Container (for full-bleed sections). */
  bleed?: boolean;
}

/** A full-width page section with consistent vertical rhythm. */
export function Section({
  id,
  soft,
  bleed,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "scroll-mt-20 py-20 sm:py-28",
        soft && "bg-bg-soft",
        className
      )}
      {...props}
    >
      {bleed ? children : <Container>{children}</Container>}
    </section>
  );
}
