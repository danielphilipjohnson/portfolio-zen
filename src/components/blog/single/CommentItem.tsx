import { Comment } from '@/types/blog-post';
import Text from '../../ui/Text';

interface CommentItemProps {
  comment: Comment;
}

export const CommentItem = ({ comment }: CommentItemProps) => {
  return (
    <article className="p-6 bg-white border border-[var(--color-stone-200)]">
      <div className="flex items-center mb-4">
        <img
          src={comment.author.avatar}
          alt={comment.author.name}
          className="w-10 h-10 mr-4 rounded-full"
        />
        <div>
          <Text
            variant="body-sm"
            weight="medium"
            className="text-[var(--color-stone-800)]"
          >
            {comment.author.name}
          </Text>
          <Text
            variant="caption"
            className="text-[var(--color-stone-500)]"
          >
            {comment.date}
          </Text>
        </div>
      </div>
      <Text
        variant="body"
        className="mb-4 text-[var(--color-stone-600)]"
      >
        {comment.content}
      </Text>
      <button className="flex items-center space-x-2 text-sm text-[var(--color-stone-500)]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
        <span>{comment.likes} likes</span>
      </button>
    </article>
  );
}; 