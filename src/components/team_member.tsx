import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faSquareGithub,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function TeamMember({
  name,
  position,
  image,
  links = {
    ig: undefined,
    gh: undefined,
    li: undefined,
  },
}: {
  name: string;
  position: string;
  image: string;
  links?: {
    ig?: string;
    gh?: string;
    li?: string;
  };
  isRound?: boolean;
}) {
  return (
    <div>
      <div
        className={`mx-auto w-64 border-2 p-2 bg-brand rounded-lg bg-opacity-10 border-brand `}
      >
        <div
          className={`relative overflow-hidden transition duration-500 transform`}
        >
          <img
            src={image}
            alt={name}
            width={256}
            height={256}
            className={`object-cover w-full rounded-xl aspect-[3/4]`}
          />
          <div
            id="grids"
            className="absolute bg-brand rounded-xl inset-0 flex flex-col justify-end px-4 py-2 transition-opacity duration-300 bg-opacity-100 opacity-0 hover:opacity-100"
          >
            <div className="justify-center">
              <ul className="flex flex-col items-start text-white text-base font-medium">
                {links.gh && (
                  <li>
                    <a href={links.gh} className="inline-flex gap-2">
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
                {links.li && (
                  <li>
                    <a href={links.li} className="inline-flex gap-2">
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
                {links.ig && (
                  <li>
                    <a href={links.ig} className="inline-flex gap-2">
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
      <div className="my-4">
        <p className="text-center text-xl font-semibold">{name}</p>
        <p className="text-center font-medium text-ieeegray">{position}</p>
      </div>
    </div>
  );
}
