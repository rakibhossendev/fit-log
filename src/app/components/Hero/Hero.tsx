import Image from "next/image";
import HeroImage from "@/assets/banner.png"
import Link from "next/link";

export default function HeroSection() {

    return (
        <section className="mt-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center bg-[#15171D] rounded-2xl p-6 md:py-15 md:px-20">
                
                <div className="">
                    <p className="font-bold text-[11px] text-[#C2F800] my-4 md:my-8">WORKOUT LIBRARY</p>
                    <h1 className="text-3xl md:text-5xl font-bold my-4 md:my-8">TRAIN WITH INTENT. LOG EVERY SET.</h1>
                    <p className="my-4 md:my-8 text-[15px] text-[#9CA3AF]">{`FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into today's plan, and watch the week's work add up.`}</p>

                    <Link href="/">
                    <button className="bg-[#C2F800] py-2 px-4 rounded text-black cursor-pointer hover:bg-[#C2F800]">
                        BROWSE WORKOUTS
                    </button>
                    </Link>
                </div>

                <div className="flex justify-center">
                    <Image src={HeroImage} width={300} height={300} alt="hero section image" className="w-full max-w-75 h-auto"/>
                </div>
            </div>
        </section>
    )
}