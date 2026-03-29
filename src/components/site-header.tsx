import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-outline-variant/15 bg-surface/80 backdrop-blur-md backdrop-saturate-150">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-6 px-5 sm:px-8">
        <Link
          href="/"
          className="font-serif text-lg tracking-tight text-on-surface sm:text-xl"
        >
          Anam Cara Bodywork
        </Link>
        <nav
          className="flex items-center gap-6 text-sm font-medium text-on-surface-variant"
          aria-label="Primary"
        >
          <Link
            href="#services"
            className="text-primary transition-colors hover:text-on-primary-container"
          >
            Services
          </Link>
          <Link
            href="#about"
            className="text-primary transition-colors hover:text-on-primary-container"
          >
            About
          </Link>
          <Link
            href="#contact"
            className="rounded-full bg-surface-container-highest px-4 py-2 text-primary transition-colors hover:bg-surface-container-high"
          >
            Book
          </Link>
        </nav>
      </div>
    </header>
  );
}
