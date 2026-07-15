import { BlogPost } from '@/types/blog-post';
import { RelatedPosts } from './RelatedPosts';
import Link from 'next/link';

interface BlogFooterProps {
  post: BlogPost;
}

const FRONTEND_ARCHITECTURE_TAG = 'Frontend Architecture';

export const BlogFooter = ({ post }: BlogFooterProps) => {
  const isFrontendArchitecture = post.tags?.some(
    (tag) => tag.toLowerCase() === FRONTEND_ARCHITECTURE_TAG.toLowerCase()
  );

  return (
    <footer className="mt-16 space-y-16">
      {isFrontendArchitecture && (
        <div className="rounded-lg border border-[var(--color-stone-200)] bg-[var(--color-stone-50)] p-6">
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-[var(--color-moss-700)]">
            Frontend Architecture
          </p>
          <p className="mb-4 text-sm text-[var(--color-stone-700)]">
            This article is part of the Frontend Architecture collection — patterns, principles, and systems thinking for building frontend applications that scale.
          </p>
          <Link
            href="/engineering/frontend-architecture"
            className="inline-block text-sm font-medium text-[var(--color-moss-700)] underline decoration-[var(--color-moss-300)] underline-offset-4 transition-colors hover:text-[var(--color-moss-900)]"
          >
            Explore the full collection &rarr;
          </Link>
        </div>
      )}
      {post.relatedPosts && <RelatedPosts posts={post.relatedPosts} />}
    </footer>
  );
}; 