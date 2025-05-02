"use client"
import { useState } from 'react';
import Text from "@/components/ui/Text"
import { socialLinks } from '@/data/social-links';
import { cn } from '@/lib/utils';

const ContactInfo = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  return (
    <div className="mb-12 lg:w-2/5 lg:mb-0">
      <div className={cn(
        "h-full p-8 transition-all",
        "bg-[color:var(--color-moss-50)] border-l-2 border-[color:var(--color-moss-600)]"
      )}>
        {/*<Text
          variant="h5"
          as="h3"
          className="mb-6 text-[color:var(--color-moss-700)]"
        >
          Get in Touch
        </Text>*/}

        <div className="mb-10 space-y-5">
          <div className="flex items-start">
            <div className="p-2 mr-3 rounded-full bg-[color:var(--color-stone-100)]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[color:var(--color-moss-600)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <Text
                variant="label"
                className="mb-1 text-[color:var(--color-stone-600)]"
              >
                Email
              </Text>
              <Text
                variant="body-sm"
                className="text-[color:var(--color-moss-600)]"
              >
                <a href="mailto:hello@yourname.com" className="hover:underline">
                  hello@yourname.com
                </a>
              </Text>
            </div>
          </div>

          <div className="flex items-start">
            <div className="p-2 mr-3 rounded-full bg-[color:var(--color-stone-100)]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-[color:var(--color-moss-600)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <Text
                variant="label"
                className="mb-1 text-[color:var(--color-stone-600)]"
              >
                Location
              </Text>
              <Text
                variant="body-sm"
                className="text-[color:var(--color-moss-600)]"
              >
                San Francisco, California
              </Text>
            </div>
          </div>
        </div>

        <div>
          <Text
            variant="label"
            className="mb-4 block text-[color:var(--color-stone-600)]"
          >
            Find me on
          </Text>
          <div className="flex space-x-4">
            {socialLinks.map((social: {
              id: string;
              url: string;
              name: string;
              icon: React.ReactNode;
            }) => (
              <a
                key={social.id}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="relative transition-transform duration-300"
                onMouseEnter={() => setHoveredIcon(social.id)}
                onMouseLeave={() => setHoveredIcon(null)}
                style={{
                  transform: hoveredIcon === social.id ? 'translateY(-4px)' : 'none',
                }}
              >
                <div
                  className={cn(
                    "flex items-center justify-center w-10 h-10 transition-colors rounded-full",
                    hoveredIcon === social.id
                      ? "bg-[color:var(--color-moss-600)] text-white"
                      : "bg-[color:var(--color-stone-200)] text-[color:var(--color-stone-600)]"
                  )}
                >
                  {social.icon}
                </div>

                {hoveredIcon === social.id && (
                  <div className="absolute z-10 px-2 py-1 text-xs transform -translate-x-1/2 rounded -bottom-8 left-1/2 whitespace-nowrap bg-[color:var(--color-moss-600)] text-white">
                    {social.name}
                  </div>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo; 