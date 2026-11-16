"use client";
import { useState } from "react";
import data from "@/data/news.json";

const categories = ["All stories", ...new Set(data.map((article) => article.category))];

export const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = () => {

  };
  
  return (
    <div className="space-x-3">
      {categories.map((category) => (
        <button onClick={handleClick} key={category}>{category}</button>
      ))}
    </div>
  );
};
