'use client'

import { Dispatch, SetStateAction, useState,createContext} from "react"
import { PlanDataType } from "../TypeScript/Types"

interface PlanContextType{
    addToPlan: PlanDataType[];
    updateAddToPlan: Dispatch<SetStateAction<PlanDataType[]>>
    addToSave: PlanDataType[];
    updateAddToSave: Dispatch<SetStateAction<PlanDataType[]>>
}

export const PlanContext = createContext<PlanContextType>({
    addToPlan: [],
    updateAddToPlan: () => {},
    addToSave: [],
    updateAddToSave: () => {},
});

export default function PlanContextProvider({children}:{children: React.ReactNode}){
    const [addToPlan,updateAddToPlan] = useState<PlanDataType[]>([]);
    const [addToSave,updateAddToSave] = useState<PlanDataType[]>([]);

    const allContext: PlanContextType = {
        addToPlan,
        updateAddToPlan,
        addToSave,
        updateAddToSave
    }

    return (
        <PlanContext.Provider value={allContext}>
            {children}
        </PlanContext.Provider>
    )

}