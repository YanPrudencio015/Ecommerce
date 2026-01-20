import { getTwitchToken } from "@/lib/getTwitchToken";
import { NextResponse } from "next/server";



export async function GET(request: Request){

try{    const {searchParams } = new URL(request.url);
    const name = searchParams.get('name');

    const token = await getTwitchToken();

    const response = await fetch('https://api.igdb.com/v4/games',{ method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Client-ID': process.env.TWITCH_CLIENT_ID!,
      'Authorization': `Bearer ${token}`,
    },
      body: `search "${name}"; 
        fields 
          name, 
          cover.url, 
          summary, 
          genres.name, 
          platforms.name, 
          first_release_date, 
          rating, 
          aggregated_rating,
          aggregated_rating_count,
          screenshots.url,
          age_ratings,
          alternative_names,
          artworks.url,
          bundles,
          game_type,
          checksum,
          collections,
          created_at,
          dlcs,
          expanded_games,
          expansions,
          external_games,
          follows,
          forks,
          franchise,
          franchises,
          game_engines,
          game_localizations,
          game_modes.name,
          game_status,
          keywords,
          language_supports,
          multiplayer_modes,
          parent_game,
          player_perspectives.name,
          ports,
          rating_count,
          release_dates,
          remakes,
          remasters,
          similar_games,
          slug,
          standalone_expansions,
          status,
          storyline,
          tags,
          themes.name,
          total_rating,
          total_rating_count,
          updated_at,
          url,
          version_parent,
          version_title,
          videos.video_id,
          websites.url,
          involved_companies.company.name,
          hypes; 
        limit 10;`
});



if(!response.ok){
    const error = await response.text();
    console.log("error on IGDB: ", error);
}


const data = await response.json();
console.log("📦 Resposta IGDB:", data);
if (!data || data.length === 0) {
    console.log("Nenhum jogo encontrado para:", name);
    return NextResponse.json({ error: "Game not found" }, { status: 404 });
}



 return NextResponse.json(data)

}catch(error:any){
    console.log("intern error: ", error);
    return NextResponse.json({error:error.message}, { status: 500 })
}
}