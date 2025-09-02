import Text from "@/components/ui/Text";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

const PhilosophyClosing = () => {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto border-t border-stone-200">
      <div className="text-center">
        <Text
          as="h2"
          variant="h2"
          className="mb-8 text-stone-800 flex items-center justify-center gap-3"
        >
          🧘 Closing: The Bonsai Metaphor
        </Text>
        
        <div className="space-y-6 mb-12">
          <Text
            variant="body"
            className="text-stone-700 leading-relaxed"
          >
            A bonsai tree doesn&apos;t grow wild — it&apos;s shaped over years with discipline. Each cut is deliberate, each wire temporary, each season considered. Software is the same.
          </Text>
          
          <Text
            variant="h5"
            className="text-stone-800 font-semibold mb-4"
          >
            Bonsai coding means:
          </Text>
          
          <div className="space-y-3 max-w-2xl mx-auto">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-moss-500 rounded-full mt-3 flex-shrink-0"></div>
              <Text variant="body" className="text-stone-700 text-left">
                Prune complexity before it overwhelms.
              </Text>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-moss-500 rounded-full mt-3 flex-shrink-0"></div>
              <Text variant="body" className="text-stone-700 text-left">
                Cultivate patience in growth.
              </Text>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-moss-500 rounded-full mt-3 flex-shrink-0"></div>
              <Text variant="body" className="text-stone-700 text-left">
                Respect the nature of the web.
              </Text>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-moss-500 rounded-full mt-3 flex-shrink-0"></div>
              <Text variant="body" className="text-stone-700 text-left">
                Lead with strategy, not impulse.
              </Text>
            </div>
          </div>
          
          <div className="bg-stone-50 p-8 rounded-lg border-l-4 border-clay-500 my-8">
            <Text
              variant="quote"
              className="text-stone-700 text-lg italic"
            >
              &ldquo;The goal is not perfect code, but a system that grows well under careful hands.&rdquo;
            </Text>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            variant="primary"
            size="lg"
            asChild
          >
            <Link href="/blog">
              👉 Read my Blog
            </Link>
          </Button>
          
          <Button 
            variant="secondary"
            size="lg"
            asChild
          >
            <Link href="/security">
              👉 Explore Security Guides
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PhilosophyClosing;
