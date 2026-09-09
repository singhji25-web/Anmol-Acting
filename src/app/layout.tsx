import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Anmol Singh — Actor · Toronto",
  description:
    "Official acting portfolio of Anmol Singh, a Toronto-based actor. Headshots, demo reel, resume and training.",
  // Deployed URL — used to resolve Open Graph / social preview links.
  metadataBase: new URL("https://anmol-acting.vercel.app"),
  openGraph: {
    title: "Anmol Singh — Actor · Toronto",
    description: "Headshots, demo reel, resume and training.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#05060f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
