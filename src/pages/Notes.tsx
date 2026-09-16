import { useState } from 'react';
import { Checkbox } from '../components/ui/Checkbox';
import { notes, todos as initialTodos } from '../data/mockData';
import type { TodoItem } from '../types';

export function Notes() {
  const [selected, setSelected] = useState<string | null>(null);
  const [todos, setTodos] = useState<TodoItem[]>(initialTodos);

  function toggleTodo(id: string) {
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  }

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_300px]">
      <section>
        <h2 className="mb-4 border-b border-gray-200 pb-2 font-heading text-2xl">Notizen</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {notes.map((n) => (
            <button
              key={n.id}
              onClick={() => setSelected(selected === n.id ? null : n.id)}
              className={`flex min-h-40 flex-col rounded-2xl bg-cc-light p-4 text-left shadow-[var(--shadow-card)] transition-colors ${
                selected === n.id ? 'ring-2 ring-cc-cyan-dark' : 'hover:bg-cc-light-2'
              }`}
            >
              <span className="font-medium">{n.title}</span>
              <span className="mt-2 text-sm text-cc-ink/70">{n.body}</span>
            </button>
          ))}
        </div>
      </section>

      <aside>
        <h2 className="mb-4 border-b border-gray-200 pb-2 font-heading text-2xl">To Do</h2>
        <div className="space-y-3">
          {todos.map((t) => (
            <div
              key={t.id}
              className="flex items-center justify-between rounded-2xl bg-cc-light p-4 shadow-[var(--shadow-card)]"
            >
              <span className={t.done ? 'text-cc-ink/50 line-through' : ''}>{t.text}</span>
              <Checkbox checked={t.done} onChange={() => toggleTodo(t.id)} />
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
