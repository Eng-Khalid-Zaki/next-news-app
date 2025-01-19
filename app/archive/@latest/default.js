import NewsList from "@/components/news-list";
import React from "react";
import { getLatestNews } from "@/lib/news";
function LatestArchive() {
  const news = getLatestNews();
  return (
    <>
      <h2>Latest Page</h2>
      <NewsList news={news} />
    </>
  );
}

export default LatestArchive;
