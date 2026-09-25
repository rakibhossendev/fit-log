import DetailsButton from "@/app/components/Buttons/planDetailsButton";
import { PlanDataType } from "@/app/TypeScript/Types";
import Image from "next/image";

export default async function PlanDetails({ params }: { params: Promise<{ homeId: string }> }) {
    const { homeId } = await params;

    const response = await fetch(`https://api.abcz.workers.dev/api/fitlog/${homeId}`,{cache: "force-cache"});
    const data: PlanDataType = await response.json();

    return (
       <section className="mt-6 md:mt-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 justify-center items-start gap-6 md:gap-8 px-4">
        
        <div className="mt-0 py-2 md:py-4">
            <Image className="h-auto w-full max-h-full object-cover rounded-2xl" width={300} height={300} alt={`${data.name} photo`} src={data.image}/>
        </div>

        <div className="w-full">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold py-2 wrap-words">{data.name}</h1>
            <p className="text-base md:text-lg font-light py-2 leading-relaxed text-[#8A92A0]">{data.description}</p>

            <div className="flex gap-3 flex-wrap py-2">
                {data.muscleGroups.map((item, index) =>
                    <ul className="flex w-fit gap-3 py-0.5 px-3 text-black bg-[#C8F800] rounded-2xl" key={index}>
                        <li className="font-bold">{item}</li>
                    </ul>
                )}
            </div>

            <div className="grid grid-cols-2 bg-[#151922] p-3 md:p-4 rounded-2xl my-4 md:my-5 border-2 border-[#1E2330]">
                
                <ul className="px-1 md:px-2">
                    <li className="text-sm md:text-md font-extrabold border-b-2 border-[#1E2330] py-2 text-[#9CA3AF]">EQUIPMENT</li> 
                    <li className="text-sm md:text-md font-extrabold border-b-2 border-[#1E2330] py-2 text-[#9CA3AF]">DIFFICULTY</li>
                    <li className="text-sm md:text-md font-extrabold border-b-2 border-[#1E2330] py-2 text-[#9CA3AF]">SETS</li>
                    <li className="text-sm md:text-md font-extrabold border-b-2 border-[#1E2330] py-2 text-[#9CA3AF]">REPS</li>
                    <li className="text-sm md:text-md font-extrabold border-b-2 border-[#1E2330] py-2 text-[#9CA3AF]">DURATION</li>
                    <li className="text-sm md:text-md font-extrabold border-b-2 border-[#1E2330] py-2 text-[#9CA3AF]">CALORIES</li>
                    <li className="text-sm md:text-md font-extrabold py-2 text-[#9CA3AF]">RATING</li>
                </ul>

                <ul className="px-1 md:px-2 text-right">
                    <li className="text-sm md:text-md font-extrabold border-b-2 border-[#1E2330] py-2 text-[#9CA3AF]">{data.equipment}</li>
                    <li className="text-sm md:text-md font-extrabold border-b-2 border-[#1E2330] py-2 text-[#9CA3AF]">{data.difficulty}</li>
                    <li className="text-sm md:text-md font-extrabold border-b-2 border-[#1E2330] py-2 text-[#9CA3AF]">{data.sets}</li>
                    <li className="text-sm md:text-md font-extrabold border-b-2 border-[#1E2330] py-2 text-[#9CA3AF]">{data.reps}</li>
                    <li className="text-sm md:text-md font-extrabold border-b-2 border-[#1E2330] py-2 text-[#9CA3AF]">{data.duration} min</li>
                    <li className="text-sm md:text-md font-extrabold border-b-2 border-[#1E2330] py-2 text-[#9CA3AF]">{data.caloriesBurned} kcal</li>
                    <li className="text-sm md:text-md font-extrabold py-2 text-[#9CA3AF]">{data.rating}</li>
                </ul>
            </div>


            <h1 className="font-bold text-xl py-2 my-3">INSTRUCTION</h1>
            <ul>
                {data.instructions.map((item, index) => <li className="py-1 text-[#9CA3AF] leading-relaxed" key={index}>{`${index + 1}. ${item}`}</li>)}
            </ul>

            <DetailsButton data={data} />
        </div>
    </div>
</section>

    )
}