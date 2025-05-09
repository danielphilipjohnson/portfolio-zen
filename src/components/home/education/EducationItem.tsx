import Text from "@/components/ui/Text";
import { EducationItem as EducationItemType } from '@/types/education';

interface EducationItemProps {
  item: EducationItemType;
}

const EducationItem  = ({ item }: Readonly<EducationItemProps>) => {
  return (
    <div className="relative">
      <div className="items-start md:grid md:grid-cols-12 md:gap-8">
        <div className="relative mb-6 md:col-span-4 md:mb-0">
          <div className="inline-block mb-4">
            <div className="relative flex items-center justify-center w-16 h-16 p-2 bg-white shadow-soft">
              {item.logo ? (
                <img
                  src={item.logo}
                  alt={`${item.institution} logo`}
                  className="max-w-full max-h-full"
                />
              ) : (
                <div className="font-serif text-2xl text-stone-400">
                  {item.institution.split(' ').map(word => word[0]).join('')}
                </div>
              )}
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-moss-400" aria-hidden="true" />
            </div>
          </div>

          <Text as="h3" variant="h4" weight="light" className="mb-1 text-moss-700">
            {item.degree}
          </Text>
          <Text as="h4" variant="h5" weight="normal" className="text-stone-700">
            {item.institution}
          </Text>
          {item.location && (
            <Text variant="caption" className="mb-2 text-stone-800">
              {item.location}
            </Text>
          )}
          <Text variant="label" className="inline-block mt-2 font-mono text-clay-600">
            {item.period}
          </Text>
        </div>

        {/* Right column - Details */}
        <div className="md:col-span-8">
          <div className="relative p-6 bg-white border border-stone-200 shadow-soft">
            {item.description && (
              <Text variant="body" className="mb-4 text-stone-700">
                {item.description}
              </Text>
            )}

            <div className="md:grid md:grid-cols-2 md:gap-8">
              {item.courses && item.courses.length > 0 && (
                <div className="mb-4 md:mb-0">
                  <Text variant="label" className="block mb-2 text-stone-700">
                    Notable Coursework
                  </Text>
                  <ul className="space-y-1">
                    {item.courses.map((course, idx) => (
                      <li key={course[idx]} className="flex items-baseline">
                        <div className="w-1.5 h-1.5 bg-clay-400 rounded-full mr-2 mt-1.5 flex-shrink-0" aria-hidden="true" />
                        <Text variant="body-sm" className="text-stone-800">
                          {course}
                        </Text>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {item.achievements && item.achievements.length > 0 && (
                <div>
                  <Text variant="label" className="block mb-2 text-stone-700">
                    Achievements
                  </Text>
                  <ul className="space-y-1">
                    {item.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-baseline">
                        <div className="w-1.5 h-1.5 bg-moss-500 rounded-full mr-2 mt-1.5 flex-shrink-0" aria-hidden="true" />
                        <Text variant="body-sm" className="text-stone-800">
                          {achievement}
                        </Text>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-moss-300" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationItem; 