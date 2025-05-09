import Text from "@/components/ui/Text"

const ContactQuote = () => {
  return (
    <div className="max-w-2xl mx-auto text-center ">
      <Text
        variant="quote"
        className="text-[color:var(--color-stone-800)] border-[color:var(--color-stone-200)]"
      >
        &quot;The most basic and powerful way to connect to another person is to listen. Just listen.&quot;
      </Text>
      <Text
        variant="caption"
        className="mt-2 text-[color:var(--color-stone-570)]"
      >
        — Rachel Naomi Remen
      </Text>
    </div>
  );
};

export default ContactQuote; 