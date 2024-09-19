import TeamMember from '@/components/team_member'
import data from '../data/team_data.json'
import tdata from '../data/teacher_data.json'

import { useState } from 'react'

export default function Team () {
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
                            <h2 className="font-bold text-brand text-center text-3xl">
                                Convenor
                            </h2>
                            <div className="mt-1 border border-brand opacity-10 mb-10"></div>
                            <div className="grid md:grid-cols-4 grid-cols-1 gap-16 mx-auto justify-center">
                                {data.filter(item => item.Committee.includes("Convenor")).map((item, index) => <TeamMember key={index} name={item.Name} position={item['Team name and position']} image={item.image} links={{
                                    ig: item['Instagram '],
                                    gh: item['github'],
                                    li: item['linkedin'],
                                }
                                } />)}
                            </div>
                            <div className="py-12 w-full"></div>
                            <h2 className="font-bold text-brand text-center text-3xl">
                                Executive Commitee
                            </h2>
                            <div className="mt-1 border border-brand opacity-10 mb-10"></div>
                            <div className="grid md:grid-cols-3 grid-cols-1 gap-16 mx-auto justify-center">
                                {data.filter(item => item.Committee.includes("Executive")).map((item, index) => <TeamMember key={index} name={item.Name} position={item['Team name and position']} image={item.image} links={{
                                    ig: item['Instagram '],
                                    gh: item['github'],
                                    li: item['linkedin'],
                                }
                                } />)}
                            </div>
                            <div className="py-12 w-full"></div>
                            <h2 className="font-bold text-brand text-center text-3xl">
                                Core Commitee
                            </h2>
                            <div className="mt-1 border border-brand opacity-10 mb-10"></div>
                            <div className="grid md:grid-cols-3 grid-cols-1 gap-16 mx-auto justify-center">
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
                            <div className="grid md:grid-cols-3 grid-cols-1 gap-16 mx-auto justify-center">
                                {tdata.map((item, index) => <TeamMember key={index} name={item.Name} position={item.position} image={item.image} />)}
                            </div>
                        </>
                    )}
            </div>
        </div>
    )
}