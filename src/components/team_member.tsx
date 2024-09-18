import { faSquareInstagram, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function TeamMember({ name, position, image, links = {
    ig: undefined,
    gh: undefined,
    li: undefined
} }: {
    name: string, position: string, image: string, links?: {
        ig: string | undefined,
        gh: string | undefined,
        li: string | undefined
    }
}) {
    return (
        <div className="mx-auto">
            <div className="mx-auto w-64 bg-ieeeorange bg-opacity-10 hover:-translate-y-6 duration-500 hover:shadow-lg hover:shadow-[#75787B] border-brand rounded-xl">
                <div className="relative overflow-hidden transition duration-500 transform rounded-lg">
                    <img src={image} alt={name} height={512} width={512} className="object-cover rounded-lg w-full aspect-[3/4]" loading="lazy" />
                    <div className="absolute inset-0 flex flex-col justify-end px-4 py-2 transition-opacity duration-300 bg-[#292929] bg-opacity-40 opacity-0  hover:opacity-100">
                        <div className="justify-center">
                            <ul className="flex flex-col items-start text-white text-base font-medium">
                                {links.ig && <li className="mb-2"><a href={links
                                    .ig} target="_blank" rel="noopener noreferrer" className="hover:text-brand flex gap-1 items-center"><FontAwesomeIcon icon={faSquareInstagram} />Instagram</a></li>}
                                {links.gh && <li className="mb-2"><a href={links
                                    .gh} target="_blank" rel="noopener noreferrer" className="hover:text-brand flex gap-1 items-center"><FontAwesomeIcon icon={faGithub} /> Github</a></li>}
                                {links.li && <li className="mb-2"><a href={links
                                    .li} target="_blank" rel="noopener noreferrer" className="hover:text-brand flex gap-1 items-center"><FontAwesomeIcon icon={faLinkedin} /> LinkedIn</a></li>}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="my-4">
                <h3 className="text-white text-xl font-bold">{name}</h3>
                <p className="text-white text-sm">{position}</p>
            </div>
        </div>
    )
}
