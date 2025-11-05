'use client'
import React, { useEffect, useState } from "react";

// slides
import MostPopular from "./PopularSlides";
import SlideMainGames from "./SlideMainGames";

// components
import Newsletters from "../../newsletters/Newsletters";
import OthersGames from "./OthersGames";


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


    useEffect(() => {
  console.log("🔍 Slides montado!");
  return () => console.log("🧹 Slides desmontado!");
}, []);

    return(
        <div className="w-full h-full ">
            {windowSize !== null && <MostPopular windowSize={windowSize} />}
            {windowSize !== null && <SlideMainGames windowSize={windowSize} />}
            <Newsletters/>
            {windowSize !== null && <OthersGames windowSize={windowSize} />}
        </div>
    )
}