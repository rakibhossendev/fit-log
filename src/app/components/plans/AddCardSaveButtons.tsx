'use client'

import { PlanContext } from "@/app/context/PlanContext";
import { PlanDataType } from "@/app/TypeScript/Types";
import Link from "next/link";
import { useContext } from "react";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";

interface SavaDataProps {
    data: PlanDataType
}

export default function AddCardSaveButtons({ data }: SavaDataProps) {
    const { addToSave, updateAddToSave } = useContext(PlanContext);

    const handleRemoveData = (): void => {
        const remaining = addToSave.filter(item => item.id !== data.id);
        updateAddToSave(remaining)
        toast.success(`${data.name} wad removed successfully`)
    }

    return (
        <div className="flex flex-wrap lg:flex-nowrap justify-center lg:justify-end items-center gap-2 w-full lg:w-auto">
            <Link href={`/home/${data.id}`}>
                <button className="font-bold cursor-pointer border-2 border-[#374151] text-sm py-2 px-3 sm:px-4 rounded-2xl">
                    View Details
                </button>
            </Link>
            <button onClick={handleRemoveData} className="mx-1 font-bold text-xl p-2 cursor-pointer">
                <RxCross2 className="text-center" />
            </button>
        </div>
    )
}