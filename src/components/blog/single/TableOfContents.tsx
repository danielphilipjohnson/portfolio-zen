import { TableOfContentsItem } from '@/types/blog-post';
import Text from '@/components/ui/Text';
import { cn } from '@/lib/utils';
import removeMd from 'remove-markdown';

interface TableOfContentsProps {
  items: TableOfContentsItem[];
}

export const TableOfContents = ({ items }: TableOfContentsProps) => {
  return (
    <div className="p-6 mb-6 bg-white border border-[var(--color-stone-200)] rounded-lg">
      <Text
        variant="h5"
        as="h2"
        className="mb-4 text-[var(--color-moss-700)]"
      >
        Table of Contents
      </Text>

      <nav aria-label="Table of contents">
        <ul className="space-y-2">
          {items.map((item) => (
            <li
              key={item.id}
              className={cn(
                'text-sm transition-colors',
                {
                  'ml-0': item.level === 1,
                  'ml-4': item.level === 2,
                  'ml-8': item.level === 3,
                  'ml-12': item.level === 4,
                  'ml-16': item.level === 5,
                  'ml-20': item.level === 6,
                }
              )}
            >
              <a
                href={`#${item.id}`}
                className={cn(
                  'block py-1 hover:text-[var(--color-moss-600)] transition-colors',
                  {
                    'font-semibold text-[var(--color-stone-900)]': item.level === 1,
                    'text-[var(--color-stone-700)]': item.level > 1,
                  }
                )}
              >
                {removeMd(item.title)}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}; 