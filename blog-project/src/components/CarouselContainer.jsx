import { useState, useEffect } from "react";
import { CarouselCard } from "./CarouselCard";

export const CarouselContainer = () => {
  const [articles, setArticles] = useState([]);
  const fetchData = () => {
    fetch("https://dev.to/api/articles?per_page=3")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      {articles.map((article) => {
        return (
          <div>
            <CarouselCard
              img={article.social_image}
              tags={article.tags}
              title={article.title}
              publishDate={article.readable_publish_date}
            />
          </div>
        );
      })}
    </div>
  );
};
