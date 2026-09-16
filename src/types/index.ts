export interface Appointment {
  id: string;
  title: string;
  date: string;
  description: string;
}

export interface NewsItem {
  id: string;
  title: string;
  date: string;
  description: string;
}

export interface Subtask {
  id: string;
  title: string;
  done: boolean;
}

export interface Task {
  id: string;
  title: string;
  date: string;
  description: string;
  done: boolean;
  subtasks: Subtask[];
  assignee?: string;
}

export interface TaskGroup {
  id: string;
  header: string;
  date: string;
  items: Subtask[];
}

export interface SurveyOption {
  id: string;
  label: string;
  votes: number;
}

export interface Survey {
  id: string;
  title: string;
  options: SurveyOption[];
}

export interface Note {
  id: string;
  title: string;
  body: string;
}

export interface TodoItem {
  id: string;
  text: string;
  done: boolean;
}

export interface ChatContact {
  id: string;
  name: string;
  email: string;
  avatar: string;
  unread: boolean;
}

export interface ChatMessage {
  id: string;
  contactId: string;
  fromMe: boolean;
  text: string;
  time: string;
}

export interface CalendarNote {
  date: string; // ISO yyyy-mm-dd
  text: string;
}
