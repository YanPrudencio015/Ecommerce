import React, { useEffect } from "react";

import { UseSidebar } from "@/app/contexts/SidebarContext";
import HeroSection from "../heroSection/Hero";
import Slides from "./slides/Slides";
export default function Body(){

    const {isOpen,toggleSidebar} = UseSidebar();

    return(
        <div className={`bg-[#151515] w-[86%] h-[100%]  relative left-[3.5em] top-[4em] text-[#151515]
            pb-3.5 flex flex-col justify-center gap-5 items-start transition-all ease-in-out
            ${isOpen? 'md:w-[71%] md:left-[14em] duration-300 lg:w-[83.4%] lg:left-[14em] ':
            'md:w-[91%] md:left-[4em] duration-300  lg:w-[95.2%] lg:left-[4em]'}`}>
                <HeroSection/>
                <Slides/>
        </div>
    )
}