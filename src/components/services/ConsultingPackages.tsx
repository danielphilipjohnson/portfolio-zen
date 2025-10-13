import Text from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const ConsultingPackages = () => {
  const packages = [
    {
      title: "One-off Audit",
      description: "Fixed-scope deep dive (security or architecture)."
    },
    {
      title: "Advisory Retainer",
      description: "Monthly consulting for ongoing support."
    },
    {
      title: "Team Enablement",
      description: "Workshops on security, state management, or design systems."
    }
  ];

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-stone-50 rounded-lg p-6 md:p-8">
      <div className="text-center">
        <Text
          as="h2"
          variant="h2"
          className="mb-6 md:mb-8 text-stone-800 text-2xl md:text-3xl"
        >
          💡 Consulting Packages
        </Text>
        
        <div className="grid md:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12">
          {packages.map((pkg, index) => (
            <div key={index} className="bg-white p-4 md:p-6 rounded-lg border border-stone-200">
              <Text
                as="h3"
                variant="h6"
                className="mb-2 md:mb-3 text-moss-600 font-semibold text-base md:text-lg"
              >
                {pkg.title}
              </Text>
              <Text
                variant="body-sm"
                className="text-stone-700 text-sm md:text-base"
              >
                {pkg.description}
              </Text>
            </div>
          ))}
        </div>

        <Button 
          variant="primary"
          size="lg"
          asChild
        >
          <Link href="/contact?utm_source=services&utm_medium=packages_cta">
            👉 Let&apos;s Talk About Your Project
          </Link>
        </Button>
      </div>
      </div>
    </section>
  );
};

export default ConsultingPackages;
