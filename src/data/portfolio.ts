/**
 * =============================================================================
 *  PORTFOLIO CONTENT
 *  Every piece of copy on the site lives here so it can be swapped in one place.
 *
 *  ⚠️  ANYTHING BELOW MARKED "PLACEHOLDER" IS STILL EXAMPLE CONTENT.
 *      Replace with real material before launch.
 * =============================================================================
 */

export const profile = {
  name: "Anmol Singh",
  tagline: "Actor · Toronto",
  // PLACEHOLDER - short bio for the hero section
  bio: "Toronto-based actor working across film, television and stage. Trained in scene study and on-camera technique, with a focus on grounded, character-driven work.",
  // Shown as a mailto: link in the Contact section
  email: "anmolactor01@yahoo.com",
  // Portrait used as the large visual in the hero (one of the gallery files)
  heroImage: {
    src: "/headshots/04.webp",
    alt: "Anmol Singh — dramatic headshot in a leather jacket",
  },
  // Physical stats listed on the resume header
  stats: {
    height: "5'10\"",
    weight: "160 lbs",
    eyes: "Black",
    hair: "Black",
    unions: "Non-Union",
  },
};

// -----------------------------------------------------------------------------
// HEADSHOTS
// Optimized WebP files in /public/headshots (max 1200x1600). To add more, drop the
// original JPGs there and run `node scripts/optimize-headshots.mjs`.
// `position` controls which part of the photo is kept when the grid cell crops it
// (default: center). Use "top" for full-body shots so the head is never clipped.
// -----------------------------------------------------------------------------
export type Headshot = { src: string; alt: string; position?: "top" | "center" };

export const headshots: Headshot[] = [
  { src: "/headshots/01.webp", alt: "Anmol Singh — theatrical headshot in a white shirt and tie" },
  { src: "/headshots/04.webp", alt: "Anmol Singh — dramatic headshot in a leather jacket" },
  { src: "/headshots/03.webp", alt: "Anmol Singh — three-quarter headshot in a leather jacket" },
  { src: "/headshots/02.webp", alt: "Anmol Singh — smiling commercial headshot in a black hoodie" },
  { src: "/headshots/05.webp", alt: "Anmol Singh — full-body shot in a black baseball jersey and jeans", position: "top" },
];

// Small credit line shown beneath the headshot grid
export const headshotsCredit = "Taken September 2025";

// -----------------------------------------------------------------------------
// DEMO REEL
// `youtubeId` is the part after youtu.be/ or ?v= in the video URL.
// -----------------------------------------------------------------------------
export const demoReel = {
  youtubeId: "C-7Ho0-Tukk", // https://youtu.be/C-7Ho0-Tukk
  title: "Anmol Singh — Demo Reel",
  runtime: undefined as string | undefined, // e.g. "2:14" — shown next to the title when set
  // When the reel was shot — shown in the bar beneath the player
  filmed: "Filmed October 2025",
  // Prominent caption shown directly above the video player
  note: "Filmed before formal training/classes",
  description: "Full scenes available on request.",
};

// -----------------------------------------------------------------------------
// RESUME
// Credit lists (Film/TV, Theatre, Commercial) are intentionally omitted until
// there are real credits to show. Add them back here when that changes.
// -----------------------------------------------------------------------------
export type SkillGroup = { category: string; items: string[] };

export const specialSkills: SkillGroup[] = [
  { category: "Sports", items: ["Soccer", "Volleyball"] },
  { category: "Languages", items: ["Hindi", "Punjabi"] },
  { category: "Accents", items: ["Indian", "Standard American", "Southern US"] },
];

// -----------------------------------------------------------------------------
// TRAINING & CLASSES
// -----------------------------------------------------------------------------
export type Workshop = {
  title: string;
  instructor?: string;
  organization: string;
  years?: string;
  description?: string;
};

export const workshops: Workshop[] = [
  { title: "Casting Director Workshop", instructor: "Lisa Parasyn", organization: "ActorVan Studios", years: "July 2026" },
  { title: "Acting Classes", instructor: "Grisha", organization: "RAW Acting Studio", years: "April 2026" },
  { title: "Acting Classes", instructor: "Jim Daugherty", organization: "Indy Actor's Academy", years: "August 2025" },
  { title: "Acting Classes", instructor: "Caleigh Le Grand", organization: "LB Studio", years: "July 2026" },
];
