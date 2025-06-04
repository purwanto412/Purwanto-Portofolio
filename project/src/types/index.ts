export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  description: string[];
  startYear: number;
}

export interface Training {
  id: number;
  title: string;
  organization?: string;
}

export interface SocialLink {
  id: number;
  name: string;
  url: string;
  icon: string;
  color: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}