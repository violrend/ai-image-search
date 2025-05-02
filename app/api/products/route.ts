import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q");

  if (!query) {
    return NextResponse.json({ error: "Missing search query" }, { status: 400 });
  }

  const apiKey = process.env.SERPAPI_KEY;
  const params = new URLSearchParams({
    engine: "google_shopping",
    q: query,
    api_key: apiKey!,
  });

  const res = await fetch(`https://serpapi.com/search.json?${params}`);
  const data = await res.json();

  console.log(data);

  const products = data.shopping_results || [];

  return NextResponse.json({ products });
}
