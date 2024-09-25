import { BlogCard } from "@/components";
import { useState, useEffect } from "react";

const BlogLists = () => {
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
    <div className="flex flex-wrap gap-10 m-5">
      {articles?.map((article) => {
        return (
          <div>
            <BlogCard
              img={article.social_image}
              tag={article.tags}
              title={article.title}
              user={article.user.username}
            />
          </div>
        );
      })}
    </div>
  );
};
export default BlogLists;
