import { useState } from 'react';
import Text from '../../ui/Text';

export const CommentForm = () => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement comment submission
    setComment('');
  };

  return (
    <form onSubmit={handleSubmit} className="mt-8">
      <Text
        variant="h5"
        as="h3"
        className="mb-4 text-[var(--color-moss-700)]"
      >
        Leave a Comment
      </Text>
      <div className="mb-4">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Share your thoughts..."
          className="w-full p-4 border rounded-md border-[var(--color-stone-200)] focus:outline-none focus:ring-2 focus:ring-[var(--color-moss-500)] focus:border-transparent"
          rows={4}
          aria-label="Comment"
        />
      </div>
      <button
        type="submit"
        className="px-6 py-2 text-sm font-medium text-white transition-colors bg-[var(--color-moss-600)] hover:bg-[var(--color-moss-700)] rounded-md"
        disabled={!comment.trim()}
      >
        Post Comment
      </button>
    </form>
  );
}; 