import MatrixSummaryCard from "../components/plans/MatrixSummaryCard";
import ToggleButton from "../components/plans/ToggleButton";

export default function Plan(){
   

return (
    <section className="mt-6 sm:mt-8 lg:mt-10">

        <div className="container mx-auto px-4 sm:px-6 lg:px-0">
            <h1 className="text-2xl sm:text-3xl font-bold">My Plan</h1>
            <p className="text-xs sm:text-sm py-2 text-[#8A92A0]">Cap of five lifts for today. Finish them, then load more.</p>

            <MatrixSummaryCard />

            <ToggleButton />
        </div>
        
    </section>
)
}