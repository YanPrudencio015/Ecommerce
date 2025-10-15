import React, { useEffect } from "react";

import { UseSidebar } from "@/app/contexts/SidebarContext";
import HeroSection from "../heroSection/Hero";
import Slides from "./slides/Slides";
import Image from "next/image";


import imageTest from '@/public/GameImages/game3.jpg'
export default function Body(){

    const {isOpen,toggleSidebar} = UseSidebar();

    return(
        <div className={`bg-[#151515] w-[86%] h-[100%]  relative left-[3.5em] top-[4em] text-[#151515]
            pb-3.5 flex flex-col justify-center gap-5 items-start transition-all ease-in-out
            ${isOpen? 'md:w-[71%] md:left-[14em] duration-300 lg:w-[83.4%] lg:left-[14em] ':
            'md:w-[91%] md:left-[4em] duration-300  lg:w-[95.2%] lg:left-[4em]'}`}>
                <HeroSection/>
                <Slides/>

                <div className="
                    m-3.5 border border-[#fff] w-[18em] h-[16em] rounded-t-[.5em]
                    rounded-[0em] text-[#fff] shadow-lg/30 
                    hover:scale-105 transition-all scale-100 hover:shadow-[#ff9a00]  ">
                        <Image src={imageTest} alt="test" className="w-full h-[70%] rounded-t-[.5em]
                            rounded-[0em]"/>
                        {/* <div className="w-full h-[30%] bg-[#FF9A00] "> */}
                        <div className="w-full h-[30%] bg-[#015551] ">

                        </div>
                    </div>
        </div>
    )
}