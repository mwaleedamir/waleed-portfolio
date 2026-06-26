import { navLinks, profile, socials } from "@/data/profile";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-bg-soft py-12">
      <Container className="flex flex-col items-center gap-8 text-center md:flex-row md:items-start md:justify-between md:text-left">
        <div className="max-w-sm">
          <a href="#hero" className="text-lg font-bold tracking-tight">
            {profile.firstName}
            <span className="text-primary">.</span>
          </a>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            {profile.subheadline}
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex gap-3">
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted transition-colors hover:border-primary/50 hover:text-foreground"
            >
              <Icon className="h-4.5 w-4.5" />
            </a>
          ))}
        </div>
      </Container>

      <Container className="mt-10 border-t border-border pt-6 text-center text-xs text-faint">
        © {year} {profile.name}. Crafted with Next.js, Tailwind &amp; Redux.
      </Container>
    </footer>
  );
}
