import Text from "@/components/ui/Text";

const PhilosophyIntro = () => {
  return (
    <section className="py-12 px-4 max-w-4xl mx-auto">
      <div className="mb-8">
        <Text
          as="h2"
          variant="h2"
          className="mb-6 text-stone-800 flex items-center gap-3"
        >
          🌳 Introduction: Why Philosophy Matters in Code
        </Text>
        
        <div className="space-y-6">
          <Text
            variant="body"
            className="text-stone-700 leading-relaxed"
          >
            Code is never just syntax — it&apos;s philosophy in action. The choices we make about structure, complexity, and design mirror the choices leaders and thinkers have debated for centuries. Plato asked how justice could be organized in a republic; Marcus Aurelius asked how to live with patience and discipline; Lao Tzu asked how to move with the flow of nature.
          </Text>
          
          <Text
            variant="body"
            className="text-stone-700 leading-relaxed"
          >
            I treat code the same way. My projects — from fintech dashboards to AI-powered chat flows — aren&apos;t just technical artifacts. They are living systems. Left unchecked, they sprawl like wild branches. Shaped carefully, they thrive.
          </Text>
          
          <Text
            variant="body"
            className="text-stone-700 leading-relaxed font-medium"
          >
            This is <em>bonsai coding</em>: an approach to frontend system architecture rooted in mindful minimalism, patience in process, web-native thinking, and strategic awareness.
          </Text>
        </div>
      </div>
    </section>
  );
};

export default PhilosophyIntro;
