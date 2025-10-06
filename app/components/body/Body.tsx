import React, { useEffect } from "react";

import { UseSidebar } from "@/app/contexts/SidebarContext";
import HeroSection from "../heroSection/Hero";
export default function Body(){

    const {isOpen,toggleSidebar} = UseSidebar();


    useEffect(()=>{
        console.log("chocolate: ", isOpen)
    },[isOpen])
    return(
        <div className={`bg-[#151515] w-[80%] h-[100%]  relative left-[5em] top-[4em] text-[#151515]
            pb-3.5 flex flex-col justify-center gap-5 items-start transition-all ease-in-out
            ${isOpen? 'md:w-[71%] md:left-[14em] duration-300 lg:w-[83.4%] lg:left-[14em] ':
            'md:w-[90%] md:left-[5em] duration-300  lg:w-[94.1%] lg:left-[5em]'}`}>
                <HeroSection/>
        </div>
    )
}