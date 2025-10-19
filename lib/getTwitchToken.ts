let cachedToken: string | null = null;
let tokenExpiration: number | null = null;

export async function getTwitchToken() {
  if (cachedToken && tokenExpiration && Date.now() < tokenExpiration) {
    return cachedToken;
  }

  console.log("🔄 Solicitando novo token da Twitch...");

  const res = await fetch(
    `https://id.twitch.tv/oauth2/token?client_id=${process.env.TWITCH_CLIENT_ID}&client_secret=${process.env.TWITCH_CLIENT_SECRET}&grant_type=client_credentials`,
    { method: "POST" }
  );

  if (!res.ok) {
    throw new Error("❌ Falha ao gerar novo token da Twitch");
  }

  const data = await res.json();

  cachedToken = data.access_token;
  tokenExpiration = Date.now() + data.expires_in * 1000;

  console.log("✅ Novo token gerado com sucesso!");
  return cachedToken;
}
