import { BlogPost } from '@/types/blog-post';
import { CommentItem } from './CommentItem';
import { CommentForm } from './CommentForm';

interface CommentsProps {
  post: BlogPost;
}

export const Comments = ({ post }: CommentsProps) => {
  return (
    <section>
      <h2 className="mb-8 text-2xl font-bold">Comments ({post.comments?.length || 0})</h2>
      <div className="space-y-8">
        {post.comments?.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>
      <CommentForm />
    </section>
  );
}; 