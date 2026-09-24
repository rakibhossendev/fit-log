'use client'
import { PlanContext } from "@/app/context/PlanContext"
import { useContext } from "react"

export default function MatrixSummaryCard() {
    const {addToPlan} = useContext(PlanContext);
    
    const minutes = addToPlan.reduce((accumulator,item) => accumulator+ item.duration ,0);
    const calories = addToPlan.reduce((accumulator,item) => accumulator + item.caloriesBurned,0)

    return (
        <div className="mt-5 grid grid-cols-3 items-center justify-center p-8 border-2 border-[#232732] rounded-2xl bg-[#13161D]">
            <div className="text-left px-2 mt-2 ">
                <p className="font-light text-[#8A92A0]">Exercises</p>
                <h2 className="font-bold text-2xl text-[#CCFF00]">{addToPlan.length}</h2>
            </div>

            <div className="text-center px-2 mt-2 border-l-2 border-[#232732]">
                <p className="text-light text-[#8A92A0]">Minutes</p>
                <h2 className="text-2xl font-bold">{minutes}</h2>
            </div>

            <div className="text-right px-2 mt-2  border-l-2 border-[#232732]">
                <p className="text-light text-[#8A92A0]">Calories</p>
                <h2 className="text-2xl font-bold">{calories}</h2>
            </div>
        </div>
    )
}