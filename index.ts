export interface User {
  id: string;
  username: string;
  avatar: string;
  bio?: string;
  clubs: string[];
}

export interface Message {
  id: string;
  userId: string;
  content: string;
  timestamp: Date;
  attachments?: string[];
}

export interface BeReal {
  id: string;
  userId: string;
  imageUrl: string;
  timestamp: Date;
}

export interface Club {
  id: string;
  name: string;
  description: string;
  memberCount: number;
  imageUrl: string;
}