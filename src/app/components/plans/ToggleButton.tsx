'use client'

import { PlanContext } from "@/app/context/PlanContext";
import { useContext, useState } from "react"
import EmptyCard from "./EmptyCard";
import AddCard from "./AddCard";
import { PlanDataType } from "@/app/TypeScript/Types";

export default function ToggleButton() {
    const { addToPlan, addToSave,toggle,updateToggle } = useContext(PlanContext);
    const [sortBy,updateSortBy] = useState<"duration" | "calories" | "rating">("duration");

    const handleToggle = (): void => {
        updateToggle(!toggle)
    }

    const sortPlans = (data: PlanDataType[]): PlanDataType[] => {
        const sortedData = [...data];

        if(sortBy === "duration"){
            sortedData.sort((a,b) => b.duration - a.duration);
        }else if(sortBy === "calories"){
            sortedData.sort((a,b) => b.caloriesBurned - a.caloriesBurned)
        }else(
            sortedData.sort((a,b) => b.rating - a.rating)
        )

        return sortedData;
    }

    const sortedAddPlans = sortPlans(addToPlan);
    const sortSavedPlans = sortPlans(addToSave);

    return (

        <div>

            <div className="flex justify-between">
                <div className="p-1 rounded-2xl py-1 border-2 border-[#232732] text-center bg-[#13161D] mt-8  w-45">
                    <button onClick={handleToggle} className={`text-sm cursor-pointer text-center text-[#8A92A0] p-2 px-3 ${toggle ? "bg-[#1F242D] rounded-2xl border-2 text-white text-center text-sm border-[#2B303D]" : ""}`}>
                        {`Today's Plan`}
                    </button>
                    <button onClick={handleToggle} className={`text-sm cursor-pointer text-[#8A92A0] text-center px-6 p-2 ${toggle ? "" : "bg-[#1F242D] rounded-2xl border-2 text-white text-center text-sm border-[#2B303D]"}`}>
                        Saved
                    </button>

                </div>

                <div className="mt-5">
                    <div className="flex items-center gap-3">
                        <p className="text-sm font-bold text-[#8a92A0]">
                            Sort
                        </p>

                        <select value={sortBy} onChange={(e) => updateSortBy(e.target.value as "duration" | "calories" | "rating")} defaultValue="Pick a browser" className="select rounded-2xl">
                            <option value={"duration"}>Duration</option>
                            <option value={"calories"}>Calories</option>
                            <option value={"rating"}>Rating</option>
                        </select>
                    </div>
                </div>
            </div>




            <div>
                {toggle ?

                    (addToPlan.length === 0 ? <EmptyCard /> : sortedAddPlans.map(item => <AddCard key={item.id} toggle={toggle} data={item}></AddCard>))
                    :
                    (addToSave.length === 0 ? <EmptyCard /> : sortSavedPlans.map(item => <AddCard key={item.id} toggle={toggle} data={item}></AddCard>))
                }
            </div>
        </div>

    )
}