import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("query");
    const country = searchParams.get("country");

    if (!query || !country) {
      return NextResponse.json(
        { message: "Missing query or country parameter" },
        { status: 400 }
      );
    }

    const cleanQuery = query.trim().replace(/[^\w\s-]/g, "");
    const baseUrl = "https://api.zippopotam.us";
    const apiUrl = `${baseUrl}/${country.toLowerCase()}/${cleanQuery}`;

    const response = await fetch(apiUrl, {
      headers: {
        'Accept': 'application/json',
      },
    });
    
    if (!response.ok) {
      if (response.status === 404) {
        return NextResponse.json(
          { message: `No results found for ${cleanQuery} in the selected country` },
          { status: 404 }
        );
      }
      throw new Error(`API request failed with status ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { 
        message: error instanceof Error ? error.message : "Failed to fetch location data" 
      },
      { status: 500 }
    );
  }
}