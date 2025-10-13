import Text from "@/components/ui/Text";

const WhyWorkWithMe = () => {
  const reasons = [
    "5+ years building fintech, e-commerce, and SaaS frontends.",
    "Deep expertise in React, Next.js, TypeScript, Tailwind, Zod, TanStack, Zustand.",
    "OWASP-trained, with hands-on security audit experience.",
    "Philosophy of minimalism + patience (bonsai coding) → pragmatic, maintainable solutions.",
    "UK-based, available for remote consulting across Europe & US timezones."
  ];

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8 md:mb-12">
        <Text
          as="h2"
          variant="h2"
          className="mb-6 md:mb-8 text-stone-800 text-2xl md:text-3xl"
        >
          📊 Why Work With Me
        </Text>
        
        <div className="space-y-3 md:space-y-4 max-w-3xl mx-auto">
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-start gap-3 md:gap-4 text-left">
              <div className="w-2 md:w-3 h-2 md:h-3 bg-moss-500 rounded-full mt-2 flex-shrink-0"></div>
              <Text 
                variant="body" 
                className="text-stone-700 leading-relaxed text-sm md:text-base"
              >
                {reason}
              </Text>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default WhyWorkWithMe;
