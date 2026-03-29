import Link from "next/link";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden bg-surface px-5 pb-20 pt-16 sm:px-8 sm:pb-28 sm:pt-24"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="mb-4 font-sans text-xs font-medium uppercase tracking-[0.05em] text-on-surface-variant">
            Seattle massage therapy
          </p>
          <h1
            id="hero-heading"
            className="font-serif text-4xl font-normal leading-[1.1] tracking-[-0.02em] text-on-surface sm:text-5xl lg:text-6xl"
          >
            Anam Cara Bodywork
          </h1>
          <p className="mt-6 max-w-xl font-sans text-lg leading-relaxed text-on-surface-variant sm:text-xl">
            A sanctuary for deep healing and restoration. Guided by the
            tradition of the &ldquo;Soul Friend&rdquo;, we invite you to
            rediscover your body&apos;s innate rhythm.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="#contact"
              className="inline-flex items-center justify-center rounded-(--radius-button) px-8 py-3.5 text-center text-base font-medium text-on-primary shadow-[var(--shadow-ambient)] transition-opacity hover:opacity-95"
              style={{
                background:
                  "linear-gradient(135deg, var(--primary) 0%, var(--primary-container) 100%)",
              }}
            >
              Book now
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center rounded-(--radius-button) bg-surface-container-highest px-8 py-3.5 text-center text-base font-medium text-primary transition-colors hover:bg-surface-container-high"
            >
              Explore services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
