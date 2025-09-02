import Text from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  offerings: string[];
  deliverable: string;
  idealFor: string;
  pricing: string;
  ctaText: string;
  ctaLink: string;
}

const ServiceCard = ({
  icon,
  title,
  description,
  offerings,
  deliverable,
  idealFor,
  pricing,
  ctaText,
  ctaLink
}: ServiceCardProps) => {
  return (
    <div className="bg-white border border-stone-200 rounded-lg p-4 md:p-6 lg:p-8 shadow-sm hover:shadow-md transition-all hover:scale-105 max-w-4xl mx-auto relative">
      {/* Pricing Header */}
      <div className="text-center mb-6 pb-6 border-b border-stone-100">
        <div className="text-4xl mb-3">{icon}</div>
        <Text
          as="h2"
          variant="h4"
          className="mb-3 text-stone-800 font-bold"
        >
          {title}
        </Text>
        <Text
          variant="h2"
          className="text-moss-600 font-bold mb-2"
        >
          {pricing}
        </Text>
        <Text
          variant="body-sm"
          className="text-stone-500 font-medium"
        >
          Starting price
        </Text>
      </div>

      {/* Description */}
      <div className="mb-6">
        <Text
          variant="body"
          className="text-stone-700 leading-relaxed text-center"
        >
          {description}
        </Text>
      </div>

      {/* Features Included */}
      <div className="mb-6">
        <Text
          as="h3"
          variant="h6"
          className="mb-4 text-stone-800 font-semibold text-center"
        >
          What's Included:
        </Text>
        <ul className="space-y-3">
          {offerings.map((offering, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-5 h-5 bg-moss-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-moss-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <Text variant="body-sm" className="text-stone-700 text-sm">
                {offering}
              </Text>
            </li>
          ))}
        </ul>
      </div>

      {/* Details */}
      <div className="mb-6 pt-6 border-t border-stone-100">
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          <div>
            <Text
              as="h4"
              variant="body-sm"
              className="mb-2 text-stone-800 font-semibold text-sm"
            >
              📋 Deliverable:
            </Text>
            <Text variant="body-sm" className="text-stone-600 text-xs">
              {deliverable}
            </Text>
          </div>
          <div>
            <Text
              as="h4"
              variant="body-sm"
              className="mb-2 text-stone-800 font-semibold text-sm"
            >
              🎯 Perfect for:
            </Text>
            <Text variant="body-sm" className="text-stone-600 text-xs">
              {idealFor}
            </Text>
          </div>
        </div>
      </div>

      {/* CTA */}
      <Button 
        variant="primary"
        size="lg"
        asChild
        className="w-full text-sm md:text-base font-semibold"
      >
        <Link href={ctaLink}>
          {ctaText}
        </Link>
      </Button>
    </div>
  );
};

export default ServiceCard;
