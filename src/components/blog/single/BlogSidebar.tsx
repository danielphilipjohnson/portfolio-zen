import Text from '../../ui/Text';
import { BlogPost } from '@/types/blog-post';
import { TableOfContents } from './TableOfContents';

interface BlogSidebarProps {
  post: BlogPost;
}

export const BlogSidebar = ({ post }: Readonly<BlogSidebarProps>) => {
  return (
    <aside className="mb-8 lg:w-1/4 lg:pr-8 lg:mb-0">
      <div className="sticky top-24">
        {/* Table of Contents */}
        <TableOfContents items={post.tableOfContents} />

        {/* Tags */}
        <div className="p-6 mb-6 bg-white border border-[var(--color-stone-200)] rounded-lg">
          <Text
            variant="h5"
            as="h2"
            className="mb-4 text-[var(--color-moss-700)]"
          >
            Tags
          </Text>

          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag, index) => (
              <a
                key={index}
                href={`/blog/tag/${tag.toLowerCase().replace(/ /g, '-')}`}
                className="inline-block px-3 py-1 text-xs transition-colors bg-[var(--color-stone-100)] text-[var(--color-stone-800)] hover:bg-[var(--color-stone-200)] rounded"
              >
                {tag}
              </a>
            ))}
          </div>
        </div>

        {/* Share */}
        <div className="p-6 bg-white border border-[var(--color-stone-200)]">
          <Text
            variant="h5"
            as="h2"
            className="mb-4 text-[var(--color-moss-700)]"
          >
            Share This Article
          </Text>

          <div className="flex gap-3">
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full transition-colors bg-[var(--color-stone-100)] text-[var(--color-stone-800)]"
              onClick={(e) => {
                e.preventDefault();
                window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`, '_blank');
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
            </a>
            <a
              href="#"
              className="w-9 h-9 flex items-center justify-center rounded-full transition-colors bg-[var(--color-stone-100)] text-[var(--color-stone-800)]"
              onClick={(e) => {
                e.preventDefault();
                window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank');
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}; 