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
  keywords?: string[];
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

export interface Profile {
  id: string;
  name: string;
  title: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  resumeUrl?: string;
  githubUrl?: string;
  linkedinUrl?: string;
}
