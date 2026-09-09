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
| Name, tagline, bio, email, socials, height/hair/eyes | `profile` in `src/data/portfolio.ts` |
| Headshots | `headshots[]` — drop JPGs into `public/headshots/` and set `src: "/headshots/01.jpg"` |
| Demo reel | `demoReel.youtubeId` — the ID after `?v=` in the YouTube URL |
| Film/TV, theatre, training, skills | `filmTv`, `theatre`, `resumeTraining`, `specialSkills` |
| Workshops timeline | `workshops[]` |
| Agency / agent contact | `representation` |
| PDF resume | replace `public/resume.pdf` |
| Site URL for social previews | `metadataBase` in `src/app/layout.tsx` |

Once real headshots are local files, the `placehold.co` entry in `next.config.ts` can be deleted.

### Contact form
The form opens the visitor's mail client with a pre-filled `mailto:` link, so there is no
backend to maintain. To collect submissions instead, point the `<form action>` in
`src/components/Contact.tsx` at a service like Formspree and remove the `onSubmit` handler.

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
                Representation, Contact, Footer, Section (shared wrapper)
  data/         portfolio.ts — all site content
public/
  resume.pdf    placeholder PDF
```
