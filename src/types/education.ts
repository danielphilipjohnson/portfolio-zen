export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location?: string;
  period: string;
  description?: string;
  courses?: string[];
  achievements?: string[];
  logo?: string;
}

export interface EducationProps {
  title?: string;
  subtitle?: string;
} 