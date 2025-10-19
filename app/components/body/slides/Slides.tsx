'use client'
import React, { useEffect, useState } from "react";

// slides
import MostPopular from "./PopularSlides";
import SlideMainGames from "./SlideMainGames";

export default function Slides(){
    const [windowSize, setWindowSize] = useState<number|null>(null)


    useEffect(()=>{
        function handleWindownSize(){
            setWindowSize(window.innerWidth);
        }
        handleWindownSize()
        window.addEventListener('resize', handleWindownSize)
        
        return ()=>{
            window.removeEventListener('resize', handleWindownSize)
        }
    },[])


    return(
        <div className="w-full h-full ">
            {/* slides will be here
            1. Most popular - played
            2. Principais novidades - Top New Releases
            3. about your choices (if the user once bouth something)
            4. main games of the main companies 
            5. categories */}
            {windowSize !== null && <MostPopular windowSize={windowSize} />}
            {windowSize !== null && <SlideMainGames windowSize={windowSize} />}
        </div>
    )
}