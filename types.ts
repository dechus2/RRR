
export interface Step {
  id: string;
  label: string;
  title: string;
  description: string;
}

export interface Stat {
  value: string;
  tag: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}
