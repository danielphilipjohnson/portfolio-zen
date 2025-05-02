import Text from "@/components/ui/Text"
import { ExperienceItem } from "./types"
import { TimelineDot } from "./TimelineElements"

interface ExperienceHeaderProps {
  experience: ExperienceItem
}

const ExperienceHeader = ({ experience }: ExperienceHeaderProps) => (
  <div className="relative mb-4 md:mb-0">
    <TimelineDot className="absolute right-0 hidden transform translate-x-1/2 md:block top-8" />
    
    <Text variant="h4" weight="normal" className="text-moss-700">
      {experience.role}
    </Text>
    <Text variant="h5" weight="light" className="text-stone-600">
      {experience.company}
    </Text>
    <Text variant="caption" className="mt-1 font-mono text-stone-500">
      {experience.period}
    </Text>
  </div>
)

export default ExperienceHeader 