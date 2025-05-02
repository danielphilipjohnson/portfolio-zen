import { RelatedPost } from "@/types/blog-post";

interface RelatedPostsProps {
  posts: RelatedPost[];
}

export const RelatedPosts = ({ posts }: RelatedPostsProps) => {
  if (!posts?.length) return null;

  return (
    <section>
      <h2 className="mb-8 text-2xl font-bold">Related Posts</h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <article key={post.id} className="overflow-hidden bg-white rounded-lg shadow-sm">
            <img
              src={post.image}
              alt={post.title}
              className="object-cover w-full h-48"
            />
            <div className="p-6">
              <span className="text-sm font-medium text-primary">{post.category}</span>
              <h3 className="mt-2 mb-3 text-xl font-semibold">
                <a 
                  href={post.url} 
                  className="transition-colors hover:text-primary"
                  tabIndex={0}
                  aria-label={`Read more about ${post.title}`}
                >
                  {post.title}
                </a>
              </h3>
              <p className="mb-4 text-gray-600">{post.summary}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{post.publishDate}</span>
                <span>{post.readingTime}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}; 