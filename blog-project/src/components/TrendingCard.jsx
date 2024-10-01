import { BlogCard } from "./BlogCard";

export const TrendingCard = ({
  trendingArticle,
  setTrendingArticle,
  articles,
}) => {
  return (
    <div className=" w-full">
      <p>Trending</p>
      <div className=" flex flex-col items-center">
        <div className="flex w-[1220px]">
          {articles.map((article, index) => {
            return (
              <>
                <BlogCard
                  article={article.social_image}
                  tags={article.tags}
                  title={article.title}
                  key={index}
                />
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};
