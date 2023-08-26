"use client";

import { useEffect, useState } from "react";
import Window from "./components/Window";

export default function Home() {
  const [articles, setArticles] = useState<any>();

  useEffect(() => {
    const get_news = async () => {
      const res = await fetch("/api/news");
      const res_obj = await res.json();

      console.log(res_obj);

      let articles: any = [];

      for (let i = 0; i < res_obj.articles.length; i++) {
        const article = res_obj.articles[i];

        const window = (
          <Window
            title={article.title}
            url={article.url}
            image={article.urlToImage}
          />
        );

        articles.push(window);
      }

      setArticles(articles);
    };

    get_news();
  }, []);

  return (
    <div>
      <div>Displacement</div>

      <div className="flex flex-wrap justify-center">{articles}</div>
    </div>
  );
}
