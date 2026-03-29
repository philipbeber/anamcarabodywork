export function SiteFooter() {
  return (
    <footer className="bg-surface-container-highest px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-serif text-on-surface">Anam Cara Bodywork</p>
        <p className="font-sans text-sm text-on-surface-variant">
          © {new Date().getFullYear()} Philip Beber. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
