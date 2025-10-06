'use client'
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

// Components
import BodyMainSidebar from "./BodyMainSideBar";
import HeaderMainSidebar from "./HeaderMainSideBar";


import { useEffect, useState } from "react"
export default function MainSidebar() {
  const {isOpen, toggleSidebar} = UseSidebar();


  useEffect(()=>{
    console.log("England: ", isOpen)
  },[isOpen])
  return (
    // <div className="text-[#000] w-[14em] h-[100vh] bg-[#151515]
    //   fixed top-[4em] overflow-auto pb-[5em] scrollbar-hide z-50"
    // >
    <div className={`border-1 border-[#fff] text-[#000] h-[100vh] bg-[#151515] fixed top-[4em] 
      overflow-auto pb-[5em] scrollbar-hide z-50 transform transition-all ease-in-out duration-200
      ${isOpen? 'w-[14em]' : 'w-[5em]'}`}
    
    >

        {/*sidebar Header  */}
          <HeaderMainSidebar/>
        {/* Sidebar Body */}
          <BodyMainSidebar/>
    </div>
  );
}
