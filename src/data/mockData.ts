import type {
  Appointment,
  ChatContact,
  ChatMessage,
  NewsItem,
  Note,
  Survey,
  Task,
  TaskGroup,
  TodoItem,
} from '../types';

export const appointments: Appointment[] = [
  {
    id: 'a1',
    title: 'Kick-off Meeting',
    date: '18.06.2026',
    description: 'Auftakt zum neuen Projektzyklus im großen Konferenzraum.',
  },
  {
    id: 'a2',
    title: 'Team-Lunch',
    date: '21.06.2026',
    description: 'Gemeinsames Mittagessen zum Kennenlernen der neuen Kolleg:innen.',
  },
  {
    id: 'a3',
    title: 'Sprint Review',
    date: '24.06.2026',
    description: 'Vorstellung der Ergebnisse aus dem laufenden Sprint.',
  },
];

export const news: NewsItem[] = [
  {
    id: 'n1',
    title: 'Neues Kulturprogramm',
    date: '24.06.2026',
    description:
      'Ab Juli startet unser interkulturelles Veranstaltungsprogramm mit Workshops und Vorträgen.',
  },
  {
    id: 'n2',
    title: 'Sommerfest 2026',
    date: '30.06.2026',
    description:
      'Wir feiern den Sommer gemeinsam – Anmeldungen sind ab sofort möglich.',
  },
];

export const tasks: Task[] = [
  {
    id: 't1',
    title: 'Onboarding-Unterlagen vorbereiten',
    date: '18.06.2026',
    description: 'Willkommensmappe und Zugänge für neue Mitglieder zusammenstellen.',
    done: false,
    assignee: 'Jane Doe',
    subtasks: [
      { id: 's1', title: 'Zugänge anlegen', done: true },
      { id: 's2', title: 'Mappe drucken', done: false },
    ],
  },
  {
    id: 't2',
    title: 'Feedback auswerten',
    date: '09.06.2026',
    description: 'Rückmeldungen aus der letzten Umfrage zusammenfassen.',
    done: true,
    subtasks: [],
  },
];

export const taskGroups: TaskGroup[] = [
  {
    id: 'g1',
    header: 'Organisation',
    date: '18.06.2026',
    items: [
      { id: 'gi1', title: 'Aufgabe 1', done: false },
      { id: 'gi2', title: 'Aufgabe 2', done: true },
      { id: 'gi3', title: 'Aufgabe 3', done: false },
    ],
  },
  {
    id: 'g2',
    header: 'Marketing',
    date: '20.06.2026',
    items: [
      { id: 'gi4', title: 'Aufgabe 1', done: false },
      { id: 'gi5', title: 'Aufgabe 2', done: false },
      { id: 'gi6', title: 'Aufgabe 3', done: true },
    ],
  },
  {
    id: 'g3',
    header: 'Events',
    date: '22.06.2026',
    items: [
      { id: 'gi7', title: 'Aufgabe 1', done: true },
      { id: 'gi8', title: 'Aufgabe 2', done: false },
      { id: 'gi9', title: 'Aufgabe 3', done: false },
    ],
  },
];

export const surveys: Survey[] = [
  {
    id: 'sv1',
    title: 'Wo soll das Sommerfest stattfinden?',
    options: [
      { id: 'o1', label: 'Stadtpark', votes: 12 },
      { id: 'o2', label: 'Vereinsheim', votes: 7 },
      { id: 'o3', label: 'Am See', votes: 20 },
    ],
  },
  {
    id: 'sv2',
    title: 'Bevorzugter Termin für das nächste Treffen?',
    options: [
      { id: 'o4', label: 'Freitagabend', votes: 9 },
      { id: 'o5', label: 'Samstagnachmittag', votes: 15 },
    ],
  },
  {
    id: 'sv3',
    title: 'Welches Workshop-Thema interessiert euch?',
    options: [
      { id: 'o6', label: 'Sprache & Kultur', votes: 11 },
      { id: 'o7', label: 'Kochen', votes: 18 },
      { id: 'o8', label: 'Musik', votes: 6 },
    ],
  },
];

export const notes: Note[] = [
  { id: 'no1', title: 'Ideen Sommerfest', body: 'Musik, Buffet, Spiele für Kinder.' },
  { id: 'no2', title: 'Einkaufsliste', body: 'Getränke, Dekoration, Pappteller.' },
  { id: 'no3', title: 'Kontakte', body: 'Catering: 0123 456789.' },
  { id: 'no4', title: 'Budget', body: 'Verfügbares Budget: 1.500 €.' },
  { id: 'no5', title: 'Locations', body: 'Anfragen an Stadtpark & Vereinsheim.' },
  { id: 'no6', title: 'Programm', body: 'Zeitplan für den Nachmittag erstellen.' },
  { id: 'no7', title: 'Helfer', body: '5 Freiwillige für Auf- und Abbau.' },
  { id: 'no8', title: 'Fotos', body: 'Fotograf:in für das Event organisieren.' },
  { id: 'no9', title: 'Feedback', body: 'Nach dem Event Umfrage verschicken.' },
];

export const todos: TodoItem[] = [
  { id: 'td1', text: 'Location bestätigen', done: false },
  { id: 'td2', text: 'Einladungen versenden', done: false },
  { id: 'td3', text: 'Catering buchen', done: true },
];

export const contacts: ChatContact[] = [
  {
    id: 'c1',
    name: 'Jane Doe',
    email: 'jane@labyrinthui.com',
    avatar: 'https://i.pravatar.cc/80?img=47',
    unread: true,
  },
  {
    id: 'c2',
    name: 'Max Mustermann',
    email: 'max@cultureconnect.io',
    avatar: 'https://i.pravatar.cc/80?img=12',
    unread: false,
  },
  {
    id: 'c3',
    name: 'Aylin Yıldız',
    email: 'aylin@cultureconnect.io',
    avatar: 'https://i.pravatar.cc/80?img=32',
    unread: false,
  },
];

export const messages: ChatMessage[] = [
  { id: 'm1', contactId: 'c1', fromMe: false, text: 'Hi! Hast du kurz Zeit?', time: '09:12' },
  { id: 'm2', contactId: 'c1', fromMe: true, text: 'Klar, worum geht es?', time: '09:13' },
  {
    id: 'm3',
    contactId: 'c1',
    fromMe: false,
    text: 'Wegen des Sommerfests – wollen wir die Location fixieren?',
    time: '09:14',
  },
  { id: 'm4', contactId: 'c1', fromMe: true, text: 'Guter Punkt, ich stimme für den See.', time: '09:15' },
  { id: 'm5', contactId: 'c2', fromMe: false, text: 'Die Unterlagen sind fertig.', time: 'Gestern' },
];
