import Title from "@/components/title";
import contact from "@/data/contact.json";
const Contact = () => {
  return (
    <>
      <Title title="Contact Us" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative bg-brand/10 hover:bg-transparent duration-300 border-2 border-brand rounded-md lg:h-auto md:aspect-auto aspect-[2/1]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.877283914117!2d75.56265937558182!3d26.84385517668822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4850e05bee9b%3A0x1b8d67402d4eb863!2sManipal%20University%20Jaipur!5e0!3m2!1sen!2sin!4v1694255447850!5m2!1sen!2sin"
            className="absolute p-2 left-0 top-0 h-full w-full rounded-lg"
            allowFullScreen
          ></iframe>
        </div>
        <div className="text-center grid grid-cols-2 gap-4 text-brand">
            {contact.contact.map((contact) => (
              <div className="flex border-2 border-brand bg-brand/10 hover:bg-transparent duration-300 rounded-md aspect-square lg:aspect-[2/1]">
                <ul className="m-auto">
                  <li className="text-xl font-semibold">{contact.name}</li>
                  <li className="font-medium hover:text-foreground duration-300">
                    <a href={`tel:${contact.number}`}>{contact.number}</a>
                  </li>
                  <li>({contact.position})</li>
                </ul>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Contact;
