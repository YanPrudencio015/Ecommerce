"use client"

import React, {ReactNode, useEffect} from "react";

import { useFetchGame } from "../contexts/GameContext";


export default function page({children}: {children:ReactNode}){
    
    const {gameData} = useFetchGame();

    useEffect(()=>{
        console.log(`O jogo que eu peguei foi esse: ${gameData}`)
    },[gameData])
    
    return(
        <div className="flex justify-center items-center text-white">
            Game name
        </div>
    )
}