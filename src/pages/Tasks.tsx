import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Checkbox } from '../components/ui/Checkbox';
import { TextArea, TextField } from '../components/ui/TextField';
import { taskGroups, tasks as initialTasks } from '../data/mockData';
import type { Subtask, Task } from '../types';

export function Tasks() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [subtasks, setSubtasks] = useState<Subtask[]>([]);
  const [groupChecks, setGroupChecks] = useState<Record<string, boolean>>({});

  function addSubtask() {
    setSubtasks((prev) => [
      ...prev,
      { id: `new-${Date.now()}`, title: `Subtask ${prev.length + 1}`, done: false },
    ]);
  }

  function createTask(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim()) return;
    setTasks((prev) => [
      {
        id: `t-${Date.now()}`,
        title,
        date: date || '—',
        description,
        done: false,
        subtasks,
      },
      ...prev,
    ]);
    setTitle('');
    setDate('');
    setDescription('');
    setSubtasks([]);
  }

  function toggleTask(id: string) {
    setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  }

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_320px]">
      <div className="space-y-6">
        <form onSubmit={createTask} className="space-y-4">
          <div className="grid gap-3 sm:grid-cols-3">
            <TextField
              placeholder="Überschrift"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <TextField
              placeholder="Datum"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <Button type="submit">Aufgabe erstellen</Button>
          </div>

          <TextArea
            placeholder="Beschreibung"
            rows={5}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          {subtasks.length > 0 && (
            <ul className="space-y-1 pl-1">
              {subtasks.map((s) => (
                <li key={s.id} className="text-sm text-cc-muted">
                  • {s.title}
                </li>
              ))}
            </ul>
          )}

          <button
            type="button"
            onClick={addSubtask}
            className="flex w-full items-center gap-2 rounded-xl border border-cc-cyan px-4 py-2.5 text-left transition-colors hover:bg-cc-light"
          >
            <Plus size={18} /> Subtask
          </button>

          <Button type="button" variant="outline" className="w-fit">
            Zuweisen
          </Button>
        </form>

        <section>
          <h2 className="mb-3 font-heading text-xl">Von dir erstellte Aufgaben</h2>
          <div className="space-y-3">
            {tasks.map((t) => (
              <Card key={t.id} variant="cyan">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2 font-medium">
                      <span>{t.title}</span>
                      <span className="text-sm text-cc-ink/70">{t.date}</span>
                    </div>
                    {t.description && (
                      <p className="mt-1 text-sm text-cc-ink/80">{t.description}</p>
                    )}
                    {t.subtasks.length > 0 && (
                      <ul className="mt-2 space-y-1 text-sm">
                        {t.subtasks.map((s) => (
                          <li key={s.id}>◦ {s.title}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                  <Checkbox checked={t.done} onChange={() => toggleTask(t.id)} />
                </div>
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
                      <Checkbox
                        checked={groupChecks[id] ?? item.done}
                        onChange={() =>
                          setGroupChecks((prev) => ({ ...prev, [id]: !(prev[id] ?? item.done) }))
                        }
                      />
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
