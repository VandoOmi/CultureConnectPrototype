import { useState } from 'react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Checkbox } from '../components/ui/Checkbox';
import { surveys as initialSurveys } from '../data/mockData';
import type { Survey } from '../types';

export function Surveys() {
  const [surveys, setSurveys] = useState<Survey[]>(initialSurveys);
  const [voted, setVoted] = useState<Record<string, string>>({});
  const [title, setTitle] = useState('');
  const [options, setOptions] = useState(['', '']);

  function vote(surveyId: string, optionId: string) {
    setVoted((prev) => ({ ...prev, [surveyId]: optionId }));
  }

  function updateOption(index: number, value: string) {
    setOptions((prev) => prev.map((o, i) => (i === index ? value : o)));
  }

  function createSurvey(e: React.FormEvent) {
    e.preventDefault();
    const filled = options.filter((o) => o.trim());
    if (!title.trim() || filled.length === 0) return;
    setSurveys((prev) => [
      {
        id: `sv-${Date.now()}`,
        title,
        options: filled.map((label, i) => ({ id: `o-${Date.now()}-${i}`, label, votes: 0 })),
      },
      ...prev,
    ]);
    setTitle('');
    setOptions(['', '']);
  }

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
      <section>
        <h2 className="mb-4 font-heading text-2xl">Aktuelle Umfragen</h2>
        <div className="space-y-4">
          {surveys.map((s) => {
            const total = s.options.reduce((sum, o) => sum + o.votes, 0) || 1;
            return (
              <Card key={s.id} variant="light">
                <h3 className="mb-3 font-medium">{s.title}</h3>
                <ul className="space-y-2">
                  {s.options.map((o) => {
                    const percent = Math.round((o.votes / total) * 100);
                    const isVoted = voted[s.id] === o.id;
                    return (
                      <li key={o.id}>
                        <button
                          onClick={() => vote(s.id, o.id)}
                          className={`relative flex w-full items-center justify-between overflow-hidden rounded-lg border px-3 py-2 text-sm transition-colors ${
                            isVoted ? 'border-cc-cyan-dark' : 'border-cc-cyan/40 hover:border-cc-cyan'
                          }`}
                        >
                          <span
                            className="absolute inset-y-0 left-0 bg-cc-cyan/30"
                            style={{ width: `${percent}%` }}
                          />
                          <span className="relative">{o.label}</span>
                          <span className="relative text-cc-muted">{percent}%</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </Card>
            );
          })}
        </div>
      </section>

      <section>
        <h2 className="mb-4 font-heading text-2xl">Umfrage erstellen</h2>
        <form onSubmit={createSurvey} className="space-y-4">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Überschrift"
            className="w-full rounded-xl border border-gray-300 bg-white px-4 py-2.5 outline-none focus:border-cc-cyan focus:ring-2 focus:ring-cc-cyan/40"
          />
          {options.map((o, i) => (
            <div key={i} className="flex items-center gap-3">
              <Checkbox checked={o.trim().length > 0} onChange={() => {}} />
              <input
                value={o}
                onChange={(e) => updateOption(i, e.target.value)}
                placeholder={`Auswahl ${i + 1}`}
                className="flex-1 rounded-lg border border-gray-300 bg-gray-100 px-3 py-2 outline-none focus:border-cc-cyan"
              />
            </div>
          ))}
          <button
            type="button"
            onClick={() => setOptions((prev) => [...prev, ''])}
            className="text-sm text-cc-cyan-dark hover:underline"
          >
            + weitere Auswahl
          </button>
          <div>
            <Button type="submit">Erstellen</Button>
          </div>
        </form>
      </section>
    </div>
  );
}
