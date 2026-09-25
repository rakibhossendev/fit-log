'use client'
import Image from "next/image";
import navLogo from "@/assets/logo.png"
import { usePathname } from "next/navigation";
import { useContext, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import Link from "next/link";
import { PlanContext } from "@/app/context/PlanContext";

export default function Navbar() {
    const pathname = usePathname();
    const [isOpen, updateOpen] = useState<boolean>(false);
    const { addToPlan, addToSave, toggle, updateToggle } = useContext(PlanContext);

    const handleToggle = (): void => {
        updateToggle(!toggle)
    }


    return (
        <nav className="bg-[#0C0D10]">
            <div className="container mx-auto flex justify-between items-center p-4">
                <div className="flex gap-2">
                    <Image src={navLogo} width={20} height={15} alt="Navbar logo" />
                    <h1 className="text-xl font-bold">FITLOG</h1>
                </div>

                <ul className="hidden md:flex gap-6">
                    <li><Link className={`text-sm py-1 px-2 text-[#9CA3AF] rounded ${pathname === "/" ? "bg-[#1A2312] text-[#C2F800]" : ""}`} href="/">Workouts</Link></li>
                    <li><Link className={`text-sm py-1 px-2 text-[#9CA3AF] rounded ${pathname === "/plans" ? "bg-[#1A2312] text-[#C2F800]" : ""}`} href="/plans">My Plans</Link></li>
                </ul>

                <ul className="hidden md:flex gap-4">
                    <li>
                        <button className={`flex cursor-pointer items-center gap-2 ${toggle ? "text-[#D1D5DB]" : "text-[#2D313B]"}`} onClick={handleToggle}>
                            Plan
                            <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs text-black bg-[#C2F800]">{addToPlan.length}</span>
                        </button>
                    </li>
                    <li>
                        <button className={`flex cursor-pointer items-center gap-2 ${!toggle ? "text-[#D1D5DB]" : "text-[#2D313B]"}`} onClick={handleToggle}>
                            Save
                            <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs border-2 border-[#2D313B]">{addToSave.length}</span>
                        </button>
                    </li>
                </ul>

                <button onClick={() => updateOpen(!isOpen)} className="text-xl md:hidden">
                    {isOpen ? <FiX /> : <FiMenu />}
                </button>

            </div>




            {isOpen && (
                <div className="md:hidden p-4">
                    <ul className="flex flex-col gap-4">
                        <li><Link className={`text-sm text-[#9CA3AF] py-1 px-2 rounded ${pathname === "/" ? "bg-[#1A2312] text-[#C2F800]" : ""}`} href="/">Workouts</Link></li>
                        <li><Link className={`text-sm text-[#9CA3AF] py-1 px-2 rounded ${pathname === "/plans" ? "bg-[#1A2312] text-[#C2F800]" : ""}`} href="/plans">My Plans</Link></li>
                        <li>
                            <button className={`flex cursor-pointer items-center gap-2 ${toggle ? "text-[#D1D5DB]" : "text-[#2D313B]"}`} onClick={handleToggle}>
                                Plan
                                <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs text-black bg-[#C2F800]">{addToPlan.length}</span>
                            </button>
                        </li>
                        <li>
                            <button className={`flex cursor-pointer items-center gap-2 ${!toggle ? "text-[#D1D5DB]" : "text-[#2D313B]"}`} onClick={handleToggle}>
                                Save
                                <span className="w-6 h-6 rounded-full flex items-center justify-center text-xs border-2 border-[#2D313B]">{addToSave.length}</span>
                            </button>
                        </li>
                    </ul>
                </div>
            )}
            <hr className="text-[#1D1C26]" />
        </nav>

    )


}