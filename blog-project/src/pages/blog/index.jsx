import { BlogCardContainer } from "@/components/BlogCardContainer";
import { useState, useEffect } from "react";

const BlogLists = () => {
  const [articles, setArticles] = useState([]);

  const fetchData = () => {
    fetch("https://dev.to/api/articles?per_page=9")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(articles);
  return (
    <div>
      <BlogCardContainer articles={articles} />
    </div>
  );
};
export default BlogLists;
