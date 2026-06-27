# Celestia Studios — Landing Page (React + Vite)

## Setup

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

## Structure

```
src/
  components/
    Starfield.jsx       canvas starfield background, twinkle animation
    Constellation.jsx   the orbiting "5 systems" SVG (reused in Hero + final CTA)
    Header.jsx
    Hero.jsx
    ProblemSection.jsx
    SystemSection.jsx
    ProcessSection.jsx
    ClientsSection.jsx
    FoundersSection.jsx
    FinalCTA.jsx
    Footer.jsx
  hooks/
    useReveal.js         IntersectionObserver hook for scroll-reveal
  App.jsx
  main.jsx
  index.css              all design tokens + styles
```

All copy lives directly in each component file — search for it there to edit text.
Color tokens, type, and spacing are CSS variables at the top of `src/index.css`.

Respects `prefers-reduced-motion` throughout (starfield, constellation draw-in, and
scroll reveals all degrade to a static/instant state).
# celestia_studios_website
