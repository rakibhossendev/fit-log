import { PlanDataType } from "@/app/TypeScript/Types";
import PlanCard from "../components/PlanCard/PlanCard";

export default async function PlanPage(){
    const response = await fetch('https://api.abcz.workers.dev/api/fitlog',{cache:"force-cache"});
    const planData: PlanDataType[] = await response.json();

    // console.log(data);

    
    return (
        <section className="container mx-auto mt-10">
            <h2 className="text-3xl mt-3 font-bold px-4">THE LIBRARY</h2>
            <p className="text-sm px-4">Twelve lifts covering every major muscle group.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8 ">
                {planData.map(data => <PlanCard key={data.id} data={data}/>)}

            </div>
        </section>
    )
}