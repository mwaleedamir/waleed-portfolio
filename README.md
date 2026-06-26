# Waleed — Portfolio

A professional, animated portfolio for showcasing mobile & web development work
and converting visitors into clients. Built with **Next.js 16 (App Router)**,
**TypeScript**, **Tailwind CSS v4**, **Redux Toolkit** and **Framer Motion**.

## Features

- **Responsive video showcase** — mobile demos play in a realistic phone frame
  (portrait), web demos in a browser frame (landscape).
- **Redux-powered UI** — project filtering (All / Mobile / Web), mobile menu,
  and the contact form are all driven by Redux Toolkit slices.
- **Reusable component system** — `Button`, `Card`, `Badge`, `Section`,
  `Container`, `SectionHeading`, `Reveal` and device frames.
- **Sections** — Hero, About, Services, Work, Skills, Testimonials, Contact.
- Smooth scroll-reveal animations, dark theme, glassmorphism, fully responsive.

## Getting started

```bash
npm run dev     # start dev server  → http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
npm run lint    # lint
```

## Make it yours (edit data, no component changes needed)

All content lives in `src/data/` — update these and the whole site updates:

| File              | What it controls                                  |
| ----------------- | ------------------------------------------------- |
| `profile.ts`      | Name, roles, bio, stats, socials, nav links       |
| `services.ts`     | Services you offer                                |
| `skills.ts`       | Skill groups + the scrolling tech marquee         |
| `projects.ts`     | Your projects + demo videos                       |
| `testimonials.ts` | Client testimonials                               |

### Adding your videos

1. Drop video files into `public/videos/` — see `public/videos/README.md` for
   sizing (mobile = 9:16 portrait, web = 16:9 landscape).
2. Reference them in `src/data/projects.ts` and set `category` to `"mobile"`
   or `"web"` — that decides the phone vs. browser frame automatically.

### Your photo

Replace `public/profile/waleed.svg` with your photo (e.g. `waleed.jpg`) and
update `avatar` in `src/data/profile.ts`.

### Wiring up the contact form

`src/components/sections/Contact.tsx` currently simulates submission. Connect it
to your email provider (Resend, Formspree, an API route, etc.) where the
`onSubmit` handler runs.

## Project structure

```
src/
├─ app/                 # layout, page, global styles
├─ components/
│  ├─ ui/               # reusable primitives (Button, Card, …) + BrandIcons
│  ├─ layout/           # Navbar, Footer
│  ├─ project/          # DeviceFrame, VideoPlayer, ProjectCard
│  └─ sections/         # Hero, About, Services, Projects, Skills, …
├─ data/                # all editable content
├─ store/               # Redux store, hooks, provider, slices
├─ lib/                 # utils (cn)
└─ types/               # shared TypeScript types
```

## Customizing the theme

Design tokens (colors, fonts, animations) are defined as CSS variables in
`src/app/globals.css` under the `@theme` block. Change `--color-primary` /
`--color-accent` to re-brand the whole site instantly.
