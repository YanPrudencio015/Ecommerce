"use client";
import React, { useEffect, useState } from "react";
import MainSidebar from "./mainSidebar/MainSidebar";

import { UseSidebar } from "@/app/contexts/SidebarContext";
import HeaderMainSidebar from "./mainSidebar/HeaderMainSideBar";
import BodyMainSidebar from "./mainSidebar/BodyMainSideBar";

export default function SidebarComponent() {
  const { isOpen, toggleSidebar } = UseSidebar();
  const [screenSize, setScreenSize] = useState<number | null>(null);

  useEffect(() => {
    function handleScreenSize() {
      setScreenSize(window.innerWidth);
    }
    handleScreenSize();
    window.addEventListener("resize", handleScreenSize);

    return () => window.removeEventListener("resize", handleScreenSize);
  }, []);

  return (
    <>
      {screenSize != null && screenSize < 768 && (
        <div
          className={`z-1000 w-screen h-screen fixed ${
            isOpen
              ? "pointer-events-auto md:pointer-none:"
              : "pointer-events-none"
          }`}
        >
          <div
            className={`fixed w-full h-screen bottom-0 z-10 
             ${
               isOpen
                 ? "pointer-events-auto bg-[rgba(0,0,0,.9)] md:bg-transparent md:pointer-events-auto"
                 : "pointer-events-none bg-transparent"
             }`}
            onClick={toggleSidebar}
          ></div>
          <div
            className={`bg-[#151515] h-screen absolute z-20 top-[4em] pointer-events-auto transform 
            transition-all ease-in-out duration-200 md:bg-transparent 
            ${isOpen ? "w-[14em]" : "w-[3.5em] md:w-[4em]"}  overflow-auto pb-[5em] scrollbar-hide`}
          >
            <HeaderMainSidebar />
            <BodyMainSidebar />
          </div>
        </div>
      )}

      <div
        className={`bg-[#151515] h-screen fixed z-20 pointer-events-auto transform 
            transition-all ease-in-out duration-200 md:bg-transparent top-[4em]
            ${isOpen ? "w-[14em]" : "w-[3.5em] md:w-[4em]"}  overflow-auto pb-[5em] scrollbar-hide`}
      >
        <HeaderMainSidebar />
        <BodyMainSidebar />
      </div>
    </>
  );
}
