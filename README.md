# Janhavi Hivarekar — Portfolio

A minimal, editorial-inspired personal portfolio for Janhavi Hivarekar, positioned around frontend development, full-stack MERN engineering and AI/GenAI applications.

## Stack
- Next.js App Router
- React + TypeScript
- CSS (custom design system; no UI framework)
- Google Fonts: DM Sans + Playfair Display

## Structure
```text
app/                 Next.js pages and global styles
components/          Reserved for reusable UI components as the site grows
data/                Portfolio content and project data
public/              Static assets
styles/              Reserved for additional style modules
```

## Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000.

## Production build
```bash
npm run build
npm start
```

## Deploy
The project is ready for Vercel or any Node-compatible Next.js host. Connect the GitHub repository and use the default Next.js build settings.

## Customize content
- Name, role, location and social links: `data/site.ts`
- Projects: `data/projects.ts`
- Main page content/layout: `app/page.tsx`
- Colors, typography, spacing, responsive behavior: `app/globals.css`
- SEO metadata: `app/layout.tsx`

## Add your profile photo later
The current concept intentionally does not include a profile photo. When you want one, place it in `public/` and add it to the hero/about area with Next.js `Image`.

## Add project links
Replace the optional `href` and `repo` fields in `data/projects.ts` with each project's live URL and GitHub URL, then render the links in the project feature component.

## Design notes
The interface uses a restrained light/dark system, editorial typography, subtle reveal motion, a lightweight custom cursor, interactive project selection and a continuously moving technology marquee. All motion is disabled/reduced under `prefers-reduced-motion`.

## Before launch
- Add real live-project and GitHub URLs.
- Add a favicon and social preview image.
- Add a real resume URL if desired.
- Run `npm run build` and test on desktop/tablet/mobile.
- Replace placeholder project visuals with real screenshots when available.


### Project links
Edit `data/projects.ts` and fill the `href` (live site) and `repo` (GitHub) fields for each project. The buttons appear automatically when a link is provided.
