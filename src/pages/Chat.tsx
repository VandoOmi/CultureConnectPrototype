import { useMemo, useState } from 'react';
import { Send } from 'lucide-react';
import { contacts, messages as initialMessages } from '../data/mockData';
import type { ChatMessage } from '../types';

export function Chat() {
  const [activeId, setActiveId] = useState(contacts[0].id);
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [draft, setDraft] = useState('');

  const activeContact = contacts.find((c) => c.id === activeId)!;
  const thread = useMemo(
    () => messages.filter((m) => m.contactId === activeId),
    [messages, activeId],
  );

  function send(e: React.FormEvent) {
    e.preventDefault();
    if (!draft.trim()) return;
    setMessages((prev) => [
      ...prev,
      {
        id: `m-${Date.now()}`,
        contactId: activeId,
        fromMe: true,
        text: draft,
        time: new Date().toLocaleTimeString('de-DE', { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
    setDraft('');
  }

  return (
    <div className="flex h-[calc(100vh-12rem)] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[var(--shadow-card)]">
      <aside className="hidden w-72 shrink-0 border-r border-gray-200 sm:block">
        {contacts.map((c) => (
          <button
            key={c.id}
            onClick={() => setActiveId(c.id)}
            className={`flex w-full items-center gap-3 border-b border-gray-100 p-4 text-left transition-colors ${
              activeId === c.id ? 'bg-cc-light' : 'hover:bg-gray-50'
            }`}
          >
            <img src={c.avatar} alt="" className="h-10 w-10 rounded-full object-cover" />
            <div className="min-w-0">
              <div className="truncate font-medium">{c.name}</div>
              <div className="truncate text-xs text-cc-muted">{c.email}</div>
            </div>
            {c.unread && <span className="ml-auto h-2.5 w-2.5 rounded-full bg-red-500" />}
          </button>
        ))}
      </aside>

      <div className="flex flex-1 flex-col">
        <div className="flex items-center gap-3 border-b border-gray-200 p-4">
          <img src={activeContact.avatar} alt="" className="h-9 w-9 rounded-full object-cover" />
          <span className="font-medium">{activeContact.name}</span>
        </div>

        <div className="flex-1 space-y-3 overflow-y-auto bg-gray-50 p-4">
          {thread.map((m) => (
            <div key={m.id} className={`flex ${m.fromMe ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-[70%] rounded-2xl px-4 py-2 text-sm ${
                  m.fromMe ? 'bg-cc-cyan text-cc-ink' : 'bg-cc-light text-cc-ink'
                }`}
              >
                <p>{m.text}</p>
                <span className="mt-1 block text-right text-[10px] text-cc-ink/50">{m.time}</span>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={send} className="flex items-center gap-2 border-t border-gray-200 p-3">
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder="Nachricht schreiben…"
            className="flex-1 rounded-full border border-gray-300 px-4 py-2 outline-none focus:border-cc-cyan focus:ring-2 focus:ring-cc-cyan/40"
          />
          <button
            type="submit"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-cc-cyan text-white transition-colors hover:bg-cc-cyan-dark"
            aria-label="Senden"
          >
            <Send size={18} />
          </button>
        </form>
      </div>
    </div>
  );
}
