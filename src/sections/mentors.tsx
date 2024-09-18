import Title from "@/components/title";
import AboutCard from "@/components/about-card.tsx";

const Mentors = () => {
  return (
    <div id="mentors">
      <Title title="Mentors" />
      <p className="text-lg text-center font-medium mb-4">
        Meet our selection of mentors who are industry experts in their
        respective field. They’ll be with you to help you find your way through
        tough challenges. We hope you learn from their extensive experience.
      </p>
      <div className="flex flex-wrap gap-4 justify-around">
        <AboutCard
          github={"https://github.com/pujan-modha"}
          image={"https://github.com/pujan-modha.png"}
          name={"Pujan Modha"}
          position={"Full Stack Web Developer"}
          instagram={"https://www.instagram.com/pujan_modha/"}
          linkedin={"https://www.linkedin.com/in/pujan-modha/"}
        />
        <AboutCard
          github={"https://github.com/pujan-modha"}
          image={"https://github.com/pujan-modha.png"}
          name={"Pujan Modha"}
          position={"Full Stack Web Developer"}
          instagram={"https://www.instagram.com/pujan_modha/"}
          linkedin={"https://www.linkedin.com/in/pujan-modha/"}
        />
        <AboutCard
          github={"https://github.com/pujan-modha"}
          image={"https://github.com/pujan-modha.png"}
          name={"Pujan Modha"}
          position={"Full Stack Web Developer"}
          instagram={"https://www.instagram.com/pujan_modha/"}
          linkedin={"https://www.linkedin.com/in/pujan-modha/"}
        />
        <AboutCard
          github={"https://github.com/pujan-modha"}
          image={"https://github.com/pujan-modha.png"}
          name={"Pujan Modha"}
          position={"Full Stack Web Developer"}
          instagram={"https://www.instagram.com/pujan_modha/"}
          linkedin={"https://www.linkedin.com/in/pujan-modha/"}
        />
      </div>
    </div>
  );
};

export default Mentors;