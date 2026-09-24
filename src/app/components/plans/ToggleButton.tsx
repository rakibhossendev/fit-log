'use client'

import { PlanContext } from "@/app/context/PlanContext";
import { useContext, useState } from "react"
import EmptyCard from "./EmptyCard";

export default function ToggleButton() {
    const [toggle, updateToggle] = useState<boolean>(true);
    const {addToPlan,addToSave} = useContext(PlanContext);

    const handleToggle = (): void => {
        updateToggle(!toggle)
    }

    return (

        <div>
            <div className="p-1 rounded-2xl py-1 border-2 border-[#232732] text-center bg-[#13161D] mt-8  w-45">
                <button onClick={handleToggle} className={`text-sm cursor-pointer text-center text-[#8A92A0] p-2 px-3 ${toggle ? "bg-[#1F242D] rounded-2xl border-2 text-white text-center text-sm border-[#2B303D]" : ""}`}>
                    {`Today's Plan`} 
                </button>

                <button onClick={handleToggle} className={`text-sm cursor-pointer text-[#8A92A0] text-center px-6 p-2 ${toggle ? "" : "bg-[#1F242D] rounded-2xl border-2 text-white text-center text-sm border-[#2B303D]"}`}> 
                    Saved
                </button>
            </div>

            <div>
                { toggle ?

                    (addToPlan.length === 0 ?  <EmptyCard/> :  <h1>Item here</h1>)
                    :
                    (addToSave.length === 0 ? <EmptyCard/> :  <h1>Item here</h1>)
                }
            </div>
        </div>

    )
}