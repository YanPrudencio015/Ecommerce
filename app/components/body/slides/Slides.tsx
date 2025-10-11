'use client'
import React, { useEffect, useState } from "react";
import MostPopular from "./PopularSlides";




export default function Slides(){

    const [windowSize, setWindowSize] = useState(window.innerWidth)


    useEffect(()=>{
        function handleWindownSize(){
            setWindowSize(window.innerWidth)
        }

        window.addEventListener('resize', handleWindownSize)
        
        return ()=>{
            window.removeEventListener('resize', handleWindownSize)
        }
    },[])


    return(
        <div className="w-full h-full bg-[#9d14ff]">
            {/* slides will be here
            1. Most popular
            2. about your choices (if the user once bouth something)
            2. Suggestions
            2. Principais novidades
            2. good ratios 
            2. categories */}
            <MostPopular windowSize={windowSize} />
        </div>
    )
}