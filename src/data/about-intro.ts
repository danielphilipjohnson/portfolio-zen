import type { SkillCategory } from "@/types/about-intro";
import { AboutInfoItem } from "@/types/about-intro";

export const ABOUT_INFO: AboutInfoItem[] = [
	{ emoji: '😄', label: 'Pronouns', value: 'Him, he, they' },
	{ emoji: '📌', label: 'Location', value: 'Cornwall 🏴󠁧󠁢󠁥󠁮󠁧󠁿' },
	{ emoji: '🎓', label: 'Education', value: 'BSc Psychology | University of Plymouth 🏫' },
	{ emoji: '🥼', label: 'Career Shift', value: 'Psychologist turned React developer 🖥️' },
	{ emoji: '🖥️', label: 'Current Setup', value: 'Kubuntu 20.04 and Manjaro 20.0.3' },
	{ emoji: '🔭', label: 'Hobby', value: 'In my spare time I build Linux from scratch' },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
	{
		title: 'Frontend',
		skills: ['React', 'TypeScript', 'TailwindCSS', 'Next.js', 'HTML5', 'CSS3'],
		bgColor: 'bg-[var(--color-moss-50)]',
		textColor: 'text-[var(--color-moss-700)]',
	},
	{
		title: 'Backend',
		skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'GraphQL'],
		bgColor: 'bg-[var(--color-water-100)]',
		textColor: 'text-[var(--color-water-600)]',
	},
	{
		title: 'Tools & Environment',
		skills: ['Linux', 'Git', 'Docker', 'VS Code', 'Figma', 'Terminal'],
		bgColor: 'bg-[var(--color-clay-100)]',
		textColor: 'text-[var(--color-clay-800)]',
	},
];