import { BlogPost } from '@/types/blog-post';
import { RelatedPosts } from './RelatedPosts';

interface BlogFooterProps {
  post: BlogPost;
}

export const BlogFooter = ({ post }: BlogFooterProps) => {
  return (
    <footer className="mt-16 space-y-16">
      {post.relatedPosts && <RelatedPosts posts={post.relatedPosts} />}
      {/*<Comments post={post} />*/}
    </footer>
  );
}; 