import { Header } from "@/components";
import { BlogCardContainer } from "@/components/BlogCardContainer";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

const BlogLists = () => {
  const [articles, setArticles] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const fetchData = () => {
    fetch(" https://dev.to/api/articles?per_page=12")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(articles);

  return (
    <div>
      <div>
        <Header setInputValue={setInputValue} />
      </div>
      <BlogCardContainer articles={articles} inputValue={inputValue} />
      <Footer />
    </div>
  );
};
export default BlogLists;
