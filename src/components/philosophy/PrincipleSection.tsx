import Text from "@/components/ui/Text";

interface PhilosophicalRoot {
  source: string;
  quote: string;
}

interface PrincipleSectionProps {
  emoji: string;
  title: string;
  definition: string;
  caseTitle: string;
  caseDescription: string;
  philosophicalRoots: PhilosophicalRoot[];
  takeaway: string;
}

const PrincipleSection = ({
  emoji,
  title,
  definition,
  caseTitle,
  caseDescription,
  philosophicalRoots,
  takeaway
}: PrincipleSectionProps) => {
  return (
    <section className="py-12 px-4 max-w-4xl mx-auto border-t border-stone-200">
      <div className="mb-8">
        <Text
          as="h2"
          variant="h2"
          className="mb-8 text-stone-800 flex items-center gap-3"
        >
          {emoji} {title}
        </Text>
        
        <div className="space-y-8">
          {/* Definition */}
          <div>
            <Text
              as="h3"
              variant="h5"
              className="mb-3 text-moss-600 font-semibold"
            >
              Definition:
            </Text>
            <Text
              variant="body"
              className="text-stone-700 leading-relaxed"
            >
              {definition}
            </Text>
          </div>

          {/* Case Example */}
          <div>
            <Text
              as="h3"
              variant="h5"
              className="mb-3 text-moss-600 font-semibold"
            >
              {caseTitle}
            </Text>
            <Text
              variant="body"
              className="text-stone-700 leading-relaxed"
            >
              {caseDescription}
            </Text>
          </div>

          {/* Philosophical Roots */}
          <div>
            <Text
              as="h3"
              variant="h5"
              className="mb-4 text-moss-600 font-semibold"
            >
              Philosophical roots:
            </Text>
            <div className="space-y-3 ml-4">
              {philosophicalRoots.map((root, index) => (
                <div key={index}>
                  <Text
                    variant="body-sm"
                    className="text-stone-800 font-medium"
                  >
                    {root.source}:
                  </Text>
                  <Text
                    variant="body-sm"
                    className="text-stone-600 italic ml-2"
                  >
                    &ldquo;{root.quote}&rdquo;
                  </Text>
                </div>
              ))}
            </div>
          </div>

          {/* Takeaway */}
          <div className="bg-stone-50 p-6 rounded-lg border-l-4 border-moss-500">
            <Text
              variant="body"
              className="text-stone-700 font-medium"
            >
              👉 {takeaway}
            </Text>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrincipleSection;
