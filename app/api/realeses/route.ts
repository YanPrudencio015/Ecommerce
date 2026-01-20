import { NextResponse } from "next/server";

export async function GET() {
  try {
    // 1. Validate API key exists
    if (!process.env.RAWG_KEY) {
      console.error('❌ ERRO: RAWG_KEY não está definida!');
      return NextResponse.json(
        { error: "API key not configured" },
        { status: 500 }
      );
    }

    // 2. Get date range
    const today = new Date().toISOString().split('T')[0];
    const oneYearLater = new Date();
    oneYearLater.setFullYear(oneYearLater.getFullYear() + 1);
    const futureDate = oneYearLater.toISOString().split('T')[0];

    // 3. Build URL correctly - RAWG uses 'key' not 'api_key'
    // const url = `https://api.rawg.io/api/params?key=${process.env.RAWG_KEY}`;
    const url = `https://api.rawg.io/api/games?key=${process.env.RAWG_KEY}&dates=${today},${futureDate}&platforms=18,1,7&ordering=-released&page_size=10`;
    
    console.log('\n📡 URL construída:', url.replace(process.env.RAWG_KEY, 'HIDDEN_KEY'));

    // 4. Fetch with headers
    const response = await fetch(url, {
      method: "GET",
      headers: {
        'Accept': 'application/json',
      },
      // Add cache control for better performance
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    console.log('📊 Response status:', response.status);

    // 5. Check if response is actually JSON
    const contentType = response.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      const textResponse = await response.text();
      console.error('❌ Expected JSON but got:', contentType);
      console.error('Response preview:', textResponse.substring(0, 200));
      
      return NextResponse.json(
        { 
          error: "API returned non-JSON response",
          details: "Check your API key validity"
        },
        { status: 500 }
      );
    }

    if (!response.ok) {
      const errorData = await response.json();
      console.error('❌ API Error:', errorData);
      throw new Error(`API error: ${response.status}`);
    }

    const data = await response.json();
    
    console.log('✅ Games found:', data.results?.length || 0);
    
    return NextResponse.json(data);

  } catch (error: any) {
    console.error('\n❌ ERRO:', error.message);
    return NextResponse.json(
      { 
        error: "Failed to fetch games",
        message: error.message 
      },
      { status: 500 }
    );
  }
}