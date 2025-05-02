export interface Author {
  name: string;
  role: string;
  avatar: string;
}

export interface TableOfContentsItem {
  id: string;
  title: string;
  level: number;
}

export interface RelatedPost {
  id: string;
  title: string;
  summary: string;
  publishDate: string;
  readingTime: string;
  image: string;
  category: string;
  url: string;
}

export interface CommentAuthor {
  name: string;
  avatar: string;
}

export interface Comment {
  id: string;
  author: CommentAuthor;
  date: string;
  content: string;
  likes: number;
}

export interface BlogPost {
  title: string;
  publishDate: string;
  author: Author;
  category: string;
  readingTime: string;
  tags: string[];
  imageUrl: string;
  imageAlt: string;
  excerpt: string;
  tableOfContents: TableOfContentsItem[];
  relatedPosts: RelatedPost[];
  comments?: Comment[];
} 