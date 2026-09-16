import { useState } from 'react';
import { Search, X } from 'lucide-react';

const SECTIONS = ['Profil', 'Allgemein', 'Nachrichten', 'Datenschutz', 'Sonstiges'] as const;
type Section = (typeof SECTIONS)[number];

function Field({ label }: { label: string }) {
  const [value, setValue] = useState('');
  return (
    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-6">
      <span className="w-32 font-heading text-sm tracking-wide text-cc-ink">{label}</span>
      <div className="relative flex-1">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-cc-muted">
          <Search size={16} />
        </span>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Placeholder"
          className="w-full rounded-lg border border-gray-300 bg-white py-2.5 pl-9 pr-9 outline-none focus:border-cc-cyan focus:ring-2 focus:ring-cc-cyan/40"
        />
        {value && (
          <button
            onClick={() => setValue('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-cc-muted hover:text-cc-ink"
            aria-label="Löschen"
          >
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  );
}

export function Settings() {
  const [active, setActive] = useState<Section>('Profil');

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-[220px_1fr]">
      <nav className="flex flex-row flex-wrap gap-2 md:flex-col md:gap-4 md:border-r md:border-gray-200 md:pr-6 md:text-right">
        {SECTIONS.map((s) => (
          <button
            key={s}
            onClick={() => setActive(s)}
            className={`font-heading text-lg uppercase tracking-wide transition-colors ${
              active === s ? 'text-cc-cyan-dark' : 'text-cc-ink hover:text-cc-cyan-dark'
            }`}
          >
            {s}
          </button>
        ))}
      </nav>

      <section>
        <h2 className="mb-6 font-heading text-2xl uppercase tracking-wide">{active}</h2>
        {active === 'Profil' ? (
          <div className="max-w-xl space-y-5">
            <Field label="Name" />
            <Field label="Email" />
            <Field label="Passwort" />
          </div>
        ) : (
          <p className="text-cc-muted">Einstellungen für „{active}“ folgen.</p>
        )}
      </section>
    </div>
  );
}
