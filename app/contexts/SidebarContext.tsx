"use client"

import { createContext, useContext, ReactNode, useState } from "react"


type useSideBarType ={
    isOpen: boolean;
    toggleSidebar: () => void;
     
}

const SidebarContext = createContext<useSideBarType | undefined>(undefined);



export function SidebarProvider({children}:{children:ReactNode}){
    const [isOpen, setIsOpen] = useState(false)

    function toggleSidebar(){
        setIsOpen(prev => !prev)
    }

    return(
        <SidebarContext.Provider value={{isOpen, toggleSidebar}} >
            {children}
        </SidebarContext.Provider>
    )
}


export function UseSidebar(){
    const ctx = useContext(SidebarContext);
    if(!ctx) throw new Error("useSidebar must be used inside SidebarProvider")
        return ctx
}