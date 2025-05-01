import Text from "@/components/ui/Text";
import { PhilosophyPoint } from '@/types/about';

interface PhilosophyPointsProps {
  title: string;
  points: PhilosophyPoint[];
}

const PhilosophyPoints = ({ title, points }: PhilosophyPointsProps) => {
  return (
    <div>
      <Text
        variant="h5"
        className="mb-5 text-stone-800"
      >
        {title}
      </Text>

      <div className="space-y-5">
        {points.map((point, index) => (
          <div key={index} className="flex">
            <div className="pt-1 mr-4">
              <div className="w-3 h-3 transform rotate-45 rounded-sm bg-clay-400"></div>
            </div>
            <div>
              <Text
                variant="h6"
                className="mb-1 text-moss-600"
              >
                {point.title}
              </Text>
              <Text
                variant="body-sm"
                className="text-stone-600"
              >
                {point.description}
              </Text>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhilosophyPoints; 