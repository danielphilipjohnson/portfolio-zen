import Text from "@/components/ui/Text"
import { defaultExperiences } from "@/data/experiences";
import { cn } from "@/lib/utils";
import ExperienceCard from "./ExperienceCard";
import ExperienceHeader from "./ExperienceHeader";
import { TimelineDot, TimelineLine } from "./TimelineElements";
import { ExperienceSectionProps } from "@/types/experience";

const Experience = ({
	title = "Professional Growth Path",
	subtitle = "My journey of continuous learning and evolution in the digital landscape"
}: ExperienceSectionProps) => {
	return (
		<section className="py-16 md:py-24 bg-stone-50">
			<div className="container max-w-5xl px-6 mx-auto">
				<div className="relative mb-16">
					<div className="absolute top-0 left-0 w-16 h-px bg-moss-300" />
					<Text variant="h2" weight="light" className="mt-6 mb-3 text-stone-800">
						{title}
					</Text>
					<Text variant="body" className="max-w-xl text-stone-600">
						{subtitle}
					</Text>
				</div>

				<div className="relative ml-4 md:ml-0">
					<TimelineLine className="absolute top-0 bottom-0 hidden -ml-px md:block left-1/4" />

					{defaultExperiences.map((exp, index) => (
						<div
							key={exp.id}
							className={cn(
								"relative mb-16 md:mb-24",
								index === defaultExperiences.length - 1 && "mb-0"
							)}
						>
							<TimelineLine className="absolute top-0 bottom-0 md:hidden -left-4" />
							<TimelineDot className="absolute transform -translate-x-1/2 md:hidden -left-4 top-8" />

							<div className="items-start md:grid md:grid-cols-4 md:gap-8">
								<ExperienceHeader experience={exp} />
								<div className="md:col-span-3">
									<ExperienceCard experience={exp} />
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default Experience; 