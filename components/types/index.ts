export interface Job {
  year: string;
  role: string;
  company: string;
  description: string;
  tech: string[];
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
