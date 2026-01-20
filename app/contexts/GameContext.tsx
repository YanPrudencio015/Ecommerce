"use client"

import { createContext, useContext, ReactNode, useState } from "react";

const GameContext = createContext<any>(null);

export function GameProvider({children}: {children: React.ReactNode}) {
    const [gameData, setGameData] = useState(null);
    const [loading, setLoading] = useState(false);

    const fetchGame = async (gameName: string) => {
        setLoading(true);

        try { 
            const res = await fetch(`/api/game?name=${encodeURIComponent(gameName)}`);
            
        if (!res.ok) {
            console.error(`HTTP error! status ${res.status}`);
            setGameData(null);
            return;
        }
            
            const data = await res.json();
            console.log(`++++++++++++++++++++++++++++`, 'resposta da API: ', data)

            if (data && !data.error && data.length > 0) {
                setGameData(data[0]);
                console.log(`✅ Jogo carregado:`, data[0]);
            } else {
                console.log(`❌ Nenhum jogo encontrado`);
                setGameData(null);
            }
        } catch (error: any) {
            console.error("❌ Erro na requisição:", error);
            setGameData(null);
        } finally {
            setLoading(false);
        }
    }

    return (
        <GameContext.Provider value={{gameData, loading, fetchGame}}>
            {children}
        </GameContext.Provider>
    )
}

export function useFetchGame() {
    const ctx = useContext(GameContext);
    if (!ctx) {
        throw new Error("useFetchGame must be used inside GameProvider");
    }
    return ctx;
}