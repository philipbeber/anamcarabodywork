import { ContactForm } from "@/components/contact-form";

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

        <div className="mt-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
