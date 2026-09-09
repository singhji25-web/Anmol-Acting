# Anmol Singh — Acting Portfolio

Single-page acting portfolio built with **Next.js 16**, **Tailwind CSS v4** and TypeScript.
Dark space/galaxy theme with a subtle animated starfield. Mobile-first, ready for Vercel.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (what Vercel runs)
```

## Swapping in real content

All copy lives in **`src/data/portfolio.ts`**. Everything fictional is tagged
`PLACEHOLDER` — find every spot with:

```bash
grep -rn "PLACEHOLDER" src public next.config.ts
```

| What | Where |
| --- | --- |
| Name, tagline, bio, email, height/weight/eyes/hair | `profile` in `src/data/portfolio.ts` |
| Headshots | `headshots[]` — drop JPGs into `public/headshots/`, run `node scripts/optimize-headshots.mjs`, point `src` at the `.webp` |
| Demo reel | `demoReel.youtubeId` — the ID after `?v=` in the YouTube URL |
| Special skills (grouped by category) | `specialSkills` |
| Training & classes timeline | `workshops[]` |
| PDF resume | `public/resume.pdf` (linked from the Resume section) |
| Site URL for social previews | `metadataBase` in `src/app/layout.tsx` |

### Contact
The Contact section is a single `mailto:` link to `profile.email` — no form and no backend.

## Deploy to Vercel (free tier)

1. Push this repo to GitHub.
2. Go to https://vercel.com/new, import the repo, keep the defaults (Framework: Next.js).
3. Click **Deploy**. Every push to `main` redeploys automatically.
4. Optional: add a custom domain under Project → Settings → Domains, then update `metadataBase`.

## Structure

```
src/
  app/          layout, page, global styles
  components/   Starfield, Nav, Hero, Headshots, DemoReel, Resume, Training,
                Contact, Footer, Section (shared wrapper)
  data/         portfolio.ts — all site content
scripts/
  optimize-headshots.mjs   resizes/compresses public/headshots/*.JPG to .webp
public/
  headshots/    optimized .webp headshots (originals are gitignored)
  resume.pdf    downloadable resume
```
