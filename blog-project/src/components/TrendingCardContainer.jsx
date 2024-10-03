import { useEffect, useState } from "react";
import { TrendingSingleCard } from "./TrendingSingleCard";

export const TrendingCardContainer = () => {
  const [articles, setArticles] = useState([]);
  const fetchData = () => {
    fetch(`https://dev.to/api/articles?tag=trending&per_page=4`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };
  console.log(fetchData);

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="">
      <p className="  font-bold text-xl px-[550px] py-10">Trending</p>
      <div className=" flex flex-col items-center">
        <div className="flex w-[1216px] gap-3">
          {articles.map((article, index) => {
            return (
              <>
                <TrendingSingleCard
                  image={article.social_image}
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
