import { NextResponse } from "next/server";
import { getTwitchToken } from "@/lib/getTwitchToken";
import { url } from "inspector";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const searchParams = url.searchParams;
  const type = searchParams.get("type");

  // get the todays' date and from it, get a previous date
  let body = "";

  const today = () => {
    return Math.floor(Date.now() / 1000);
  };

  const MonthsAgo = (value: number) => {
    let today = new Date();
    let monthsAgo = new Date(today);
    return Math.floor(monthsAgo.setMonth(monthsAgo.getMonth() - value) / 1000);
  };

  if (type === "popular") {
    body = `fields name, artworks.url, cover.url, first_release_date, summary, 
              total_rating, rating, rating_count, genres.name, platforms.name, videos.video_id;
            sort total_rating desc;
            where total_rating >= 70 & rating_count > 100 & first_release_date >= ${MonthsAgo(60)} &
            first_release_date <= ${today()} & platforms != null &
            (platforms != 130 & platforms != 41 & platforms != 5 & platforms != 37 & platforms != 20 & platforms != 21 & platforms != 4 & platforms != 19 & platforms != 18);
            limit 10;`;
  } else if (type === "main") {
    body = `fields name, artworks.url, cover.url, first_release_date, summary, 
              total_rating, rating, rating_count, genres.name, platforms.name, videos.video_id;
            sort total_rating desc;
            where total_rating !=null & rating_count > 100 & first_release_date >= ${MonthsAgo(36)} &
            first_release_date <= ${today()} & platforms != null &
               platforms = (6, 48, 49, 167, 169);
            limit 21;`;
  } else if (type === "racing") {
    body = `
                fields name, artworks.url, cover.url, first_release_date, summary, 
                      total_rating, rating, rating_count, genres.name, platforms.name,game_modes.name,
                        themes.name, 
                       videos.video_id;
                sort total_rating desc;
                where total_rating >= 40 
                  & rating_count > 100 &
                  game_modes = (1, 2) &
                  themes != (1, 20, 22, 27)
                  & platforms != null 
                  & platforms = (6, 48, 49, 167, 169)
                     & genres = (10);
                limit 60;
              `;
  } else if (type === "sport") {
    body = `
                fields name, artworks.url, cover.url, first_release_date, summary, 
                      total_rating, rating, rating_count, genres.name, platforms.name,game_modes.name,
                        themes.name, 
                       videos.video_id;
                sort total_rating desc;
                where total_rating != null 
                  & rating_count > 100 &
                  game_modes = (1, 2) &
                  themes != (1, 20, 22, 27)
                  & platforms != null 
                  & platforms = (6, 48, 49, 167, 169)
                     & genres = (14);
                limit 60;
              `;
  } else if (type === "shooter") {
    body = `
                fields name, artworks.url, cover.url, first_release_date, summary, 
                total_rating, rating, rating_count, genres.name, platforms.name,game_modes.name,
                themes.name, 
                videos.video_id;
                sort total_rating desc;
                where total_rating >= 50
                & rating_count > 80 &
                game_modes = (1, 2) &
                themes != (1, 20, 22, 27)
                & platforms != null 
                  & platforms = (6, 48, 49, 167, 169)
                     & genres = (5);
                limit 60;
              `;
  } else if (type === "fight") {
    body = `
                fields name, artworks.url, cover.url, first_release_date, summary, 
                      total_rating, rating, rating_count, genres.name, platforms.name,game_modes.name,
                        themes.name, 
                       videos.video_id;
                sort total_rating desc;
                where total_rating >= 40 
                  & rating_count > 10 &
                  game_modes = (1, 2) &
                  themes != (1, 20, 22, 27)
                  & platforms != null 
                  & platforms = (6, 48, 49, 167, 169)
                     & genres = (4);
                limit 60;
              `;
  } else if (type === "adventure") {
    body = `
                fields name, artworks.url, cover.url, first_release_date, summary, 
                      total_rating, rating, rating_count, genres.name, platforms.name,game_modes.name,
                        themes.name, 
                       videos.video_id;
                sort total_rating desc;
                where total_rating >= 40 
                  & rating_count > 100 &
                  game_modes = (1, 2) &
                  themes != (1, 20, 22, 27)
                  & platforms != null 
                  & platforms = (6, 48, 49, 167, 169)
                     & genres = (31);
                limit 60;
              `;
  }
  try {
    const token = await getTwitchToken();

    const response = await fetch("https://api.igdb.com/v4/games", {
      method: "POST",
      headers: {
        "Client-ID": process.env.TWITCH_CLIENT_ID!,
        Authorization: `Bearer ${token}`,
        Accept: "application/json",
      },
      body,
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Erro IGDB:", error);
      return NextResponse.json(
        { error: "Erro ao buscar dados da IGDB" },
        { status: response.status },
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Erro interno:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
