import { Text } from '@/components/ui/Text';
import { cn } from '@/lib/utils';

interface TagListProps {
  heading: string;
  tags: string[];
  colorToken: 'water' | 'moss' | 'clay';
}

const TagList = ({ heading, tags, colorToken }: TagListProps) => {
  return (
    <div className="mb-6">
      <Text 
        as="h3" 
        variant="h6" 
        weight="medium" 
        className="text-[var(--color-stone-600)] mb-3"
      >
        {heading}
      </Text>
    
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className={cn(
              'px-3 py-1 text-sm',
              `bg-[var(--color-${colorToken}-100)]`,
              `text-[var(--color-${colorToken}-600)]`
            )}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TagList; 