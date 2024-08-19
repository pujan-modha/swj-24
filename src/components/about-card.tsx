import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareGithub,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

const AboutCard = ({
  name,
  position,
  linkedin,
  github,
  instagram,
  image,
}: {
  name: string;
  position: string;
  linkedin: string;
  github: string;
  instagram: string;
  image: string;
}) => {
  return (
    <div>
      <div className="group mx-auto w-64 border-2 p-2 bg-brand/10 border-brand rounded-lg">
        <div className="relative overflow-hidden transition duration-500 transform rounded-xl">
          <img
            src={image}
            alt={name}
            className="object-cover rounded-xl w-full aspect-[3/4]"
          />
          <div className="absolute inset-0 flex flex-col justify-end px-4 py-2 bg-brand transition-opacity duration-500 bg-opacity-100 opacity-0 hover:opacity-100">
            <div className="justify-center">
              <ul className="hidden group-hover:flex group-active:flex group-focus:flex group flex-col transition-opacity items-start text-background text-base font-medium">
                {github && (
                  <li>
                    <a href={github} className="inline-flex gap-2">
                      <FontAwesomeIcon icon={faSquareGithub} size="xl" />
                      <p className="inline-flex hover:underline hover:underline-offset-2">
                        GitHub
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </p>
                    </a>
                  </li>
                )}
                {linkedin && (
                  <li>
                    <a href={linkedin} className="inline-flex gap-2">
                      <FontAwesomeIcon icon={faLinkedin} size="xl" />
                      <p className="inline-flex hover:underline hover:underline-offset-2">
                        Linkedin
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </p>
                    </a>
                  </li>
                )}
                {instagram && (
                  <li>
                    <a href={instagram} className="inline-flex gap-2">
                      <FontAwesomeIcon icon={faSquareInstagram} size="xl" />
                      <p className="inline-flex hover:underline hover:underline-offset-2">
                        Instagram
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-4 h-4"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </span>
                      </p>
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="my-4 text-center">
        <p className="text-xl font-semibold text-brand">{name}</p>
        {position && <p className="font-medium">{position}</p>}
      </div>
    </div>
  );
};
export default AboutCard;