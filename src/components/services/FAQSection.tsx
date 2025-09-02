import Text from "@/components/ui/Text";

const FAQSection = () => {
  const faqs = [
    {
      question: "How quickly can you start a project?",
      answer: "Most projects can start within 1-2 weeks. I maintain a small client roster to ensure quality attention for each engagement."
    },
    {
      question: "Do you work with startups or only established companies?", 
      answer: "I work with both! Startups benefit from getting security and architecture right from the start, while established companies often need audits and modernization."
    },
    {
      question: "Can you work with our existing development team?",
      answer: "Absolutely. I collaborate closely with your developers, providing training and knowledge transfer as part of every engagement."
    },
    {
      question: "What if we need ongoing support after the project?",
      answer: "I offer retainer arrangements for ongoing advisory support, code reviews, and architecture guidance as your team scales."
    },
    {
      question: "Do you sign NDAs and work with sensitive data?",
      answer: "Yes, I regularly work under NDAs with fintech, healthcare, and enterprise clients. All work follows strict confidentiality protocols."
    },
    {
      question: "What's included in the follow-up support?",
      answer: "30 days of email support for implementation questions, clarifications on recommendations, and guidance on prioritizing fixes."
    }
  ];

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-stone-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <Text
            as="h2"
            variant="h2"
            className="mb-4 text-stone-800 text-2xl md:text-3xl"
          >
            ❓ Frequently Asked Questions
          </Text>
          <Text
            variant="body"
            className="text-stone-600 max-w-2xl mx-auto"
          >
            Common questions about working together on your React/Next.js projects.
          </Text>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-stone-200">
              <Text
                as="h3"
                variant="h6"
                className="mb-3 text-stone-800 font-semibold"
              >
                {faq.question}
              </Text>
              <Text
                variant="body-sm"
                className="text-stone-700 leading-relaxed"
              >
                {faq.answer}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
