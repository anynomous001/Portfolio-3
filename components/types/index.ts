export interface Job {
  year: string;
  role: string;
  company: string;
  description: string;
  tech: string[];
}

export interface Project {
  year: string;
  title: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  images?: string[];
}

export interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
}

export interface Social {
  name: string;
  handle: string;
  url: string;
}
