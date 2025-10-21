// app/api/characters/route.ts
import { NextResponse } from "next/server";
import { getTwitchToken } from "@/lib/getTwitchToken";

// GET /api/characters?gameId=1234
export async function GET(request: Request) {
  const url = new URL(request.url);
  // const gameId = url.searchParams.get("gameId");
  const gameId = 19560   ;

  if (!gameId) {
    return NextResponse.json({ error: "Missing gameId parameter" }, { status: 400 });
  }

  try {
    const token = await getTwitchToken();

    // Chamada para IGDB Characters
    const response = await fetch("https://api.igdb.com/v4/characters", {
      method: "POST",
      headers: {
        "Client-ID": process.env.TWITCH_CLIENT_ID!,
        Authorization: `Bearer ${token}`,
        "Content-Type": "text/plain",
      },
      body: `
        fields name, mug_shot.url, species, gender, games.name;
        where games = ${gameId};
        limit 20;
      `,
    });

    if (!response.ok) {
      const errText = await response.text();
      throw new Error(errText);
    }

    const characters = await response.json();
    return NextResponse.json(characters);

  } catch (error) {
    console.error("Error fetching characters:", error);
    return NextResponse.json(
      { error: "Failed to fetch characters" },
      { status: 500 }
    );
  }
}
