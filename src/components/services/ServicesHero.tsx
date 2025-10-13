import Text from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const ServicesHero = () => {
  return (
    <section className="pt-24 pb-12 md:pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <Text
          as="h1"
          variant="h1"
          className="mb-6 text-stone-800 text-3xl md:text-4xl lg:text-5xl"
        >
          React & Next.js Consulting Services
        </Text>
        
        <Text
          variant="h5"
          className="mb-8 text-stone-600 max-w-4xl mx-auto font-light leading-relaxed text-lg md:text-xl"
        >
          I help teams build secure, scalable, and maintainable frontend systems. From OWASP-driven security audits to React/Next.js architecture reviews and design system strategy, I bring clarity, speed, and long-term value.
        </Text>

        <div className="flex justify-center">
          <Button 
            variant="primary"
            size="lg"
            asChild
          >
            <Link href="/contact?utm_source=services&utm_medium=hero_cta">
              💼 Book a Consultation
            </Link>
          </Button>
        </div>
      </div>
      </div>
    </section>
  );
};

export default ServicesHero;
