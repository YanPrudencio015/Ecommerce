import { NextResponse } from "next/server";
import { getTwitchToken } from "@/lib/getTwitchToken";

export async function GET() {
  try {
    const token = await getTwitchToken();

    const response = await fetch("https://api.igdb.com/v4/games", {
      method: "POST",
      headers: {
        "Client-ID": process.env.TWITCH_CLIENT_ID!,
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
      body: `
        fields name, cover.url, first_release_date, summary, total_rating, rating, rating_count, genres.name, platforms.name, videos.video_id;
        sort total_rating desc;
        where total_rating != null 
        & rating_count > 50 
        & first_release_date >= 1420070400 
        & first_release_date <= 1750099200;
        limit 10;
      `,
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("❌ Erro IGDB:", error);
      return NextResponse.json({ error: "Erro ao buscar dados da IGDB" }, { status: response.status });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("❌ Erro interno:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
