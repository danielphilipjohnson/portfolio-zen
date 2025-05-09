"use client"
import { useState } from 'react';

const Subscribe = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <p className="mb-3 text-sm font-medium text-[var(--color-stone-800)]">
        Stay updated with my latest work
      </p>

      <form onSubmit={handleSubmit} className="flex">
        <input
          type="email"
          placeholder="Your email"
          value={email}
          onChange={handleEmailChange}
          className="w-full max-w-xs px-3 py-2 text-sm focus:outline-none bg-white text-[var(--color-stone-800)] rounded-l-sm"
          aria-label="Email address for subscription"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 text-sm transition-colors whitespace-nowrap bg-[var(--color-moss-600)] text-white rounded-r-sm hover:bg-[var(--color-moss-700)] focus:outline-none focus:ring-2 focus:ring-[var(--color-moss-600)] focus:ring-offset-2"
        >
          Subscribe
        </button>
      </form>

      <p className="mt-2 text-xs text-[var(--color-stone-500)]">
        I respect your privacy. No spam, ever.
      </p>
    </div>
  );
};

export default Subscribe; 