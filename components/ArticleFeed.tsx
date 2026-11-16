"use client";
import { useState, MouseEvent } from "react";
import data from "@/data/news.json";
import { ArticleCard } from "./ArticleCard";

const categories = ["All stories", ...new Set(data.map((article) => article.category))];

export const ArticleFeed = () => {
  const [category, setCategory] = useState("All stories");

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setCategory(event.currentTarget.id);
  };
  
  const filtered = data.filter((article) => category === "All stories" || article.category === category);
  
  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-2 py-4 border-t border-b border-[#E2E2DA] items-baseline text-xs text-[#65675F]">
        {categories.map((categor) => (
        <div className="">
           <button id={categor} onClick={handleClick} key={categor} className={`px-3 py-2.5 rounded-sm cursor-pointer ${categor === category ? "bg-black text-white" : "hover:bg-gray-200"}`}>{categor}</button> 
        </div>
      ))}
      </div>
      <div className="text-xs text-[#65675F] py-[20px]">20 stories to explore</div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-8">
        {filtered.map((article) => (
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
  );
};

