import Text from "@/components/ui/Text";
import { ExperienceItem } from "@/types/experience";

const ExperienceCard = ({ experience }: { experience: ExperienceItem }) => (
  <div className="p-6 bg-white border border-stone-200 shadow-soft">
    <Text variant="body" className="mb-4 text-stone-700">
      {experience.description}
    </Text>

    {experience.technologies && experience.technologies.length > 0 && (
      <div className="mb-4">
        <Text variant="label" className="mb-2 text-stone-800">
          Technologies
        </Text>
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map(tech => (
            <span
              key={tech}
              className="inline-block px-3 py-1 text-xs border rounded-sm bg-stone-100 text-stone-800 border-stone-200"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    )}

    {experience.highlights && experience.highlights.length > 0 && (
      <div>
        <Text variant="label" className="mb-2 text-stone-800 dark:text-stone-800">
          Key Contributions
        </Text>
        <ul className="pl-5 space-y-1 text-sm list-disc text-stone-700">
          {experience.highlights.map((highlight, i) => (
            <li key={i}>{highlight}</li>
          ))}
        </ul>
      </div>
    )}
  </div>
);

export default ExperienceCard; 