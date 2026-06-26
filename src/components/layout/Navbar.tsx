"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, profile } from "@/data/profile";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setMobileMenu, toggleMobileMenu } from "@/store/slices/uiSlice";
import { LinkButton } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

export function Navbar() {
  const dispatch = useAppDispatch();
  const open = useAppSelector((s) => s.ui.mobileMenuOpen);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => dispatch(setMobileMenu(false));

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass border-b border-border/60" : "bg-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <a
          href="#hero"
          onClick={close}
          className="text-lg font-bold tracking-tight"
        >
          {profile.firstName}
          <span className="text-primary">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-3.5 py-2 text-sm text-muted transition-colors hover:bg-surface-2 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <LinkButton href="#contact" size="sm">
            Let&apos;s talk
          </LinkButton>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => dispatch(toggleMobileMenu())}
            className="grid h-10 w-10 place-items-center rounded-lg text-foreground"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="glass overflow-hidden border-b border-border md:hidden"
          >
            <Container className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className="rounded-lg px-3 py-3 text-sm text-muted transition-colors hover:bg-surface-2 hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
              <LinkButton href="#contact" onClick={close} className="mt-2">
                Let&apos;s talk
              </LinkButton>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
