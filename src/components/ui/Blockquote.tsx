import { Text } from '@/components/ui/Text';
import { cn } from '@/lib/utils';
import { ColorPath } from '@/tokens/colors';

interface BlockquoteProps {
  content: string;
  attribution: string;
  className?: string;
  borderColor?: ColorPath;
  borderSize?: 'sm' | 'md' | 'lg';
}

const Blockquote = ({ 
  content, 
  attribution, 
  className,
  borderColor = 'clay.300',
  borderSize = 'md'
}: BlockquoteProps) => {
  const borderSizeClasses = {
    sm: 'border-l-2',
    md: 'border-l-4',
    lg: 'border-l-8'
  };

  return (
    <blockquote 
      className={cn(
        "px-6 py-8",
        borderSizeClasses[borderSize],
        `border-[color:var(--color-${borderColor.replace('.', '-')})]`,
        className
      )}
    >
      <Text className="text-stone-700" variant="quote">
        {content}
      </Text>
      <Text className="text-right text-stone-700" variant="caption">
        {attribution}
      </Text>
    </blockquote>
  );
};

export default Blockquote; 