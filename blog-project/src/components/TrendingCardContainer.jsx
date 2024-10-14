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
    <div className=" flex flex-col gap-1 items-center ">
      <p className="  font-bold text-2xl  w-[1130px] py-10 ">Trending</p>
      <div className="flex gap-5 ">
        {articles.map((article, index) => {
          return (
            <>
              <TrendingSingleCard
                image={article.social_image}
                tags={article.type_of}
                title={article.title}
                key={index}
                id={article.id}
              />
            </>
          );
        })}
      </div>
    </div>
  );
};
