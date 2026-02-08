'use client'
//components
import Header from "./components/Header";
import MainSidebar from "./components/sidebars/mainSidebar/MainSidebar";
import Body from "./components/body/Body";


import { useLoading } from "./contexts/LoadingContext";
import { useEffect } from "react";
import SidebarComponent from "./components/sidebars/SidebarComponent";


export default function Home() {
  
    const {isloaded, ToggleLoading} = useLoading();
    const allComponentsLoaded = isloaded.every(status => status === true);
  useEffect(()=>{
    // console.log("//////////////////////////////")
    // console.log("isloaded: ", isloaded)
  },[isloaded])
  return (
    <div className="text-[#000] border-0 outline-0 box-border">
      <div className={`w-full h-screen  fixed flex justify-center items-center text-white
          ${allComponentsLoaded === false? 'bg-[#151515] z-10000000': 
          'bg-transparent pointer-events-none z-[-10]'}`}>
            Level UP
          </div>
      <Header/>
      {/* <MainSidebar/> */}
      <SidebarComponent/>
      <Body/>

    </div>
   
  );
}
