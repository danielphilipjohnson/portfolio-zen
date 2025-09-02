import Text from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const PhilosophyHero = () => {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <Text
          as="h1"
          variant="hero"
          className="mb-6 text-stone-800"
        >
          Bonsai Coding: My Philosophy of Software
        </Text>
        
        <Text
          variant="h4"
          className="mb-8 text-stone-600 max-w-3xl mx-auto font-light"
        >
          Software should grow with care, not chaos. Like pruning a bonsai tree, frontend systems require patience, restraint, and respect for their natural form. This page is a guide to my engineering philosophy, shaped by timeless wisdom from Stoicism, Taoism, and classical strategy.
        </Text>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="primary"
            size="lg"
            asChild
          >
            <Link href="/blog">
              👉 Explore my Blog
            </Link>
          </Button>
          
          <Button 
            variant="outline"
            size="lg"
            asChild
          >
            <Link href="/security">
              👉 Download Security Checklist (PDF)
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PhilosophyHero;
