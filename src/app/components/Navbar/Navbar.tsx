'use client'
import Image from "next/image";
import navLogo from "@/assets/logo.png"
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, updateOpen] = useState<boolean>(false);
    
    return (

    <nav className="bg-[#0C0D10]">
        <div className="container mx-auto flex justify-between items-center p-4">
            <div className="flex gap-2">
                <Image src={navLogo} width={20} height={15} alt="Navbar logo" />
                <h1 className="text-xl font-bold">FITLOG</h1>
            </div>

            <ul className="hidden md:flex gap-6">
                <li><a className={`text-sm py-1 px-2 rounded ${pathname === "/"? "bg-[#1A2312] text-[#C2F800]": ""}`} href="#">Workouts</a></li>
                <li><a className={`text-sm py-1 px-2 rounded ${pathname === "/plans"? "bg-[#1A2312] text-[#C2F800]": ""}`} href="#">My Plans</a></li>
            </ul>

            <ul className="hidden md:flex gap-4">
                <li><a href="#">Plan{" "}<span className="rounded px-1 text-black bg-[#C2F800]">0</span></a></li>
                <li><a href="#">Save <span>0</span></a></li>
            </ul>

            <button onClick={() => updateOpen(!isOpen)} className="text-xl md:hidden">
                {isOpen ? <FiX /> : <FiMenu />}
            </button>
        </div>



        {isOpen && (
            <div className="md:hidden p-4">
                <ul className="flex flex-col gap-4">
                    <li><a className={`text-sm py-1 px-2 rounded ${pathname === "/"? "bg-[#1A2312] text-[#C2F800]": ""}`}href="#">Workouts</a></li>
                    <li><a className={`text-sm py-1 px-2 rounded ${pathname === "/plans"? "bg-[#1A2312] text-[#C2F800]" : ""}`}href="#">My Plans</a></li>
                    <li><a href="#">Plan{" "}<span className="rounded px-1 text-black bg-[#C2F800]">0</span></a></li>
                    <li><a href="#">Save <span>0</span></a></li>
                </ul>
            </div>
        )}
        <hr />
    </nav>
)
}