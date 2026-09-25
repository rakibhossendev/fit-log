
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
    <div className="grid grid-cols-[auto_1fr_auto] gap-3 sm:gap-4 md:gap-6 mt-5 items-center bg-[#14171E] rounded-2xl p-3 sm:p-4">
        <div>
            <Image src={data.image} className="w-20 h-16 sm:w-28 sm:h-20 md:w-32 md:h-24 rounded-2xl object-cover" width={200} height={100} alt={`${data.name} photo`}/>
        </div>

        <div className="min-w-0 ml-1">
            <h1 className="text-base sm:text-lg md:text-xl font-bold truncate">{data.name}</h1>
            <p className="text-xs sm:text-sm my-2 sm:my-3 text-[#8A92A0] truncate">{data.equipment}</p>

            <div className="flex flex-wrap gap-3 sm:gap-4">
                <p className="flex text-xs sm:text-sm text-[#8A92A0] gap-1 items-center whitespace-nowrap">
                    <MdOutlineAccessTime className="text-[#C2F800] text-sm" />
                    {data.duration} min
                </p>
                <p className="text-xs sm:text-sm text-[#8A92A0] whitespace-nowrap">{data.caloriesBurned} kcal</p>
                <p className="flex text-xs sm:text-sm text-[#8A92A0] gap-1 items-center whitespace-nowrap">
                    <FaStar className="text-[#C2F800] text-sm" />
                    {data.rating}
                </p>
            </div>
            
        </div>

        {toggle ? <AddCardRightButton data={data} /> : <AddCardSaveButtons data={data} />}

    </div>

)
}