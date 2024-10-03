import { useState, useEffect } from "react";
import { CarouselCard } from "./CarouselCard";

export const CarouselContainer = () => {
  const [articles, setArticles] = useState([]);
  const fetchData = () => {
    fetch("https://dev.to/api/articles?per_page=3")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };
  console.log(articles);
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {articles.map((article) => {
        return (
          <div className="  ">
            <div className=" flex flex-col items-center">
              <CarouselCard
                img={article.social_image}
                tags={article.tags}
                title={article.title}
                publishDate={article.readable_publish_date}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};
