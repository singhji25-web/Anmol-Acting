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
  // PLACEHOLDER - replace with real contact email
  email: "hello@example.com",
  // PLACEHOLDER - replace with real social handles or remove
  socials: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "IMDb", href: "https://www.imdb.com/" },
  ],
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
export type Headshot = { src: string; alt: string; label: string };

export const headshots: Headshot[] = [
  { src: "/headshots/01.webp", alt: "Anmol Singh — theatrical headshot in a white shirt and tie", label: "Theatrical" },
  { src: "/headshots/02.webp", alt: "Anmol Singh — smiling commercial headshot in a black hoodie", label: "Commercial" },
  { src: "/headshots/03.webp", alt: "Anmol Singh — three-quarter headshot in a leather jacket", label: "Three-quarter" },
  { src: "/headshots/04.webp", alt: "Anmol Singh — dramatic headshot in a leather jacket", label: "Dramatic" },
];

// -----------------------------------------------------------------------------
// DEMO REEL
// PLACEHOLDER - "Big Buck Bunny" (Creative Commons short) stands in for the real reel.
// Swap `youtubeId` for the real reel's YouTube video ID (the part after ?v=).
// -----------------------------------------------------------------------------
export const demoReel = {
  youtubeId: "aqz-KE-bpKQ",
  title: "Anmol Singh — Demo Reel 2025",
  runtime: "2:14", // PLACEHOLDER
  description:
    "A selection of film and television work. Full scenes available on request.", // PLACEHOLDER
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
  {
    title: "Casting Director Workshop",
    instructor: "Lisa Parasyn",
    organization: "ActorVan Studios",
  },
  {
    title: "Acting Classes",
    instructor: "Jim Daugherty",
    organization: "RAW Acting Studio",
  },
  {
    title: "Acting Classes",
    instructor: "Various instructors",
    organization: "Indy Actor's Academy",
  },
  {
    title: "6-Week Acting Course",
    organization: "LB Studio",
  },
];
