import NewsList from "@/components/news-list";
import { getAvailableNewsYears, getNewsForYear } from "@/lib/news";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";

function FilteredNewsPage({ params }) {
  const filter = params.filter;
  const newsYear = filter[0];
  const years = getAvailableNewsYears();
  const news = getNewsForYear(newsYear);

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {years.map((year) => (
              <li key={year}>
                <Link href={`/archive/${year}`}>{year}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      {news.length > 0 ? (
        <NewsList news={news} />
      ) : (
        <p>No news for year {newsYear}</p>
      )}
    </>
  );
}

export default FilteredNewsPage;
