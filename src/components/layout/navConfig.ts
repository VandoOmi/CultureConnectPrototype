import {
  CalendarDays,
  ClipboardList,
  Home,
  StickyNote,
  Vote,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface NavItem {
  label: string;
  to: string;
  icon: LucideIcon;
}

export const navItems: NavItem[] = [
  { label: 'Übersicht', to: '/', icon: Home },
  { label: 'Aufgaben', to: '/aufgaben', icon: ClipboardList },
  { label: 'Kalender', to: '/kalender', icon: CalendarDays },
  { label: 'Umfragen', to: '/umfragen', icon: Vote },
  { label: 'Notizen', to: '/notizen', icon: StickyNote },
];

export const mobileNavItems: NavItem[] = [
  { label: 'Übersicht', to: '/', icon: Home },
  { label: 'Aufgaben', to: '/aufgaben', icon: ClipboardList },
  { label: 'Kalender', to: '/kalender', icon: CalendarDays },
  { label: 'Umfragen', to: '/umfragen', icon: Vote },
  { label: 'Notizen', to: '/notizen', icon: StickyNote },
];
