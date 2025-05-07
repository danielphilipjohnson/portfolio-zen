import type { SkillCategory as SkillCategoryProps } from "@/types/about-intro";
import { cn } from "@/lib/utils";
import Text from "../ui/Text";

export const SkillCategory = ({ title, skills, bgColor, textColor }: SkillCategoryProps) => (
	<div>
		<Text as='h4' variant='body-sm' className="mb-3 uppercase text-[var(--color-stone-800)]">
			{title}
		</Text>

		<div className="flex flex-wrap gap-2 mb-6">
			{skills.map((skill) => (
				<span
					key={skill}
					className={cn(
						"px-3 py-1 text-sm",
						bgColor,
						textColor
					)}
				>
					{skill}
				</span>
			))}
		</div>
	</div>
);
