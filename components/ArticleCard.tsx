import Link from "next/link";
import {Clock} from "lucide-react";

type ArticleCardType = {
    id: number;
    slug: string;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    category: string;
    author: string;
    date: string;
    content: string[];
};

export const ArticleCard = (props:ArticleCardType) => {
  const {title, description, image, imageAlt, category, author, date, content, slug, id} = props;
    return (
    <Link href={`/news/${slug}`} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
      <div className="bg-white shadow-md rounded-lg p-4">
        {title}
        <div>{description}</div>
        <img src={image} alt={imageAlt} />
        <div>{category}</div>
        <div>{author}</div>
        <div>{date}</div>
        <div>
          {content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        <Clock className="w-4 h-4 text-gray-500" />
      </div>
    </Link>
  )
}
