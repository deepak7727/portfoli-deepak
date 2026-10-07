export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'Fintech & Billing' | 'Enterprise & Logistics' | 'Media & Utility' | 'E-Commerce';
  platform: string;
  featured: boolean;
  tags: string[];
  architecture: string;
  keyFeatures: string[];
  challenges: string;
  solution: string;
  myContribution: string;
  thumbnail: string;
  screenshots: { url: string; caption: string }[];
  stats: { label: string; value: string }[];
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  duration: string;
  current: boolean;
  summary: string;
  responsibilities: string[];
  techStack: string[];
  keyOutcomes: string[];
}

export interface SkillItem {
  name: string;
  level: number; // 1 - 100
  badge: string;
  experienceYears?: string;
  featured?: boolean;
}

export interface SkillCategory {
  category: string;
  subtitle: string;
  icon: string;
  skills: SkillItem[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  location: string;
  gradeOrSpecialization?: string;
}

export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  experienceYears: string;
  location: string;
  hometown: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  avatarUrl: string;
  resumePdfUrl: string;
  metrics: {
    label: string;
    value: string;
    description: string;
  }[];
}

export interface ContactMessage {
  name: string;
  email: string;
  subject: string;
  message: string;
}
