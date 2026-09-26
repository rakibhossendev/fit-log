'use client'
import { PlanContext } from "@/app/context/PlanContext";
import { PlanDataType } from "@/app/TypeScript/Types";
import { useContext, useState } from "react";
import { FaRegCalendarPlus } from "react-icons/fa";
import { IoMdSave } from "react-icons/io";
import { toast } from "react-toastify";

interface ButtonDataProps{
    data: PlanDataType
}

export default function DetailsButton({data}: ButtonDataProps) {
    const {addToPlan,updateAddToPlan,addToSave,updateAddToSave} = useContext(PlanContext);
    const [addPlanStatus,updateAddPlanStatus] = useState<boolean>(true);
    const [saveStatus,updateSaveStatus] = useState<boolean>(true);
    
    const handleAddToPlan = () => {
        const exists = addToPlan.find(item => item.id === data.id);
        if(exists){
            toast.info("Item is already exists in your plan.");
            return
        }
        updateAddToPlan([...addToPlan,data])
        localStorage.setItem("planData",JSON.stringify([...addToPlan,data]));
        updateAddPlanStatus(!addPlanStatus);
        toast.success("Plan added successfully.")
    }

    const handleAddToSave = () => {
        const exists = addToSave.find(item => item.id === data.id);
        if(exists){
            toast.info("Item is already saved.");
            return
        }
        
        const newData = [...addToSave,data]
        updateAddToSave(newData);
        localStorage.setItem("savedPlans",JSON.stringify(newData));
        updateSaveStatus(!saveStatus);
        toast.success("Plan saved successfully")
    }


    return (
        <div className="my-2 flex items-center gap-3">

            {
                addPlanStatus ?
                <button onClick={handleAddToPlan} className=" flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#CCFF00] text-[#0F1115] font-bold text-sm cursor-pointer transition-all duration-300 hover:bg-[#B8E600] hover:scale-[1.02] active:scale-95 shadow-md">
                    <FaRegCalendarPlus className="text-lg" />
                    {`Add to today's plan`}
                </button>
                :
                <h2 className="gap-2 px-5 py-3 rounded-xl bg-[#CCFF00] text-[#0F1115] font-bold text-sm cursor-not-allowed shadow-md">Added To Plan</h2>
            }
            
            {
                saveStatus ?
                    <button onClick={handleAddToSave} className="flex mx-4 items-center justify-center gap-2 px-5 py-3 rounded-xl text-[#E5E7EB] border-2 border-[#374151] font-bold text-sm cursor-pointer transition-all duration-300 hover:bg-[#1E2330] hover:border-[#4B5563] hover:scale-[1.02] active:scale-95">
                        <IoMdSave className="text-lg" />
                        Save for later
                    </button>
                :
                <h2 className="gap-2 px-5 py-3 rounded-xl  border-[#374151] text-[#E5E7EB] border-2 font-bold text-sm cursor-not-allowed shadow-md">Plan Saved</h2>
            }
            
        </div>
    )
}