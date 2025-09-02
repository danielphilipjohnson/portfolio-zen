import ServicesHero from "@/components/services/ServicesHero";
import ServiceCard from "@/components/services/ServiceCard";
import TestimonialsSection from "@/components/services/TestimonialsSection";
import ProcessSection from "@/components/services/ProcessSection";
import WhyWorkWithMe from "@/components/services/WhyWorkWithMe";
import FAQSection from "@/components/services/FAQSection";
import ConsultingPackages from "@/components/services/ConsultingPackages";
import StructuredData from "@/components/StructuredData";
import { getServicesPageJsonLd } from "@/utils/jsonLd";

const servicesData = [
  {
    icon: "🔐",
    title: "Security Audits (OWASP for Frontend)",
    description: "Modern frontends aren't \"just the UI\" — they handle authentication, tokens, and user-generated content. That makes them a prime target for security risks.",
    offerings: [
      "OWASP Top 10 mapped to your React/Next.js codebase.",
      "XSS and CSRF prevention strategies tailored to your stack.",
      "Secure authentication reviews (NextAuth, JWTs, cookies).",
      "Dependency and supply chain analysis."
    ],
    deliverable: "A security audit report with risks prioritized, actionable fixes, and architectural recommendations.",
    idealFor: "SaaS teams, fintech platforms, e-commerce apps.",
    pricing: "£1,500 per audit",
    ctaText: "👉 Book a Security Audit",
    ctaLink: "/contact?utm_source=services&utm_medium=security_audit_cta"
  },
  {
    icon: "🏗️",
    title: "System Design & Architecture Reviews",
    description: "Scaling React/Next.js apps isn't just about adding features — it's about building systems that last.",
    offerings: [
      "Architecture reviews for React Server Components, routing, and state management.",
      "Performance and caching strategies with TanStack Query & Zustand.",
      "API design reviews for Next.js API routes and backend integration.",
      "Data flow diagrams & threat modeling to surface hidden risks."
    ],
    deliverable: "A system architecture review doc with recommended patterns, diagrams, and next steps for your team.",
    idealFor: "Startups scaling fast, teams migrating legacy systems, CTOs planning technical strategy.",
    pricing: "£2,000 per review",
    ctaText: "👉 Request an Architecture Review",
    ctaLink: "/contact?utm_source=services&utm_medium=architecture_review_cta"
  },
  {
    icon: "🎨",
    title: "Design Systems & Frontend Foundations",
    description: "Design systems are more than UI kits — they're the foundation of consistent, accessible, and fast product development.",
    offerings: [
      "Scalable design systems with React, Tailwind, and Storybook.",
      "Component library audits & accessibility improvements (WCAG).",
      "Governance and coding standards for frontend teams.",
      "Documentation and onboarding materials for engineers & designers."
    ],
    deliverable: "A design system starter kit (components, tokens, docs) tailored to your team.",
    idealFor: "Product teams with inconsistent UIs, agencies needing reusability, growing engineering orgs.",
    pricing: "£2,500 for a foundational setup",
    ctaText: "👉 Build a Design System with Me",
    ctaLink: "/contact?utm_source=services&utm_medium=design_system_cta"
  }
];

export default function ServicesPage() {
  const servicesPageJsonLdData = getServicesPageJsonLd();
  
  return (
    <main>
      <StructuredData data={servicesPageJsonLdData} id="services-page-jsonld" />
      <ServicesHero />
      
      <div className="py-8 md:py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 md:space-y-8">
            {servicesData.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                offerings={service.offerings}
                deliverable={service.deliverable}
                idealFor={service.idealFor}
                pricing={service.pricing}
                ctaText={service.ctaText}
                ctaLink={service.ctaLink}
              />
            ))}
          </div>
        </div>
      </div>
      
      <TestimonialsSection />
      <ProcessSection />
      <WhyWorkWithMe />
      <FAQSection />
      <ConsultingPackages />
    </main>
  );
}
