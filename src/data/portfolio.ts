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
// Optimized WebP files in /public/headshots (1200x1500). To add more, drop the
// original JPGs there and run `node scripts/optimize-headshots.mjs`.
// -----------------------------------------------------------------------------
export type Headshot = { src: string; alt: string };

export const headshots: Headshot[] = [
  { src: "/headshots/01.webp", alt: "Anmol Singh — theatrical headshot in a white shirt and tie" },
  { src: "/headshots/02.webp", alt: "Anmol Singh — smiling commercial headshot in a black hoodie" },
  { src: "/headshots/03.webp", alt: "Anmol Singh — three-quarter headshot in a leather jacket" },
  { src: "/headshots/04.webp", alt: "Anmol Singh — dramatic headshot in a leather jacket" },
];

// -----------------------------------------------------------------------------
// DEMO REEL
// `youtubeId` is the part after youtu.be/ or ?v= in the video URL.
// -----------------------------------------------------------------------------
export const demoReel = {
  youtubeId: "C-7Ho0-Tukk", // https://youtu.be/C-7Ho0-Tukk
  title: "Anmol Singh — Demo Reel",
  runtime: undefined as string | undefined, // e.g. "2:14" — shown next to the title when set
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
  { title: "Casting Director Workshop", instructor: "Lisa Parasyn", organization: "ActorVan Studios" },
  { title: "Acting Classes", instructor: "Grisha", organization: "RAW Acting Studio" },
  { title: "Acting Classes", instructor: "Jim Daugherty", organization: "Indy Actor's Academy" },
  { title: "Acting Classes (6-Week Course)", instructor: "Caleigh Le Grand", organization: "LB Studio" },
];
