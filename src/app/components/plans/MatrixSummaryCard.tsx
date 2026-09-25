'use client'
import { PlanContext } from "@/app/context/PlanContext"
import { useContext } from "react"

export default function MatrixSummaryCard() {
    const { addToPlan, addToSave, toggle, markAsDoneItems } = useContext(PlanContext);

    const showMatrixData = toggle ? addToPlan : addToSave;

    const minutes = showMatrixData.reduce((accumulator, item) => accumulator + item.duration, 0);
    const calories = showMatrixData.reduce((accumulator, item) => accumulator + item.caloriesBurned, 0)

    return (
        <div className="mt-5 grid grid-cols-3 items-center justify-center p-8 border-2 border-[#232732] rounded-2xl bg-[#13161D]">
            <div className="text-left px-2 mt-2 ">
                <p className="font-light text-[#8A92A0]">Exercises</p>
                <h2 className="font-bold text-2xl text-[#CCFF00]">{showMatrixData.length}</h2>
            </div>

            <div className="text-center px-2 mt-2 border-l-2 border-[#232732]">
                <p className="text-light text-[#8A92A0]">Minutes</p>
                <h2 className="text-2xl font-bold">{minutes}</h2>
            </div>

            <div className="text-right px-2 mt-2  border-l-2 border-[#232732]">
                <p className="text-light text-[#8A92A0]">Calories</p>
                <h2 className="text-2xl font-bold">{calories}</h2>
            </div>

            <div className="w-full mt-5">
                <p className="text-sm text-[#8A92A0]">Total Done: {markAsDoneItems.length}</p>
                <div className="w-full h-2 mt-2 bg-[#272B33] rounded-full overflow-hidden">
                    <div className="h-full bg-[#C2F800] rounded-full transition-all duration-300" style={{ width: `${Math.min((markAsDoneItems.length / 5) * 100, 100)}%`}}/>
                </div>
            </div>
        </div>
    )
}