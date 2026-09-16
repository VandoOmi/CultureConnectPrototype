import { useState } from 'react';
import { Card } from '../components/ui/Card';
import { Checkbox } from '../components/ui/Checkbox';
import { appointments, news, taskGroups } from '../data/mockData';

export function Overview() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});

  function toggle(id: string) {
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
      <div className="space-y-8">
        <section>
          <h2 className="mb-4 font-heading text-2xl">Termine</h2>
          <div className="space-y-4">
            {appointments.map((a) => (
              <Card key={a.id} variant="cyan" className="flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{a.title}</span>
                  <span className="text-sm">{a.date}</span>
                </div>
                <p className="text-sm text-cc-ink/80">{a.description}</p>
              </Card>
            ))}
          </div>
        </section>

        <section>
          <h2 className="mb-4 font-heading text-2xl">Aktuelles</h2>
          <div className="space-y-4">
            {news.map((n) => (
              <Card key={n.id} variant="cyan" className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{n.title}</span>
                  <span className="text-sm">{n.date}</span>
                </div>
                <p className="text-sm text-cc-ink/80">{n.description}</p>
              </Card>
            ))}
          </div>
        </section>
      </div>

      <aside>
        <h2 className="mb-4 font-heading text-2xl">Aufgaben</h2>
        <div className="space-y-4">
          {taskGroups.map((group) => (
            <Card key={group.id} variant="cyan">
              <div className="mb-3 flex items-center justify-between font-medium">
                <span>{group.header}</span>
                <span className="text-sm">{group.date}</span>
              </div>
              <ul className="space-y-2">
                {group.items.map((item) => {
                  const id = `${group.id}-${item.id}`;
                  return (
                    <li key={id} className="flex items-center justify-between text-sm">
                      <span>{item.title}</span>
                      <Checkbox checked={checked[id] ?? item.done} onChange={() => toggle(id)} />
                    </li>
                  );
                })}
              </ul>
            </Card>
          ))}
        </div>
      </aside>
    </div>
  );
}
