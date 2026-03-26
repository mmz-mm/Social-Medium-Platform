export interface NavItem {
  label: string;
  icon: string;
  routeName: string;
}

export interface StatPack {
  likes: string;
  comments: string;
  shares: string;
}

export interface Post {
  id: string;
  author: string;
  handle: string;
  time: string;
  avatar: string;
  content: string;
  images: string[];
  stats: StatPack;
  tags?: string[];
}

export interface CommentItem {
  id: string;
  author: string;
  role?: string;
  time: string;
  content: string;
  likes: string;
  avatar: string;
}

export interface ChatMessage {
  id: string;
  side: 'left' | 'right';
  type: 'text' | 'image';
  content: string;
  time: string;
  avatar?: string;
  status?: string;
}

export interface AiMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  time: string;
  codeLanguage?: string;
  codeBlock?: string;
  bullets?: string[];
}

export interface ProfileMetric {
  label: string;
  value: string;
}

export interface ProfileCard {
  title: string;
  subtitle: string;
  icon: string;
  routeName?: string;
}
