export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  techStack: string[];
  problem: string;
  approach: string;
  challenges: string;
  takeaways: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  type: 'work' | 'education';
}

export interface Social {
  name: string;
  url: string;
  icon: string;
}
