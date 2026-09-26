
import { PlanDataType } from "@/app/TypeScript/Types"
import Image from "next/image"
import { FaFire, FaStar } from "react-icons/fa"
import { MdOutlineAccessTime } from "react-icons/md"
import AddCardRightButton from "./PlanRightButtons";
import AddCardSaveButtons from "./AddCardSaveButtons";


interface PlanDataProps {
    data: PlanDataType;
    toggle: boolean;
}

export default function AddCard({ data,toggle}: PlanDataProps) {


return (
    <div className="mt-5 grid grid-cols-1 gap-3 rounded-2xl bg-[#14171E] p-3 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:gap-4 sm:p-4 md:gap-6">

        
        <div className="flex min-w-0 items-center gap-3 sm:contents">

            <div className="shrink-0">
                <Image
                    src={data.image}
                    className="h-16 w-20 rounded-2xl object-cover sm:h-20 sm:w-28 md:h-24 md:w-32"
                    width={200}
                    height={100}
                    alt={`${data.name} photo`}
                />
            </div>

            <div className="min-w-0 flex-1 sm:ml-1">
                <h1 className="truncate text-base font-bold sm:text-lg md:text-xl">
                    {data.name}
                </h1>

                <p className="my-2 truncate text-xs text-[#8A92A0] sm:my-3 sm:text-sm">
                    {data.equipment}
                </p>

                <div className="flex flex-wrap gap-x-3 gap-y-1 sm:gap-x-4">
                    <p className="flex items-center gap-1 whitespace-nowrap text-xs text-[#8A92A0] sm:text-sm">
                        <MdOutlineAccessTime className="text-sm text-[#C2F800]" />
                        {data.duration} min
                    </p>

                    <p className="flex items-center gap-2 whitespace-nowrap text-xs text-[#8A92A0] sm:text-sm">
                       <FaFire className="text-sm text-[#C2F800]" /> {data.caloriesBurned} kcal
                    </p>

                    <p className="flex items-center gap-1 whitespace-nowrap text-xs text-[#8A92A0] sm:text-sm">
                        <FaStar className="text-sm text-[#C2F800]" />
                        {data.rating}
                    </p>
                </div>
            </div>

        </div>

        {/* Buttons */}
        <div className="w-full sm:w-auto">
            {toggle ? (
                <AddCardRightButton data={data} />
            ) : (
                <AddCardSaveButtons data={data} />
            )}
        </div>
    </div>
)

}