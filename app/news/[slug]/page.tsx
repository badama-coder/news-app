import data from "@/data/news.json";
import {notFound} from "next/navigation";
import {Metadata} from "next";

type ArticleDetailPageType = {
params: Promise<{ slug: string }>;
};

export const generateStaticParams = () => {
    return data.map((article) => ({
        slug: article.slug,
    }));
};

export async function generateMetadata({params}: ArticleDetailPageType): Promise<Metadata> {
    const {slug} = await params;
    const foundArticle = data.find((article) => article.slug === slug);

    if (!foundArticle) {
        return {};
    }

    return {
        title: foundArticle.title,
        description: foundArticle.description,
        openGraph: {
            type: "website",
            siteName: "The Daily",
            title: foundArticle.title,
            description: foundArticle.description,
            images: foundArticle.image ? [{ url: foundArticle.image, alt: foundArticle.imageAlt }] : [],
        },
    };
}

const ArticleDetailPage = async ({params}:ArticleDetailPageType) => {
    const {slug} = await params;
    const foundArticle = data.find((article) => article.slug === slug);
    
    if (!foundArticle) {
        notFound();
    }


    return <div className="w-screen px-5 sm:px-8 lg:px-16 bg-[#FAF9F6]">
        <header className="flex items-center gap-3 text-xs text-[#22241F] border-b border-[#E2E2DA] py-5">
            <span className="font-bold">←  All stories</span>
            <span className="text-[#65675F]">/</span>
            <span className="text-[#65675F]">{foundArticle.category}</span>
        </header>
        <div className="flex flex-col gap-5 lg:px-20">
            <div className="flex items-center gap-3 mt-12">
               <span className="bg-[#ECFDF5] text-[#065F46] text-[10px] py-1.5 px-3 rounded-full uppercase font-bold border border-[#A7F3D0]">{foundArticle.category}</span>  
               <span className="text-[#65675F] text-[11px]">—   THE DAILY</span>
            </div>
            <div className="text-4xl sm:text-5xl lg:7xl font-bold">{foundArticle.title}</div>
            <div className="text-lg sm:text-xl text-[#57534E] mb-6">{foundArticle.description}</div>
        </div>
        <div className="flex justify-between items-center py-5 mb-5 border-t border-[#E2E2DA]">
            <div className="flex gap-3 items-center font-bold">
                <div className="flex justify-center items-center bg-[#FFF7ED] rounded-full p-3 text-sm">AM</div>
                <div className="flex flex-col gap-1.5">
                    <div className="text-[#65675F] text-[10px]">WRITTEN BY</div>
                    <div className="text-sm">{foundArticle.author}</div>
                </div>
            </div>
            <div className="flex gap-6">
                <div className="flex flex-col gap-1.5">
                    <div className="text-[#65675F] text-[10px]">PUBLISHED</div>
                    <div className="text-sm text-[#22241F]">{foundArticle.date}</div>
                </div>
                <div className="flex flex-col gap-1.5">
                    <div className="text-[#65675F] text-[10px]">READING TIME</div>
                    <div className="text-sm text-[#22241F]">1 min read</div>
                </div>
            </div>
        </div>
        <div>
            <img src={foundArticle.image} alt={foundArticle.imageAlt} className="w-full h-64 object-cover sm:h-[352px] lg:h-[515px] rounded-3xl" />
            <div className="flex justify-between items-center mt-3">
                <div className="text-[#65675F] text-[10px]">{foundArticle.imageAlt}</div>
                <div className="text-[#65675F] text-[10px]">Illustrative photography · Unsplash</div>
            </div>
        </div>
        <div className="flex flex-col gap-5 py-14 items-center gap-4">
            <div className="flex flex-col text-lg sm:xl bg-white rounded-3xl p-6 sm:p-10 gap-6 border border-[#E2E2DA]">
                <div className="text-[#C44724] text-[10px] font-bold">━━ THE STORY</div>
                <div className="text-lg sm:text-xl text-[#44403C]">{foundArticle.content[0]}</div>
                <div className="text-lg sm:text-xl text-[#44403C]">{foundArticle.content[1]}</div>
                <div className="text-lg sm:text-xl text-[#44403C]">{foundArticle.content[2]}</div>
                <div className="text-[#C44724] flex w-full justify-center gap-2">•  •  •</div>
            </div>
            <div className="text-[#65675F] text-[11px]">Fictional sample story · The Daily learning edition</div>
            <div className="flex justify-between bg-[#FFF7ED] rounded-3xl p-6 sm:p-10 gap-6 border border-[#E2E2DA] w-full">
                <div>
                    <div className="text-[#22241F] text-lg font-semibold">A little more curiosity?</div>
                    <div className="text-sm text-[#65675F] ">Your next good read is just around the corner.</div>
                </div>
                <button type="button" className="text-white text-xs hover:bg-[#C44724] bg-[#22241F] text-sm px-4 rounded-full">All stories  ↗</button>
            </div>
        </div>
    </div>;
};

export default ArticleDetailPage;
