export function AboutSection() {
  return (
    <section
      id="about"
      className="bg-surface px-5 py-20 sm:px-8 sm:py-28"
      aria-labelledby="about-heading"
    >
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-12 lg:gap-16 lg:items-start">
        <div className="lg:col-span-5">
          <span className="inline-flex items-center rounded-full bg-secondary-container px-4 py-1.5 font-sans text-xs font-medium uppercase tracking-[0.05em] text-on-secondary-container">
            Certified practitioner
          </span>
          <p className="mt-6 font-sans text-xs font-medium uppercase tracking-[0.05em] text-on-surface-variant">
            The soul behind the work
          </p>
          <h2
            id="about-heading"
            className="mt-3 font-serif text-3xl font-normal tracking-tight text-on-surface sm:text-4xl"
          >
            Philip Beber, LMT
          </h2>
        </div>
        <div className="space-y-6 font-sans leading-relaxed text-on-surface-variant lg:col-span-7">
          <p className="text-lg text-on-surface">
            My journey in massage started in the hills of Scotland, where I
            grew up as a child. My goal is to bring the peace and tranquility
            of those heather-strewn landscapes to my friends and clients in
            Seattle. I realized my calling when a psychic in New York told me
            I have healing hands.
          </p>
          <p>
            I received my education from Discovery Point School of Massage, the
            premier massage school in the Seattle area. Here I gained hands-on
            experience in anatomy, physiology, pathology, and kinesiology, along
            with evidence-based massage techniques.
          </p>
        </div>
      </div>
    </section>
  );
}
