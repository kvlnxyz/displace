"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const get_news = async () => {
      const res = await fetch("/api/news");
      const res_obj = await res.json();
      console.log(res_obj);
    };

    get_news();
  }, []);

  return (
    <div>
      <div>Displacement</div>
    </div>
  );
}
