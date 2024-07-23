import Accordion from "@/components/accordian";
import Title from "@/components/title";

const Objectives = () => {
  return (
    <div className="">
      <Title title="Objectives" />
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

export default Objectives;
