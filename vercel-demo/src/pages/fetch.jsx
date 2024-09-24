import { useState, useEffect } from "react";

export default function Fetch() {
  const [articles, setArticles] = useState([]);

  const fetchData = () => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(articles);
  return (
    <div>
      {articles.map((article) => {
        return (
          <div>
            <img src={article.social_image} />
            <p>{article.title}</p>
          </div>
        );
      })}
    </div>
  );
}
