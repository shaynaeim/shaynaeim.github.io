# Shayesteh (Shay) Naeim – Personal Website

Welcome to my personal website repository.  
This site showcases my portfolio and contact info — built with React.

---

## Tech stack

- React 19 + Vite
- [@fullpage/react-fullpage](https://github.com/alvarotrigo/react-fullpage.js) — full-page scrolling
- [@tsparticles/react](https://particles.js.org/) — particle background on the home section
- [typed.js](https://github.com/mattboldt/typed.js/) — typing animation
- Original `public/css/style.css` — unchanged styles, fonts, and layout

---

## Local development

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Production build

```bash
npm run build
npm run preview
```

Static assets live in `public/` (`css`, `img`, `fonts`, `favicon`).

## Deploy

Pushes to `main` deploy via GitHub Actions (`.github/workflows/deploy.yml`). Enable **GitHub Pages** in the repo settings with source **GitHub Actions**.
