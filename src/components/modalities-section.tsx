const modalities = [
  {
    title: "Full-body massage",
    description:
      "Discover the profound impact our tranquil experiences have had on many. Each testimony whispers tales of rejuvenation and transformation, crafted within an oasis of serenity and care.",
    icon: SpaIcon,
  },
  {
    title: "Injury recovery",
    description:
      "Exceptional massage therapy tailored to promote healing, reduce pain, and restore range of motion.",
    icon: MedicalIcon,
  },
  {
    title: "Deep tissue",
    description:
      "Transformative deep-tissue and Swedish massage—precision technique with soothing touch to restore balance and elevate well-being.",
    icon: StrengthIcon,
  },
  {
    title: "Perinatal care",
    description:
      "Bespoke therapies that blend age-old techniques with modern care. Each session is a tailored journey to rejuvenate the body and soothe the soul.",
    icon: PerinatalIcon,
  },
] as const;

export function ModalitiesSection() {
  return (
    <section
      id="services"
      className="bg-surface-container-low px-5 py-20 sm:px-8 sm:py-28"
      aria-labelledby="modalities-heading"
    >
      <div className="mx-auto max-w-6xl">
        <p className="font-sans text-xs font-medium uppercase tracking-[0.05em] text-on-surface-variant">
          Our modalities
        </p>
        <h2
          id="modalities-heading"
          className="mt-3 font-serif text-3xl font-normal tracking-tight text-on-surface sm:text-4xl lg:text-5xl"
        >
          Artisanal healing
        </h2>
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {modalities.map((item, index) => {
            const Icon = item.icon;
            return (
            <li
              key={item.title}
              className={`rounded-(--radius-card) p-8 lg:p-10 ${
                index % 2 === 0 ? "bg-surface" : "bg-surface-container"
              }`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-container/60 text-primary">
                <Icon className="h-6 w-6" aria-hidden />
              </div>
              <h3 className="mt-6 font-serif text-xl text-on-surface sm:text-2xl">
                {item.title}
              </h3>
              <p className="mt-4 font-sans leading-relaxed text-on-surface-variant">
                {item.description}
              </p>
            </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

function SpaIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 3c-2 3-6 4-6 8a6 6 0 1012 0c0-4-4-5-6-8z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 14h8M9 18h6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MedicalIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21a8 8 0 100-16 8 8 0 000 16z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M12 8v8M8 12h8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function StrengthIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M6 10h3v10H6V10zm9-4h3v14h-3V6zM10.5 13h3v7h-3v-7z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PerinatalIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M6 20c0-4 2.5-6 6-6s6 2 6 6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
