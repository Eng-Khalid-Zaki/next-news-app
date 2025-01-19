import NewsList from "@/components/news-list";
import { getNewsForYear } from "@/lib/news";
import { notFound } from "next/navigation";
import React from "react";

function FilteredNewsPage({ params }) {
  const newsYear = params.years;
  const news = getNewsForYear(newsYear);

  if (news.length === 0) {
    notFound();
  }

  return (
    <>
      <h2>Filtered Page</h2>
      <NewsList news={news} />
    </>
  );
}

export default FilteredNewsPage;
