'use client'
import React, { useEffect, useState } from "react";
import MainSidebar from "./mainSidebar/MainSidebar";
import { 
  Geist, 
  Geist_Mono, 
  Orbitron, 
  Roboto, 
  Inter, 
  Russo_One, 
  Open_Sans as OpenSans, 
  Fredoka, 
  Baloo_2, 
  Nunito,  
  Bebas_Neue, 
  Montserrat, 
  Lato
} from "next/font/google";

import { UseSidebar } from "@/app/contexts/SidebarContext";
import HeaderMainSidebar from "./mainSidebar/HeaderMainSideBar";
import BodyMainSidebar from "./mainSidebar/BodyMainSideBar";


export default function SidebarComponent(){

    const {isOpen, toggleSidebar} = UseSidebar();
    return(
    <div className={` z-[1000] w-screen h-screen fixed ${isOpen? 'pointer-events-auto': 
                'pointer-events-none'}`}>
        <div className={`fixed w-full h-screen bottom-0 z-10 
             ${isOpen? 'pointer-events-auto bg-[rgba(0,0,0,.9)]': 
                'pointer-events-none bg-transparent'}`}
        onClick={toggleSidebar}>
        </div>
        <div className={`bg-[#151515] h-screen absolute z-20 top-[4em] pointer-events-auto transform 
            transition-all ease-in-out duration-200
            ${isOpen? 'w-[14em]' : 'w-[3.5em] md:w-[4em]'}  overflow-auto pb-[5em] scrollbar-hide`}>
            <HeaderMainSidebar/>
            <BodyMainSidebar/>
        </div>
    </div>
    )
}