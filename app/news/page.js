import React from "react";
import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";
import Image from "next/image";
import NewsList from "@/components/news-list";

function News() {
  return (
    <>
      <h1>News Page</h1>
      <NewsList news={DUMMY_NEWS} />
    </>
  );
}

export default News;
