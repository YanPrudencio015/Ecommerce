"use client"

import { createContext, useContext, ReactNode, useState } from "react"

type useLoadingType ={
    isloaded:boolean[],
    ToggleLoading: (value:number)=> void
}

const LoadingContext = createContext<useLoadingType | undefined>(undefined);


export function LoadingProvider({children}:{children:ReactNode}){
    const [isloaded, setLoaded] = useState<boolean[]>([false, false, false]);
    
    
    function ToggleLoading(number:number){
        setLoaded(prev=>{
            const newArray = [...prev];
            newArray[number] = true;
            return newArray;
            
        })

}
        return(
            <LoadingContext.Provider value={{isloaded, ToggleLoading}}>
            {children}
        </LoadingContext.Provider>
    )
}


export function useLoading (){
    const ctx = useContext(LoadingContext)
    if(!ctx){
        throw new Error("useLoading must be used inside SidebarProvider")
    }
    return ctx
}