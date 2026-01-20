'use client'
import React, { useEffect, useState } from "react";

// slides
import MostPopular from "./PopularSlides";
import SlideMainGames from "./SlideMainGames";

// components
import OthersGames from "./OthersGames";
import UpRealeses from "../UpcomingRealeses/UpRealeses";


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
            {windowSize !== null && <MostPopular windowSize={windowSize} />}
            {windowSize !== null && <SlideMainGames windowSize={windowSize} />}
            <UpRealeses/>
            {windowSize !== null && <OthersGames windowSize={windowSize} />}
        </div>
    )
}