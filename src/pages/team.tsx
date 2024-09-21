import TeamMember from '@/components/team_member'
import data from '../data/team_data.json'
import tdata from '../data/teacher_data.json'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useState } from 'react'

export default function Team () {
    AOS.init({
        // Global settings:
        disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
        startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
        initClassName: 'aos-init', // class applied after initialization
        animatedClassName: 'aos-animate', // class applied on animation
        useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
        disableMutationObserver: false, // disables automatic mutations' detections (advanced)
        debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
        throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
        // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
        offset: 240, // offset (in px) from the original trigger point
        delay: 0, // values from 0 to 3000, with step 50ms
        duration: 1000, // values from 0 to 3000, with step 50ms
        easing: 'ease', // default easing for AOS animations
        once: false, // whether animation should happen only once - while scrolling down
        mirror: false, // whether elements should animate out while scrolling past them
        anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });
    const [isStudent, setIsStudent] = useState(true)
    return (
        <div className="mt-20 max-w-[80rem] mx-auto py-12 px-4">
            <div className="my-16 lg:my-4 min-h-screen relative">
                <h2 className="font-bold text-brand mb-10 text-center text-5xl">Team</h2>
                <div className="mx-auto flex items-center justify-center">
                    <div onClick={() => setIsStudent(true)} className={`p-2 font-semibold rounded hover:underline cursor-pointer ${isStudent ? 'bg-brand' : ''}`}>Students</div>
                    <div onClick={() => setIsStudent(false)} className={`p-2 font-semibold rounded hover:underline cursor-pointer ${!isStudent ? 'bg-brand' : ''}`}>Teachers</div>
                </div>
                <div className="h-10"></div>
                {
                    isStudent ? (
                        <>
                            <h2 className="font-bold text-brand text-center text-3xl" >
                                Convenor
                            </h2>
                            <div className="mt-1 border border-brand opacity-10 mb-10"></div>
                            <div className="grid md:grid-cols-4 grid-cols-1 gap-16 mx-auto justify-center" data-aos="fade-up">
                                {data.filter(item => item.Committee.includes("Convenor")).map((item, index) => <TeamMember key={index} name={item.Name} position={item['Team name and position']} image={item.image} links={{
                                    ig: item['Instagram '],
                                    gh: item['github'],
                                    li: item['linkedin'],
                                }
                                } />)}
                            </div>
                            <div className="py-12 w-full"></div>
                            <h2 className="font-bold text-brand text-center text-3xl" >
                                Executive Commitee
                            </h2>
                            <div className="mt-1 border border-brand opacity-10 mb-10"></div>
                            <div className="grid md:grid-cols-3 grid-cols-1 gap-16 mx-auto justify-center" data-aos="fade-up">
                                {data.filter(item => item.Committee.includes("Executive")).map((item, index) => <TeamMember key={index} name={item.Name} position={item['Team name and position']} image={item.image} links={{
                                    ig: item['Instagram '],
                                    gh: item['github'],
                                    li: item['linkedin'],
                                }
                                } />)}
                            </div>
                            <div className="py-12 w-full"></div>
                            <h2 className="font-bold text-brand text-center text-3xl" >
                                Core Commitee
                            </h2>
                            <div className="mt-1 border border-brand opacity-10 mb-10"></div>
                            <div className="grid md:grid-cols-3 grid-cols-1 gap-16 mx-auto justify-center" data-aos="fade-up">
                                {data.filter(item => item.Committee.includes("Core")).map((item, index) => <TeamMember key={index} name={item.Name} position={item['Team name and position']} image={item.image}
                                    links={{
                                        ig: item['Instagram '],
                                        gh: item['github'],
                                        li: item['linkedin'],
                                    }
                                    } />)}
                            </div>
                        </>) : (
                        <>
                            <div className="grid md:grid-cols-3 grid-cols-1 gap-16 mx-auto justify-center" data-aos="fade-up">
                                {tdata.map((item, index) => <TeamMember key={index} name={item.Name} position={item.position} image={item.image} />)}
                            </div>
                        </>
                    )}
            </div>
        </div>
    )
}