import Text from "@/components/ui/Text";

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Daniel's security audit revealed critical vulnerabilities we didn't know existed. His OWASP expertise saved us from potential breaches.",
      author: "Sarah Chen",
      role: "CTO, TechScale",
      rating: 5
    },
    {
      quote: "The architecture review transformed our React app performance. Clear recommendations, expert guidance, delivered on time.",
      author: "Marcus Williams", 
      role: "Lead Developer, StartupCo",
      rating: 5
    },
    {
      quote: "Our design system went from chaos to clarity. The team velocity improved dramatically after implementing Daniel's framework.",
      author: "Emily Rodriguez",
      role: "Product Manager, FinanceApp",
      rating: 5
    }
  ];

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-stone-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <Text
            as="h2"
            variant="h2"
            className="mb-4 text-stone-800 text-2xl md:text-3xl"
          >
            ⭐ What Clients Say
          </Text>
          <Text
            variant="body"
            className="text-stone-600 max-w-2xl mx-auto"
          >
            Real results from teams who've worked with me on security audits, architecture reviews, and design systems.
          </Text>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-stone-200">
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <Text
                variant="body-sm"
                className="text-stone-700 italic mb-4 leading-relaxed"
              >
                &ldquo;{testimonial.quote}&rdquo;
              </Text>

              {/* Author */}
              <div>
                <Text
                  variant="body-sm"
                  className="text-stone-800 font-semibold"
                >
                  {testimonial.author}
                </Text>
                <Text
                  variant="body-sm"
                  className="text-stone-500 text-xs"
                >
                  {testimonial.role}
                </Text>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
