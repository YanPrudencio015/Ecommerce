import { NextResponse } from "next/server";
import { getTwitchToken } from "@/lib/getTwitchToken";




export async function GET(){
    try{
        const token = await getTwitchToken();
    const response = await fetch(
  "https://api.igdb.com/v4/genres",
  { method: 'POST',
    headers: {
        "Client-ID": process.env.TWITCH_CLIENT_ID!,
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
    },
    body: "fields checksum,created_at,name,slug,updated_at,url; limit 200;"
})


    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Erro interno:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

}