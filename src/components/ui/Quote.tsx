import React from 'react';
import Text from './Text';

interface QuoteProps {
  children: React.ReactNode;
  className?: string;
}

const Quote: React.FC<QuoteProps> = ({ children, className = '' }) => {
  return (
    <blockquote 
      className={`mb-8 p-6 bg-[var(--color-moss-50)] border-l-4 border-[var(--color-moss-500)] ${className}`}
      role="doc-pullquote"
      aria-label="Quote"
    >
      <Text variant="body" className="text-[var(--color-stone-800)] mb-0">
        {children}
      </Text>
    </blockquote>
  );
};

export default Quote; 