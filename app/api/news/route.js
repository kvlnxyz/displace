import { NextResponse } from "next/server";
const news_key = process.env.NEWS_KEY;
const query = "maui";
const result_count = 12;

const get_news = async () => {
  const response = await fetch(
    `https://newsapi.org/v2/everything?q=${query}&apiKey=${news_key}&pageSize=${result_count}`
  );
  const news = await response.json();
  return news;
};

export async function GET() {
  const news = await get_news();

  return NextResponse.json(news);
}
