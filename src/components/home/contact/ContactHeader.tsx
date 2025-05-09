import Text from "@/components/ui/Text"

const ContactHeader = () => {
  return (
    <div className="max-w-2xl mx-auto mb-16 text-center">
      <Text
        variant="h2"
        as="h2"
        weight="light"
        className="mb-3 text-[color:var(--color-stone-800)]"
      >
        Let&apos;s Connect
      </Text>
      <Text
        variant="body"
        className="text-[color:var(--color-stone-800)]"
      >
        I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
      </Text>
    </div>
  );
};

export default ContactHeader; 