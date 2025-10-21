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

    return(<div className="w-full h-[35em] bg-amber-600">test</div>)
}