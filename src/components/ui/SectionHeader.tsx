import Text from "@/components/ui/Text";

interface EducationHeaderProps {
  title: string;
  subtitle: string;
}

const SectionHeader = ({ title, subtitle }: Readonly<EducationHeaderProps>)  => (
  <div className="mb-16 text-center">
    <Text
      variant="h2"
      weight="light"
      className="mb-3 text-stone-800"
    >
      {title}
    </Text>
    <Text
      variant="body"
      className=" text-stone-600"
    >
      {subtitle}
    </Text>
    <div className="w-16 h-px mt-8 bg-[var(--color-stone-400)]" aria-hidden="true" />
  </div>
);

export default SectionHeader; 