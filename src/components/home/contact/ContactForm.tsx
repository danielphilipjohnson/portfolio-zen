"use client"
import { useState } from 'react';
import Text from "@/components/ui/Text"
import { cn } from "@/lib/utils"

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');

      // Reset form after success
      setTimeout(() => {
        setFormStatus('idle');
        // Reset form fields if needed
      }, 3000);
    }, 1500);
  };

  return (
    <div className="lg:w-3/5">
      <div className="p-8 bg-white border-t-2 border-[color:var(--color-clay-400)] border-l border-r border-b">
        <Text
          variant="h5"
          as="h3"
          className="mb-6 text-[color:var(--color-clay-600)]"
        >
          Send a Message
        </Text>

        {formStatus === 'success' ? (
          <div className="px-6 py-10 text-center bg-[color:var(--color-moss-50)] border-l-2 border-[color:var(--color-moss-600)]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-12 h-12 mx-auto mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              style={{ color: 'var(--color-moss-600)' }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>

            <Text
              variant="h5"
              as="h4"
              className="mb-2 text-[color:var(--color-moss-700)]"
            >
              Message Sent
            </Text>

            <Text
              variant="body"
              className="text-[color:var(--color-stone-800)]"
            >
              Thank you for reaching out. I&apos;ll get back to you soon.
            </Text>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm text-[color:var(--color-stone-800)]"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2 border border-[color:var(--color-stone-200)] text-[color:var(--color-stone-800)] transition-colors focus:outline-none"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm text-[color:var(--color-stone-800)]"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border border-[color:var(--color-stone-200)] text-[color:var(--color-stone-800)] transition-colors focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm text-[color:var(--color-stone-800)]"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                className="w-full px-3 py-2 border border-[color:var(--color-stone-200)] text-[color:var(--color-stone-800)] transition-colors focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm text-[color:var(--color-stone-800)]"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full px-3 py-2 border border-[color:var(--color-stone-200)] text-[color:var(--color-stone-800)] transition-colors focus:outline-none resize-none"
              ></textarea>
            </div>

            <div className="text-right">
              <button
                type="submit"
                disabled={formStatus === 'submitting'}
                className={cn(
                  "px-6 py-2 text-sm transition-colors text-white",
                  formStatus === 'submitting' 
                    ? "bg-[color:var(--color-stone-400)]" 
                    : "bg-[color:var(--color-clay-600)]"
                )}
              >
                {formStatus === 'submitting' ? (
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-2 -ml-1 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : 'Send Message'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactForm; 