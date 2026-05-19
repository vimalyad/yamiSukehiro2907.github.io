# Vimal Kumar Yadav Portfolio

Personal portfolio for `vimalyadavkr.me`, built as a focused developer command-center experience for backend, systems, and full-stack product work.

## What It Shows

- Interactive terminal-style hero with profile, stack, and featured project commands.
- About section with profile summary, proof points, and a linked build-flow map.
- Education and experience sections presented as progression milestones.
- Featured Projects graph for NitroSense, Namora, Studi.io, DocBuddy, and Anvil.
- Technical Skills graphs with deterministic node layout that keeps labels readable and avoids overlap.
- Command palette for quick navigation and opening the resume or GitHub.

The site intentionally does not expose phone, email, or contact-form CTAs in the UI.

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- shadcn/ui primitives used by the active UI
- Lucide React icons
- React Router

## Getting Started

```bash
npm install
npm run dev
```

The dev server runs on Vite's default port unless another port is already in use.

## Scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local Vite dev server |
| `npm run build` | Build the production bundle |
| `npm run build:dev` | Build with Vite development mode |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Project Structure

```text
src/
  assets/
    photo.jpg                 # About section profile image
  components/
    ui/                       # Active shadcn/ui primitives only
    About.tsx
    CommandPalette.tsx
    Education.tsx
    Experience.tsx
    Hero.tsx
    Navigation.tsx
    Projects.tsx
    Skills.tsx
    SystemBackdrop.tsx
  data/
    skills.ts                 # Skill graph content and icons
  hooks/
    use-toast.ts              # Toast state used by shadcn toaster
  lib/
    graph-layout.ts           # Reusable circular node placement solver
    utils.ts                  # Shared className helper
  pages/
    Index.tsx
    NotFound.tsx
```

Static files live in `public/`:

- `favicon.svg`
- `favicon.ico`
- `og-image.svg`
- `resume.pdf`
- `robots.txt`

## Layout Notes

The Technical Skills section uses `buildCircularNodeLayout` from `src/lib/graph-layout.ts`.

That helper takes:

- graph bounds,
- center coordinates,
- node dimensions,
- spacing constraints,
- radius limits.

It then searches radius and rotation combinations until nodes are inside bounds and do not overlap. This keeps graph layout logic separate from rendering, so the `Skills` component stays focused on presentation.

## Verification

Production build:

```bash
npm run build
```

Lint:

```bash
npm run lint
```

At the time of this cleanup, build passes. Lint status should be checked after edits; the project has been trimmed so stale unused template components are no longer part of the source tree.

## Deployment

The repository is configured for GitHub Pages with:

- `CNAME` for `vimalyadavkr.me`
- `.nojekyll`
- static assets in `public/`

Push changes to `main` after verifying the production build.
