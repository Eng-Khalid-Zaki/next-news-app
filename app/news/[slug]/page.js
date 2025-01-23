import { notFound } from "next/navigation";
import { DUMMY_NEWS } from "@/dummy-news";
import Link from "next/link";

function NewsItem({ params }) {
  const newsSlug = params.slug;
  const slugItem = DUMMY_NEWS.find((slugItem) => slugItem.slug === newsSlug);

  if (!slugItem) {
    notFound();
  }

  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${slugItem.slug}/image`}>
          <img src={`/images/news/${slugItem.image}`} alt={slugItem.title} />
        </Link>
        <h1>{slugItem.title}</h1>
        <time dateTime={slugItem.date}>{slugItem.date}</time>
      </header>
      <p>{slugItem.content}</p>
    </article>
  );
}

export default NewsItem;
