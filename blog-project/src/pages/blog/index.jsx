import { Header } from "@/components";
import { BlogCardContainer } from "@/components/BlogCardContainer";
import { Footer } from "@/components/Footer";
import { useState, useEffect } from "react";

const BlogLists = () => {
  // const [articles, setArticles] = useState([]);
  // const [inputValue, setInputValue] = useState("");
  // const [count, setCount] = useState(12);

  // const fetchData = () => {
  //   fetch(` https://dev.to/api/articles?per_page=${count}`)
  //     .then((response) => response.json())
  //     .then((data) => setArticles(data));
  // };

  // useEffect(() => {
  //   fetchData();
  // }, [count]);

  return (
    <div>
      <div>
        <Header />
      </div>
      <BlogCardContainer />
      <Footer />
    </div>
  );
};
export default BlogLists;
