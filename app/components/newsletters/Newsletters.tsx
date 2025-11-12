'use client'
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Orbitron, Roboto, Inter, Russo_One, Audiowide,  Open_Sans, Fredoka, Baloo_2, Nunito,  Bebas_Neue, Montserrat, Lato, Yesteryear,} from "next/font/google";



const orbitron = Orbitron({weight:"800", subsets:["latin"]});
const roboto = Roboto({weight:"800", subsets:["latin"]});
const inter = Inter({weight:"400", subsets:["latin"]});
const russoOne = Russo_One ({weight:"400", subsets:["latin"]});
const audioWise = Audiowide({weight:"400", subsets:["latin"]});
const OpenSans = Open_Sans({weight:"300", subsets:["latin"]})
const fredoka = Fredoka({weight:"400", subsets:["latin"]});
const baloo2 = Baloo_2({weight:"600", subsets:["latin"]});
const nunito = Nunito({weight:"700", subsets:["latin"]});
const bebasNeue = Bebas_Neue({weight:"400", subsets:["latin"]});
const montserrat = Montserrat({weight:"300", subsets:["latin"]});
const lato = Lato({weight:"400", subsets:["latin"]});

export default function Newsletters() {
  const [news, setNews] = useState<any[] | null>(null);



  useEffect(() => {
    console.log("🔄 Renderizando componente OthersGames")
  console.log("🔍 NewsGames montado!");
  return () => console.log("🧹 NewsGames desmontado!");
}, []);




  useEffect(() => {
    async function loaNews() {
      try {
        const newsAPI = await fetch("/api/news");
        const data = await newsAPI.json();
        setNews(data.results)

      } catch (error) {
        console.error("Erro ao carregar notícias:", error);
      }
    }
    loaNews();
  }, []);



  return (
    <div className="w-[95%] h-[50em] bg-[#151515] flex flex-col justify-center items-center mb-16
        relative before:absolute before:top-0 before:h-[1px] before:w-[80%] before:bg-[#EEEEEE]
        before:left-1/2 before:-translate-x-1/2 after:absolute after:bottom-0 after:w-[80%] 
        after:bg-[#EEEEEE] after:h-[1px]  after:left-1/2 after:-translate-x-1/2 gap-2">
        <h1 className={`text-[3em] text-[#fff] w-full h-[4em] flex 
          justify-start items-center pl-2 ${bebasNeue.className}`}>Inside the Gaming World</h1>
        <div className="w-full h-[26em] sm:overflow-hidden pt-3 flex flex-col gap-4 mb-16
          sm:flex sm:flex-col sm:flex-wrap sm:justify-center sm:gap-1.5
          overflow-auto pb-[2em] sm:pb-0">

          {news?.map((value, index)=>(
            <div key={index} className=" relative  w-full h-[6em] flex flex-row
              justify-between p-2 gap-1 text-[#fff] items-center before:absolute
               before:left-0 before:h-full before:w-[5px] before:bg-[#068FFF] sm:w-[50%] sm:h-[5.5em]
               sm:items-center hover:bg-[#068FFF] hover:text-[#fff]
               transition-all duration-200 ease-in-out hover:before:w-[10px] hover:before:bg-[#fff]
               before:transition-all before:duration-300">
              <div className=" w-[70%] h-full flex flex-col justify-between
              items-center p-1.5 text-[.7em]">
                <h1 className={`w-full h-full flex justify-center
              items-center ${montserrat.className}`}>{value.title}</h1>
              </div>
            <div className=" w-[4em] h-[2em] flex justify-center items-center rounded-1xl
            text-center ">
              {value.image.startsWith("https://") ? (
                <Image
                  src={value.image}
                  alt={value.title || "News image"}
                  width={800}
                  height={400}
                  className="object-cover rounded-lg w-[3em] h-[2em]"
                />
              ) : <div className="w-full h-full border rounded-lg bg-[#fff]"></div>}
            </div>
          </div>
          ))}          
        </div>
          <button className="w-[15em] h-[2em] text-[#fff] bg-[#9d14ff] relative rounded-[.5em]
          sm:w-1/2 lg:w-[10em] hover:bg-[rgba(157,20,255,.5)] cursor-pointer
            "> See More</button>
    </div>
  );
}
