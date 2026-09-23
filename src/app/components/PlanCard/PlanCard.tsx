import { PlanDataType } from "@/app/TypeScript/Types"
import Image from "next/image"
import { FaStar } from "react-icons/fa"
import { MdOutlineAccessTime } from "react-icons/md"

interface PlanCardDataProps {
    data: PlanDataType
}

export default function PlanCard({ data }: PlanCardDataProps) {
    return (

    <div className="card shadow-md bg-[#15171D] cursor-pointer border-[#222630] border-2 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
       
        <figure className="overflow-hidden">
            <Image src={data.image} width={430} height={10} className="h-60 w-full object-cover transition-transform duration-500 hover:scale-105" alt={`${data.image} photo`}/>
        </figure>

        <div className="card-body">
            <div className="flex gap-3 flex-wrap">
                {data.muscleGroups.map((item, index) =>
                    <ul className="flex w-fit gap-3 py-0.5 px-3 text-black bg-[#C8F800] rounded-2xl" key={index}>
                        <li className="font-bold">{item}</li>
                    </ul>
                )}
            </div>

            <h1 className="text-2xl font-bold">{data.name}</h1>
            <p className="text-sm">{data.equipment}</p>
            <hr className="text-[#20242E]" />

            <div className="flex gap-4 mt-3">
                <p className="flex gap-2"><MdOutlineAccessTime />{data.duration} min</p>
                <p>{data.caloriesBurned}</p>
                <p className="flex gap-2"> <FaStar />{data.rating}
                </p>
            </div>
            
        </div>

    </div>

    )
}