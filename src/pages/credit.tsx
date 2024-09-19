import TeamMember from '@/components/team_member'
import data from '../data/team_data.json'


export default function () {
    return (
        <div className="mt-20 max-w-[80rem] mx-auto py-12 px-4">
            <div className="my-16 lg:my-4 min-h-screen relative">
                <h2 className="font-bold text-brand mb-10 text-center text-5xl">Credits</h2>
                <div className="h-10"></div>
                <h2 className="font-bold text-brand text-center text-3xl">
                    Technical Team
                </h2>
                <div className="mt-1 border border-brand opacity-10 mb-10"></div>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-16 mx-auto justify-center">
                    {data.filter(item => item['Team name and position'].includes("Technical")).map((item, index) => <TeamMember key={index} name={item.Name} position={item['Team name and position']} image={item.image} links={{
                        ig: item['Instagram '],
                        gh: item['github'],
                        li: item['linkedin'],
                    }
                    } />)}
                </div>
                <div className="py-12 w-full"></div>
            </div>
        </div>
    )
}