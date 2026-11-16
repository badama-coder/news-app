import{ ArticleCard } from '@/components/ArticleCard';
import data from "@/data/news.json";
import {Metadata} from "next";
import { ArticleFeed } from '@/components/ArticleFeed';

const firstArticle = data[0];

export const GenerateMetadata: Metadata = {
  openGraph: {
    type: "website",
    siteName: "The Daily",
    title: "The Daily — A fresh perspective",
    description: "A little curiosity goes a long way. Explore 20 sample stories about design, technology, culture, and the world around us.",
    images: [{ url: firstArticle.image, alt: firstArticle.imageAlt }]
  },
};


const Home = () => {

  return (
    <div className="w-screen py-8 px-8 bg-[#FAF9F6]">
      <header>
        <h1 className="text-[10px] text-[#C44724] font-bold mb-2">STAY CURIOUS</h1>
        <h2 className="text-4xl font-bold">The latest stories.</h2>
        <h3 className="text-[#65675F] text-xs w-full flex justify-end mb-6">Big ideas. Fresh voices. Worth your time.</h3>
      </header>
      
      <ArticleFeed/>
      
      
    </div>
  )
}

export default Home;
