import { notFound } from "next/navigation";

import { DUMMY_NEWS } from "@/dummy-news";

function ImagePage({ params }) {
  const slug = params.slug;
  const slugItem = DUMMY_NEWS.find((slugItem) => slugItem.slug === slug);

  if (!slugItem) {
    notFound();
  }

  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${slugItem.image}`} alt={slugItem.title} />
    </div>
  );
}

export default ImagePage;
