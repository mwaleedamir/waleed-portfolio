# Animation Plan

This document describes the animation enhancements added to the portfolio,
how each one works, and which files are affected. The site already uses
[framer-motion](https://www.framer.com/motion/) for scroll reveals and the Hero
entrance — these additions build on that foundation **without** changing the
existing look, only layering in extra polish.

---

## 0. Cross-cutting: respect `prefers-reduced-motion` (accessibility)

**Why:** Animations should never trigger motion sickness. Users who set
"reduce motion" in their OS should get a calm, static experience.

**How:**
- Wrap the app in framer-motion's `<MotionConfig reducedMotion="user">`. Every
  `motion.*` component then automatically skips transform/opacity motion for
  those users — no per-component changes needed.
- Add a CSS `@media (prefers-reduced-motion: reduce)` fallback in `globals.css`
  that neutralizes the pure-CSS animations (`animate-marquee`, `animate-float`,
  `animate-ping`) and the theme transition.

**Files affected:**
- `src/store/StoreProvider.tsx` — wrap children in `<MotionConfig>`.
- `src/app/globals.css` — reduced-motion media query.

---

## 1. Scroll progress bar (global)

**What:** A thin gradient bar pinned to the very top of the viewport that fills
left→right as you scroll the page.

**How:** A new client component using framer-motion's `useScroll()` →
`scrollYProgress` mapped onto a `motion.div`'s `scaleX` (transform-only, GPU
friendly). Uses the existing `--color-primary` / `--color-accent` tokens so it
matches both light and dark themes.

**Files affected:**
- `src/components/ui/ScrollProgress.tsx` — **new** component.
- `src/app/page.tsx` — mount `<ScrollProgress />`.

---

## 2. Hero stat count-up

**What:** The stats strip ("40+", "25+", "4+", "100%") counts up from 0 to its
target the first time it scrolls into view, instead of appearing instantly.

**How:** A new `CountUp` component parses the leading number and the suffix
(`+` / `%`), then uses framer-motion's `useInView` + `animate()` /
`useMotionValue` to tween the number once. Suffix is preserved.

**Files affected:**
- `src/components/ui/CountUp.tsx` — **new** component.
- `src/components/sections/Hero.tsx` — render `<CountUp>` inside the stats `<dd>`.

---

## 3. Button micro-interactions (global CTAs)

**What:** All buttons/links gain a subtle lift on hover and a press-down on
click — the small tactile feedback that makes a UI feel responsive.

**How:** Convert `Button` / `LinkButton` to `motion.button` / `motion.a` with
`whileHover={{ y: -2 }}` and `whileTap={{ scale: 0.97 }}`. Existing color
transitions/classes are untouched.

**Files affected:**
- `src/components/ui/Button.tsx`.

---

## 4. Card hover lift (Skills & Testimonials)

**What:** Currently only Service cards lift on hover (`interactive`). Skills and
Testimonials cards stay flat. They'll get the same gentle lift for consistency.

**How:** Add `whileHover={{ y: -4 }}` to the existing `motion.div` wrappers
around those cards. No structural change.

**Files affected:**
- `src/components/sections/Skills.tsx`.
- `src/components/sections/Testimonials.tsx`.

---

## 5. Theme toggle icon transition

**What:** When switching dark/light, the sun/moon icon crossfades + rotates
instead of swapping abruptly.

**How:** Wrap the icon in framer-motion's `AnimatePresence` with a rotate +
fade `initial`/`animate`/`exit`, keyed on the current theme.

**Files affected:**
- `src/components/ui/ThemeToggle.tsx`.

---

## 6. Project cards: directional slide-in

**What:** Project showcases alternate sides on desktop (`flip`). Their entrance
will match — even-index cards slide in from the left, odd-index from the right —
reinforcing the zig-zag rhythm.

**How:** In `ProjectCard`, set the reveal `initial` x offset from the existing
`flip` boolean (`x: flip ? 40 : -40`) animating to `x: 0`.

**Files affected:**
- `src/components/project/ProjectCard.tsx`.

---

## Summary of files

| File | Change |
| --- | --- |
| `src/store/StoreProvider.tsx` | `MotionConfig` reduced-motion wrapper |
| `src/app/globals.css` | reduced-motion media query |
| `src/app/page.tsx` | mount scroll progress bar |
| `src/components/ui/ScrollProgress.tsx` | **new** — scroll progress bar |
| `src/components/ui/CountUp.tsx` | **new** — animated number |
| `src/components/sections/Hero.tsx` | use `CountUp` in stats |
| `src/components/ui/Button.tsx` | hover-lift + tap-scale |
| `src/components/sections/Skills.tsx` | card hover lift |
| `src/components/sections/Testimonials.tsx` | card hover lift |
| `src/components/ui/ThemeToggle.tsx` | animated icon swap |
| `src/components/project/ProjectCard.tsx` | directional slide-in |

All additions are transform/opacity based (cheap to render), reuse existing
design tokens, and degrade gracefully under reduced-motion preferences.

---

## 7. Replay-on-revisit + per-section variety

**What:** Every section re-plays its entrance animation each time it scrolls
back into view (not just once), and each section has a *distinct* animation so
the page greets you with fresh motion as you move through it.

**How:** A shared preset module (`src/lib/animations.ts`) exports named
`Variants` (`fadeUp`, `slideLeft`, `slideRight`, `zoomIn`, `flipIn`, `blurIn`)
and a `viewportReplay` config (`once: false`). `SectionHeading` takes an `anim`
prop so each section's heading differs. Per-section assignment:

| Section | Heading | Content |
| --- | --- | --- |
| About | slide-right | portrait zoom-in, bio slide-left |
| Services | fade-up | fade-up stagger |
| Projects | fade-up | directional slide (alternating) |
| Skills | zoom-in | zoom-in stagger |
| Testimonials | flip-in | 3D flip-in stagger |
| Contact | blur-in | form slide-left |

Hero's count-up also re-counts on each revisit.

**Files affected:**
- `src/lib/animations.ts` — **new** preset module.
- `src/components/ui/SectionHeading.tsx` — `anim` prop + replay.
- `src/components/sections/{About,Services,Skills,Testimonials,Contact}.tsx`.
- `src/components/project/ProjectCard.tsx` — replay.
- `src/components/ui/CountUp.tsx` — re-count on revisit.
