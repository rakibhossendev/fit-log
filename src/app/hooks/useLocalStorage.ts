// import { useEffect, useState } from "react";

// export function useLocalStorage<T>(key: string,initialData: T){
//     const [data,setData] = useState<T>(initialData);

    
//     useEffect(()=> {
//         const existingData = localStorage.getItem(key);
//         if(existingData){
//             const parseData: T = JSON.parse(existingData)
           
//             setData(parseData);
//         }
//     },[key])

//     const updateLocalStorage = (newData: T): void => {
//         localStorage.setItem(key,JSON.stringify(newData))
//         setData(newData);

//     }
//     return [data,updateLocalStorage] as const;

// }