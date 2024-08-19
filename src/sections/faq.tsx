// eslint-disable-next-line no-unused-vars
import Accordion from "@/components/accordian";
import Title from "@/components/title";

const Faq = () => {
	return (
		<div className="mb-4">
			<Title title="FAQ"/>
			<div className="space-y-4">
				<Accordion
					title="Is Startup Weekend Jaipur for me?"
					answer="If you have a groundbreaking idea, this is your chance to bring it to life!
If you’re curious about what it takes to launch your own business, you will be able to discover and curate your own entrepreneurial journey here."
				/>
				<Accordion
					title="Can I pitch my existing business?"
					answer="No."
				/>
				<Accordion
					title="Do I need to pitch an idea to participate?"
					answer="No, you don’t need to, but we strongly encourage pitching an idea as it might be a learning lesson towards better oratory."
				/>
				<Accordion
					title="Do I have to participate in all three days?"
					answer="Yes, apart from Organizers, selected Coaches, Speakers, and press, everyone attending the event is expected to participate all three days."
				/>
				<Accordion
					title="Do I need a team?"
					answer="No, in the spirit of Startup Weekend culture you’re supposed to meet people at SWJ and form a new team to compete with."
				/>
			</div>
		</div>
	);
};

export default Faq;