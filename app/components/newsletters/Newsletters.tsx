import React, { useEffect, useState } from "react";





export default function Newsletters(){
    const[newsResponse, setNewsResponse] = useState ();

    useEffect(()=>{

       async function loaNews(){
           const newsAPI = await fetch('api/news');
           const data = await newsAPI.json()
           console.log("Spider-man: ",newsAPI)
        }


loaNews()

    },[])

    return(<div className="w-full h-[35em] bg-amber-600">

        aumentar a altura  da barra de informações para que não dê erro de designe com
        games com titulos grandes. Se possível, colocar uma estrela e o valor da nota.   
    </div>)
}