
import { PlanDataType } from "@/app/TypeScript/Types"
import Image from "next/image"
import { FaStar } from "react-icons/fa"
import { MdOutlineAccessTime } from "react-icons/md"
import AddCardRightButton from "./PlanRightButtons";
import AddCardSaveButtons from "./AddCardSaveButtons";


interface PlanDataProps {
    data: PlanDataType;
    toggle: boolean;
}

export default function AddCard({ data,toggle}: PlanDataProps) {
    console.log(data)

    return (
        <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr_auto] gap-4 lg:gap-6 mt-5 items-center bg-[#14171E] rounded-2xl p-4">

            <div className="flex justify-center lg:justify-start">
                <Image src={data.image} className="w-28 h-24 sm:w-32 sm:h-24 rounded-2xl object-cover" width={200} height={100} alt={`${data.name} photo`}/>
            </div>

            <div className="min-w-0 lg:ml-1">
                <h1 className="text-xl font-bold truncate">{data.name}</h1>
                <p className="text-sm my-2 sm:my-3 text-[#8A92A0]">{data.equipment}</p>

                <div className="flex gap-3 sm:gap-4 flex-wrap">
                    <p className="flex text-sm text-[#8A92A0] gap-1 items-center"><MdOutlineAccessTime className="text-[#C2F800] text-sm" />{data.duration} min</p>
                    <p className="text-sm text-[#8A92A0]">{data.caloriesBurned} kcal</p>
                    <p className="flex text-sm text-[#8A92A0] gap-1 items-center"><FaStar className="text-[#C2F800] text-sm" />{data.rating}</p>
                </div>
            </div>


            { toggle ? <AddCardRightButton data={data} /> : <AddCardSaveButtons data={data}/> }
            
        </div>
    )
}