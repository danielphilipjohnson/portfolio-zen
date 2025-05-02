export interface ExperienceItem {
	id: string;
	role: string;
	location: string;
	company: string;
	period: string;
	description: string;
	technologies?: string[];
	highlights?: string[];
}

export interface ExperienceSectionProps {
	title?: string;
	subtitle?: string;
} 