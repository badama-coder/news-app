import data from "@/data/news.json";
import {notFound} from "next/navigation";

type ArticleDetailPageType = {
params: Promise<{ slug: string }>;
};

export const generateStaticParams = () => {
    return data.map((article) => ({
        slug: article.slug,
    }));
}

const ArticleDetailPage = async ({params}:ArticleDetailPageType) => {
    const {slug} = await params;
    const foundArticle = data.find((article) => article.slug === slug);
    
    if (!foundArticle) {
        notFound();
    }

    return <div>{foundArticle?.title}</div>;
};

export default ArticleDetailPage;