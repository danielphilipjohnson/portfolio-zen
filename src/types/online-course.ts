export interface OnlineCourse {
	id: string;
	title: string;
	provider: string;
	date: string;
	category: string;
	url?: string;
	certificate_url?: string;
	description?: string;
	skills?: string[];
	logo?: string;
} 