import Link from "next/link";
import {Clock} from "lucide-react";
import {ArrowUpRight} from "lucide-react";

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
    <Link href={`/news/${slug}`} className="group block">
      <div className="w-full rounded-2xl bg-white shadow-sm  border border-slate-100 overflow-hidden transition hover:-translate-y-1 hover:border hover:border-[#C44724] hover:shadow-xl duration-400">
        <div className="relative h-48 w-full overflow-hidden">
          <img src={image} alt={imageAlt} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-400" />
          <div className="absolute top-4 left-4 bg-[#ECFDF5] text-[#065F46] text-[10px] py-1.5 px-3 rounded-full uppercase font-bold">{category}</div>
          <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-white text-xs">
            <Clock className="w-4 h-4 text-white" />
            <span>1 min read</span>
          </div>
        </div>
        <div className="p-6 flex flex-col h-[263px] justify-between">
          <div>
            <div className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#C44724]">{title}</div>
          <div className="text-sm text-[#57534E] font-light">{description}</div>
          </div>
          <footer className="flex justify-between items-baseline border-t border-[#E2E2DA]">
            <div className="flex gap-3 items-center mt-4 ">
              <div className="flex justify-center items-center bg-[#FFF7ED] rounded-full size-8">AM</div>
              <div>
                <div className="text-xs font-bold mb-1">{author}</div>
                <div className="text-[11px] text-[#78716C]">{date}</div>
              </div>
            </div>
            <button type="button" className="flex justify-center items-center bg-[#FFF7ED] rounded-full p-2 group-hover:bg-[#C44724] transition-colors duration-200">
              <ArrowUpRight className="w-5 h-5 text-[#C44724] group-hover:text-white" />
            </button>
          </footer>
        </div>
      </div>
    </Link>
  )
}
