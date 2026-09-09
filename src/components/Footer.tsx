import { profile } from "@/data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center justify-between gap-4 px-5 text-center text-xs text-star-dim sm:flex-row sm:px-8 sm:text-left">
        <p>
          © {year} {profile.name}. All rights reserved.
        </p>
        <p>
          <a href="#top" className="transition-colors hover:text-star">
            Back to top ↑
          </a>
        </p>
      </div>
    </footer>
  );
}
