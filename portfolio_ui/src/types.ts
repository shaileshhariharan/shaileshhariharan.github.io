export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'ai-ml' | 'mobile' | 'web';
  technologies: string[];
  github: string | null;
  demo: string | null;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}