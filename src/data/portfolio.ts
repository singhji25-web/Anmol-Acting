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
// PLACEHOLDER - replace each `src` with a real headshot, e.g. "/headshots/01.jpg"
// placed in /public/headshots. Keep portrait (3:4) crops for a consistent grid.
// -----------------------------------------------------------------------------
export type Headshot = { src: string; alt: string; label: string };

const ph = (bg: string, fg: string, text: string) =>
  `https://placehold.co/900x1200/${bg}/${fg}.jpg?text=${encodeURIComponent(text)}&font=montserrat`;

export const headshots: Headshot[] = [
  { src: ph("1b1636", "d9d2f5", "Headshot 01"), alt: "Anmol Singh — theatrical headshot", label: "Theatrical" },
  { src: ph("0f1a33", "cfd8f5", "Headshot 02"), alt: "Anmol Singh — commercial headshot", label: "Commercial" },
  { src: ph("241636", "e3d3f0", "Headshot 03"), alt: "Anmol Singh — dramatic headshot", label: "Dramatic" },
  { src: ph("101a2a", "d0d8e8", "Headshot 04"), alt: "Anmol Singh — three-quarter shot", label: "Three-quarter" },
  { src: ph("1a1430", "d6cdf5", "Headshot 05"), alt: "Anmol Singh — editorial headshot", label: "Editorial" },
  { src: ph("0d1424", "c9d4ea", "Headshot 06"), alt: "Anmol Singh — smiling headshot", label: "Smiling" },
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
