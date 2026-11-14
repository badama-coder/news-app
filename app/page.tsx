import{ ArticleCard } from '@/components/ArticleCard';
import data from "@/data/news.json";
import {Metadata} from "next";

const firstArticle = data[0];

export const GenerateMetadata: Metadata = {
  openGraph: {
    type: "website",
    siteName: "The Daily",
    title: "The Daily — A fresh perspective",
    description: "A little curiosity goes a long way. Explore 20 sample stories about design, technology, culture, and the world around us.",
    images: firstArticle ? [{ url: firstArticle.image, alt: firstArticle.imageAlt }] : [],
  },
};


const Home = () => {
  return (
    <div className="w-screen py-8 px-8 bg-[#FAF9F6]">
      <header>
        <h1 className="text-[10px] text-[#C44724] font-bold mb-2">STAY CURIOUS</h1>
        <h2 className="text-4xl font-bold mb-6">The latest stories.</h2>
      </header>
      <div className="flex flex-wrap gap-1 py-4 border-t border-b border-[#E2E2DA] items-baseline text-xs text-[#65675F]">
        <div className="bg-[#22241F] text-white px-3 py-[10px] rounded-[4px]">All stories</div>
        <div className="px-3 py-[10px] rounded-[4px]">World</div>
        <div className="px-3 py-[10px] rounded-[4px]">Technology</div>
        <div className="px-3 py-[10px] rounded-[4px]">Culture</div>
        <div className="px-3 py-[10px] rounded-[4px]">Travel</div>
        <div className="px-3 py-[10px] rounded-[4px]">Design</div>
        <div className="px-3 py-[10px] rounded-[4px]">Science</div>
        <div className="px-3 py-[10px] rounded-[4px]">Business</div>
      </div>
      <div className="text-xs text-[#65675F] py-[20px]">20 stories to explore</div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
        {data.map((article) => (
          <ArticleCard
            key={article.id}
            id={article.id}
            slug={article.slug}
            title={article.title}
            description={article.description}
            image={article.image}
            imageAlt={article.imageAlt}
            category={article.category}
            author={article.author}
            date={article.date}
            content={[
              article.content[0],
              article.content[1],
              article.content[2]
            ]}
          />
        ))}
      </div>
    </div>
  )
}

export default Home;
