import Text from "@/components/ui/Text";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Discovery Call",
      description: "Free 30-minute consultation to understand your needs, challenges, and goals.",
      duration: "30 minutes"
    },
    {
      number: "02", 
      title: "Proposal & Planning",
      description: "Detailed scope, timeline, and approach tailored to your specific situation.",
      duration: "2-3 days"
    },
    {
      number: "03",
      title: "Deep Dive Analysis",
      description: "Thorough audit, review, or foundation work using industry best practices.",
      duration: "1-2 weeks"
    },
    {
      number: "04",
      title: "Report & Recommendations",
      description: "Comprehensive documentation with prioritized action items and implementation guidance.",
      duration: "2-3 days"
    },
    {
      number: "05",
      title: "Follow-up Support",
      description: "30 days of email support to help with implementation questions.",
      duration: "30 days"
    }
  ];

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Text
            as="h2"
            variant="h2"
            className="mb-4 text-stone-800 text-2xl md:text-3xl"
          >
            🛠️ How I Work
          </Text>
          <Text
            variant="body"
            className="text-stone-600 max-w-2xl mx-auto"
          >
            A proven process that delivers results without disrupting your team&apos;s workflow.
          </Text>
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6 items-start">
              {/* Step Number */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-moss-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {step.number}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-px h-16 bg-stone-200 ml-6 mt-4"></div>
                )}
              </div>

              {/* Step Content */}
              <div className="flex-1 pt-1">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <Text
                    as="h3"
                    variant="h6"
                    className="text-stone-800 font-semibold"
                  >
                    {step.title}
                  </Text>
                  <div className="bg-stone-100 px-3 py-1 rounded-full">
                    <Text
                      variant="body-sm"
                      className="text-stone-600 text-xs font-medium"
                    >
                      {step.duration}
                    </Text>
                  </div>
                </div>
                <Text
                  variant="body-sm"
                  className="text-stone-700 leading-relaxed"
                >
                  {step.description}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
