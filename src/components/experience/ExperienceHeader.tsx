import Text from "@/components/ui/Text"
import { TimelineDot } from "./TimelineElements"
import { ExperienceItem } from "@/types/experience"

interface ExperienceHeaderProps {
  experience: ExperienceItem
}

const ExperienceHeader = ({ experience }: ExperienceHeaderProps) => (
  <div className="relative mb-4 md:mb-0">
    <TimelineDot className="absolute right-0 hidden transform translate-x-1/2 md:block top-8" />
    
    <Text as="h3" variant="h4" weight="normal" className="text-moss-700">
      {experience.role}
    </Text>
    <Text variant="h5" weight="light" className="text-stone-800">
      {experience.company}
    </Text>
    <Text variant="caption" className="mt-1 font-mono text-stone-800">
      {experience.period}
    </Text>
  </div>
)

export default ExperienceHeader 