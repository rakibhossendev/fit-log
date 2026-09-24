import Link from "next/link";

export default function EmptyCard() {

    return (
        <div className="p-4 py-16 mt-5 border-2 border-dashed text-center items-center rounded-2xl border-[#232732] bg-[#0E1115]">

            <h2 className="text-2xl font-bold">NOTHING HERE YET.</h2>
            <p className="text-sm py-0.5">Browse the library and add a lift to get today moving.</p>

            <Link href="/"> <button className="font-bold cursor-pointer hover:bg-[#97b811] px-4 py-2 bg-[#C2F10D] text-[#000000] rounded-2xl mt-3">Go to workouts</button></Link>

        </div>
    )
}