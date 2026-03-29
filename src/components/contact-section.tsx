export function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-surface-container-high px-5 py-20 sm:px-8 sm:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="mx-auto max-w-2xl">
        <h2
          id="contact-heading"
          className="font-serif text-3xl font-normal tracking-tight text-on-surface sm:text-4xl"
        >
          Start your healing journey
        </h2>
        <p className="mt-4 font-sans text-lg leading-relaxed text-on-surface-variant">
          Have questions about a specific modality? Ready to schedule? Reach out
          below.
        </p>

        <div className="mt-10 space-y-8">
          <div>
            <label
              htmlFor="contact-name"
              className="block font-sans text-xs font-medium uppercase tracking-[0.05em] text-on-surface-variant"
            >
              Full name
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Your name"
              className="mt-2 w-full rounded-t-lg border-0 border-b border-outline-variant/40 bg-surface-container-lowest px-0 py-3 font-sans text-on-surface placeholder:text-on-surface-variant/60 outline-none transition-colors focus:border-primary focus:bg-primary-container/20 focus:ring-0"
            />
          </div>
          <div>
            <label
              htmlFor="contact-email"
              className="block font-sans text-xs font-medium uppercase tracking-[0.05em] text-on-surface-variant"
            >
              Email address
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              className="mt-2 w-full rounded-t-lg border-0 border-b border-outline-variant/40 bg-surface-container-lowest px-0 py-3 font-sans text-on-surface placeholder:text-on-surface-variant/60 outline-none transition-colors focus:border-primary focus:bg-primary-container/20 focus:ring-0"
            />
          </div>
          <div>
            <label
              htmlFor="contact-message"
              className="block font-sans text-xs font-medium uppercase tracking-[0.05em] text-on-surface-variant"
            >
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              placeholder="How can we help?"
              className="mt-2 w-full resize-y rounded-lg border-0 border-b border-outline-variant/40 bg-surface-container-lowest px-0 py-3 font-sans text-on-surface placeholder:text-on-surface-variant/60 outline-none transition-colors focus:border-primary focus:bg-primary-container/20 focus:ring-0"
            />
          </div>
          <button
            type="button"
            className="w-full rounded-(--radius-button) px-8 py-3.5 text-center text-base font-medium text-on-primary shadow-[var(--shadow-ambient)] transition-opacity hover:opacity-95 sm:w-auto"
            style={{
              background:
                "linear-gradient(135deg, var(--primary) 0%, var(--primary-container) 100%)",
            }}
          >
            Send inquiry
          </button>
        </div>
      </div>
    </section>
  );
}
