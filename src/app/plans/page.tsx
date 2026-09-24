import MatrixSummaryCard from "../components/plans/MatrixSummaryCard";
import ToggleButton from "../components/plans/ToggleButton";

export default function Plan(){

    return (
        <section className="mt-10">
            <div className="mx-auto container">
                <h1 className="text-3xl font-bold">My Plan</h1>
                <p className="text-sm py-2 text-[#8A92A0]">Cap of five lifts for today. Finish them, then load more.</p>

                <MatrixSummaryCard/>

                <ToggleButton/>
                

                
            </div>
        </section>
    )
}