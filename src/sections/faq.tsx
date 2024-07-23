// eslint-disable-next-line no-unused-vars
import Accordion from "@/components/accordian";
import Title from "@/components/title";

const Faq = () => {
  return (
    <div className="mb-4">
      <Title title="FAQ" />
      <div className="space-y-4">
        <Accordion
          title="Do you prefer Android or iOS"
          answer="I like to use iOS products"
        />
        <Accordion
          title="Do you prefer writing CSS or Tailwind?"
          answer="I like to use Tailwind"
        />
        <Accordion
          title="Firebase or Supabase?"
          answer="I am using Supabase!"
        />
      </div>
    </div>
  );
};

export default Faq;
