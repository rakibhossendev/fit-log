'use client'
import { PlanContext } from "@/app/context/PlanContext";
import { PlanDataType } from "@/app/TypeScript/Types";
import Link from "next/link";
import { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";

interface PlanButtonDataProps{
    data: PlanDataType
}

export default function AddCardRightButton({data}: PlanButtonDataProps) {
    const {addToPlan,updateAddToPlan} = useContext(PlanContext);

    const handlePlanData = (): void => {
        const remaining = addToPlan.filter(item => item.id !== data.id);
        updateAddToPlan(remaining);
        toast.success(`${data.name} was removed successfully`)
    }

    return (
        <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-end items-center gap-2">
            <Link href={`/home/${data.id}`}>
            <button className="font-bold cursor-pointer  border-2 border-[#374151] text-sm py-2 px-3 sm:px-4 rounded-2xl">
                View Details
            </button>
            </Link>

            <button  className="font-bold cursor-pointer  text-sm py-2 px-3 sm:px-4 rounded-2xl bg-[#CCFF00] text-black">
                Mark as Done
            </button>
            <button onClick={handlePlanData}  className="mx-1 font-bold  cursor-pointer text-xl p-2">
                <RxCross2 className="text-center" />
            </button>
        </div>
    )
}