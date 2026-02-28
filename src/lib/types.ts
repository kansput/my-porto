export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  color: 'neo-red' | 'neo-blue' | 'neo-pink' | 'neo-orange';
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  points: string[];
  color: string;
}