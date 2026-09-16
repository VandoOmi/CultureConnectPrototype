import { useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const WEEKDAYS = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];
const MONTHS = [
  'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
  'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember',
];

interface DayCell {
  day: number;
  iso: string;
  current: boolean;
}

function buildMonth(year: number, month: number): DayCell[] {
  const first = new Date(year, month, 1);
  const startOffset = (first.getDay() + 6) % 7; // Monday = 0
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const cells: DayCell[] = [];

  for (let i = 0; i < startOffset; i++) {
    const d = new Date(year, month, i - startOffset + 1);
    cells.push({ day: d.getDate(), iso: iso(d), current: false });
  }
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ day: d, iso: iso(new Date(year, month, d)), current: true });
  }
  while (cells.length % 7 !== 0) {
    const last = cells[cells.length - 1];
    const next = new Date(last.iso);
    next.setDate(next.getDate() + 1);
    cells.push({ day: next.getDate(), iso: iso(next), current: false });
  }
  return cells;
}

function iso(d: Date) {
  return d.toISOString().slice(0, 10);
}

function MonthView({
  year,
  month,
  selected,
  onSelect,
  onPrev,
  onNext,
  showPrev,
  showNext,
}: {
  year: number;
  month: number;
  selected: string;
  onSelect: (iso: string) => void;
  onPrev?: () => void;
  onNext?: () => void;
  showPrev?: boolean;
  showNext?: boolean;
}) {
  const cells = useMemo(() => buildMonth(year, month), [year, month]);

  return (
    <div className="flex-1">
      <div className="mb-3 flex items-center justify-between">
        <button onClick={onPrev} className={showPrev ? 'text-white/80 hover:text-white' : 'invisible'}>
          <ChevronLeft size={20} />
        </button>
        <span className="font-medium">
          {MONTHS[month]} {year}
        </span>
        <button onClick={onNext} className={showNext ? 'text-white/80 hover:text-white' : 'invisible'}>
          <ChevronRight size={20} />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-xs text-white/60">
        {WEEKDAYS.map((w) => (
          <div key={w} className="py-1">
            {w}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-sm">
        {cells.map((c, i) => (
          <button
            key={`${c.iso}-${i}`}
            onClick={() => onSelect(c.iso)}
            className={`aspect-square rounded-lg transition-colors ${
              c.current ? 'text-white' : 'text-white/30'
            } ${selected === c.iso ? 'bg-cc-cyan text-cc-ink' : 'hover:bg-white/10'}`}
          >
            {c.day}
          </button>
        ))}
      </div>
    </div>
  );
}

export function Calendar() {
  const today = new Date();
  const [anchor, setAnchor] = useState(new Date(today.getFullYear(), today.getMonth(), 1));
  const [selected, setSelected] = useState(iso(today));
  const [note, setNote] = useState('');

  const secondMonth = new Date(anchor.getFullYear(), anchor.getMonth() + 1, 1);

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_300px]">
      <div className="rounded-2xl bg-cc-panel p-6 text-white shadow-[var(--shadow-card)]">
        <div className="mb-6 flex items-center gap-3 text-lg">
          <span>{selected}</span>
          <span className="text-white/50">→</span>
          <span className="text-white/70">Enddatum</span>
        </div>
        <div className="flex flex-col gap-8 md:flex-row">
          <MonthView
            year={anchor.getFullYear()}
            month={anchor.getMonth()}
            selected={selected}
            onSelect={setSelected}
            showPrev
            onPrev={() => setAnchor(new Date(anchor.getFullYear(), anchor.getMonth() - 1, 1))}
          />
          <MonthView
            year={secondMonth.getFullYear()}
            month={secondMonth.getMonth()}
            selected={selected}
            onSelect={setSelected}
            showNext
            onNext={() => setAnchor(new Date(anchor.getFullYear(), anchor.getMonth() + 1, 1))}
          />
        </div>
      </div>

      <aside className="flex flex-col gap-4">
        <div className="h-40 rounded-2xl bg-gray-200 shadow-[var(--shadow-card)]" />
        <div className="flex-1 rounded-2xl bg-cc-cyan p-5 shadow-[var(--shadow-card)]">
          <h3 className="mb-1 text-right font-medium">Ausgewählter Tag</h3>
          <p className="mb-3 text-right text-sm text-cc-ink/80">{selected}</p>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            placeholder="Notizen für den ausgewählten Tag"
            className="min-h-40 w-full rounded-xl bg-white/40 p-3 text-sm outline-none placeholder:text-cc-ink/60 focus:bg-white/60"
          />
        </div>
      </aside>
    </div>
  );
}
