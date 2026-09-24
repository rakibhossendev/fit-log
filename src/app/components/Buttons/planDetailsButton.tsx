import { FaRegCalendarPlus } from "react-icons/fa";
import { IoMdSave } from "react-icons/io";

export default function DetailsButton() {


    return (
        <div className="my-2 flex items-center gap-3">
            <button className=" flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#CCFF00] text-[#0F1115] font-bold text-sm cursor-pointer transition-all duration-300 hover:bg-[#B8E600] hover:scale-[1.02] active:scale-95 shadow-md">
                <FaRegCalendarPlus className="text-lg" />
                {`Add to today's plan`}
            </button>

            <button className="flex mx-4 items-center justify-center gap-2 px-5 py-3 rounded-xl text-[#E5E7EB] border-2 border-[#374151] font-bold text-sm cursor-pointer transition-all duration-300 hover:bg-[#1E2330] hover:border-[#4B5563] hover:scale-[1.02] active:scale-95">
                <IoMdSave className="text-lg" />
                Save for later
            </button>
        </div>
    )
}