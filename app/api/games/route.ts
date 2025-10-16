import { NextResponse } from "next/server";



export async function GET(){

    const response = await fetch('https://api.igdb.com/v4/games',{
        method: "POST",
        headers:{
            "Client-ID": process.env.TWITCH_CLIENT_ID || "",
            Authorization: `Bearer ${process.env.TWITCH_ACCESS_TOKEN || ""}`,
            "Accept":"application/json",
        },
        body:`
            fields name, cover.url, first_release_date, summary, total_rating, rating, rating_count, genres.name, platforms.name, videos.video_id;
            sort total_rating desc;
            where total_rating != null 
            & rating_count > 50 
            & first_release_date >= 1420070400 
            & first_release_date <= 1750099200;
            limit 10;
            `,
    })

    if(!response.ok){
        return NextResponse.json({error: 'Houve um erro ao se conectar com a API'}, {status:response.status})
    }


    const data = await response.json();

    return NextResponse.json(data)
}