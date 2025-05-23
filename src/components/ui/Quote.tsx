import React from 'react';

interface QuoteProps {
  children: React.ReactNode;
  className?: string;
}

const Quote = ({ children, className = '' }: QuoteProps) => {
  return (
    <blockquote 
      className={`mb-8 p-6 bg-[var(--color-moss-50)] border-l-4 border-[var(--color-moss-500)] ${className}`}
      role="doc-pullquote"
      aria-label="Quote"
    >
      {children}
    </blockquote>
  );
};

export default Quote; 