'use client'

import { Dispatch, SetStateAction, useState,createContext} from "react"
import { PlanDataType } from "../TypeScript/Types"

interface PlanContextType{
    addToPlan: PlanDataType[];
    updateAddToPlan: Dispatch<SetStateAction<PlanDataType[]>>
    addToSave: PlanDataType[];
    updateAddToSave: Dispatch<SetStateAction<PlanDataType[]>>
    toggle: boolean;
    updateToggle: Dispatch<SetStateAction<boolean>>;
    markAsDoneItems: PlanDataType[];
    updateMarkAsDone: Dispatch<SetStateAction<PlanDataType[]>>
}

export const PlanContext = createContext<PlanContextType>({
    addToPlan: [],
    updateAddToPlan: () => {},
    addToSave: [],
    updateAddToSave: () => {},
    toggle: true,
    updateToggle: () => {},
    markAsDoneItems: [],
    updateMarkAsDone: () => {}
});

export default function PlanContextProvider({children}:{children: React.ReactNode}){
    const [addToPlan,updateAddToPlan] = useState<PlanDataType[]>([]);
    const [addToSave,updateAddToSave] = useState<PlanDataType[]>([]);
    const [toggle, updateToggle] = useState<boolean>(true);
    const [markAsDoneItems,updateMarkAsDone] = useState<PlanDataType[]>([]);

    const allContext: PlanContextType = {
        addToPlan,
        updateAddToPlan,
        addToSave,
        updateAddToSave,
        toggle,
        updateToggle,
        markAsDoneItems,
        updateMarkAsDone,
    }

    return (
        <PlanContext.Provider value={allContext}>
            {children}
        </PlanContext.Provider>
    )

}