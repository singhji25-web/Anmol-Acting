/**
 * =============================================================================
 *  PORTFOLIO CONTENT
 *  Every piece of copy on the site lives here so it can be swapped in one place.
 *
 *  ⚠️  EVERYTHING BELOW MARKED "PLACEHOLDER" IS FICTIONAL EXAMPLE CONTENT.
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
  // PLACEHOLDER - physical stats commonly listed on acting resumes
  stats: {
    height: "5'10\"",
    hair: "Black",
    eyes: "Brown",
    unions: "Non-union", // e.g. "ACTRA Apprentice"
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
// PLACEHOLDER - all credits below are fictional examples in standard resume format.
// -----------------------------------------------------------------------------
export type Credit = {
  title: string;
  year: string;
  role: string; // e.g. "Lead", "Supporting", "Principal"
  detail: string; // director / production company / theatre
};

export const filmTv: Credit[] = [
  { title: "The Quiet Hours", year: "2025", role: "Supporting", detail: "Feature Film — Dir. Jane Smith" },
  { title: "North of Bloor", year: "2025", role: "Principal", detail: "TV Series, Ep. 4 — Dir. Robert Chen" },
  { title: "Static", year: "2024", role: "Lead", detail: "Short Film — Dir. Priya Nair" },
  { title: "Late Shift", year: "2024", role: "Supporting", detail: "Feature Film — Dir. Marcus Bell" },
  { title: "Homecoming", year: "2023", role: "Lead", detail: "Short Film — Dir. Alicia Moreau" },
];

export const theatre: Credit[] = [
  { title: "A Streetcar Named Desire", year: "2024", role: "Mitch", detail: "Example Theatre Company — Dir. Sarah Lee" },
  { title: "Twelve Angry Jurors", year: "2023", role: "Juror #8", detail: "Sample Stage Collective — Dir. David Park" },
];

export const commercial = "Conflicts available upon request."; // standard resume line

export const resumeTraining: { title: string; detail: string; years: string }[] = [
  { title: "Scene Study", detail: "Coach Name", years: "2024–2025" },
  { title: "On-Camera Technique", detail: "Example Acting Studio", years: "2024" },
  { title: "Meisner Foundations", detail: "Instructor Name", years: "2023" },
  { title: "Voice & Speech", detail: "Instructor Name", years: "2023" },
];

export const specialSkills: string[] = [
  "Stage combat (unarmed, single sword)",
  "Dialects: Neutral North American, Punjabi, Standard British",
  "Languages: English (native), Punjabi (fluent), Hindi (conversational)",
  "Improv",
  "Valid G driver's licence",
  "Swimming",
  "Basketball",
  "Guitar (intermediate)",
];

// -----------------------------------------------------------------------------
// TRAINING & CLASSES (expanded view)
// PLACEHOLDER - fictional workshops in the same style as the resume section.
// -----------------------------------------------------------------------------
export type Workshop = {
  title: string;
  instructor: string;
  organization: string;
  years: string;
  description?: string;
};

export const workshops: Workshop[] = [
  {
    title: "Advanced Scene Study",
    instructor: "Coach Name",
    organization: "Example Acting Studio, Toronto",
    years: "2024–2025",
    description: "Ongoing weekly class focused on contemporary film and television text.",
  },
  {
    title: "On-Camera Audition Technique",
    instructor: "Instructor Name",
    organization: "Sample Screen Academy",
    years: "2024",
    description: "Self-tape framing, cold reads and working with casting directors.",
  },
  {
    title: "Meisner Foundations",
    instructor: "Instructor Name",
    organization: "Placeholder Conservatory",
    years: "2023",
    description: "Repetition, emotional preparation and independent activities.",
  },
  {
    title: "Stage Combat Certification",
    instructor: "Fight Director Name",
    organization: "Example Stage Combat Society",
    years: "2023",
    description: "Unarmed and single sword — basic certification.",
  },
  {
    title: "Improv Levels 1–3",
    instructor: "Various",
    organization: "Sample Comedy Theatre",
    years: "2022–2023",
  },
  {
    title: "Voice & Dialects Intensive",
    instructor: "Instructor Name",
    organization: "Placeholder Voice Studio",
    years: "2023",
  },
];

// -----------------------------------------------------------------------------
// REPRESENTATION
// PLACEHOLDER - confirm contact details with the agency before publishing.
// -----------------------------------------------------------------------------
export const representation = {
  agency: "Esprit Artists",
  agent: "Marc Gaudet",
  location: "Toronto, ON",
  email: "bookings@example.com", // PLACEHOLDER
  phone: "+1 (416) 555-0123", // PLACEHOLDER
  website: "https://example.com", // PLACEHOLDER
};
