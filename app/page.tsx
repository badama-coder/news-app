import{ ArticleCard } from '@/components/ArticleCard';
import data from "@/data/news.json";

const Home = () => {
  return (
    <div className="container mx-auto py-8">
      <header>
        <h1 className="text-[10px] text-[#C44724] font-bold mb-2">STAY CURIOUS</h1>
        <h2 className="text-3xl font-semibold mb-2">The latest stories.</h2>
      </header>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
