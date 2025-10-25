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
  const [firstNews, setFirstNews] = useState< any | null>(null);
  const [news, setNews] = useState<any[] | null>(null);
  const [restOfNews, setRestOfNews] = useState<any[] | null>(null);

  useEffect(() => {
    async function loaNews() {
      try {
        const newsAPI = await fetch("/api/news");
        const data = await newsAPI.json()
        setNews(data.results)

      } catch (error) {
        console.error("Erro ao carregar notícias:", error);
      }
    }

    loaNews();
  }, []);


  useEffect(()=>{
    console.log("Horizon: ", news)

    if(news !== null){
      const firstNews = news[0];
      const rest = news.slice(1);

      setFirstNews(firstNews);
      setRestOfNews(rest)
      console.log("firstNews: ",firstNews);
      console.log("allNews: ",rest);
    }

  },[news])



  return (
    <div className="w-[95%] h-auto bg-[#151515] flex flex-col justify-center items-center mb-16
        relative before:absolute before:top-0 before:h-[1px] before:w-[80%] before:bg-[#EEEEEE]
        before:left-1/2 before:-translate-x-1/2 after:absolute after:bottom-0 after:w-[80%] 
        after:bg-[#EEEEEE] after:h-[1px]  after:left-1/2 after:-translate-x-1/2 gap-7">
        <h1 className={`text-[1.6em] text-[#fff] w-full h-[4em] flex 
          justify-start items-center pl-2 ${bebasNeue.className}`}>Inside the Gaming World</h1>
   {firstNews && firstNews.image && (
  <div className="w-full h-[15em]  relative">
    <Image
      src={firstNews.image}
      width={1000}
      height={800}
      alt="news image"
      className="w-full h-full object-fill brightness-50"
    />
    <p
      className={`absolute top-1/2 left-1/15 w-[90%] h-[5em] flex justify-start text-[#fff] z-20
      text-[1em] ${nunito.className}`}>{firstNews.title}</p>
  </div>
)}
        <div className="w-full h-auto pt-3 flex flex-col gap-4 mb-16">

          {restOfNews?.map((value, index)=>(
            <div key={index} className=" relative rounded-[.5em]  w-full h-[8em] flex flex-row
              justify-between p-1.5 gap-1 text-[#fff] before:absolute before:bg-[#fff] items-center
              before:w-[50%] before:h-[1px] before:top-0 before:right-1/2 before:translate-x-1/2">
              <div className=" w-[70%] h-full flex flex-col justify-between
              items-center p-1.5 text-[.7em]">
                <h1 className="w-full h-full flex justify-center
              items-center">{value.title}</h1>
                {/* <p>horas</p> */}
              </div>
            <div className=" w-[30%] h-full flex justify-center items-center">
              <Image 
                src={`${value.image}`}
                alt=""
                width={800}
                height={800}
                className="w-full h-[5em] object-fill rounded-2xl"/>
            </div>
          </div>
          ))}
          
        </div>
    </div>
  );
}
