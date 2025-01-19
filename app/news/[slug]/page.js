"use client";
import React from "react";
import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import { DUMMY_NEWS } from "@/dummy-news";

function NewsItem() {
  const { slug } = useParams();
  const slugItem = DUMMY_NEWS.find((slugItem) => slugItem.slug === slug);

  if (!slugItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <img src={`/images/news/${slugItem.image}`} alt={slugItem.title} />
        <h1>{slugItem.title}</h1>
        <time dateTime={slugItem.date}>{slugItem.date}</time>
      </header>
      <p>{slugItem.content}</p>
    </article>
  );
}

export default NewsItem;
