import Image from "next/image";
import FooterLogo from "@/assets/logo.png"

export default function Footer(){


    return (
        <footer>
            <hr className="text-[#1D1C26]"/>
            <div className="container mx-auto flex justify-between p-4 items-center">
                <div className="flex gap-2">
                    <Image src={FooterLogo} width={20} height={15} alt="footer logo"/>
                    <h1 className="font-bold text-xl">FITLOG</h1>
                </div>

                <p className="text-sm">© 2026 FitLog — Workout Library. Train hard, log honest.</p>
            </div>
        </footer>
    )
}