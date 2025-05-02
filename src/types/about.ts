export interface PhilosophyPoint {
	title: string;
	description: string;
}

export interface AboutProps {
	title: string;
	summary: string;
	details: string[];
	philosophyTitle: string;
	philosophyPoints: PhilosophyPoint[];
	imageSrc: string;
	imageAlt: string;
}
