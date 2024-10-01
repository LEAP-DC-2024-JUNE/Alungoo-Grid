import {
  Header,
  Footer,
  CarouselCard,
  AllBlogPost,
  TrendingCard,
} from "@/components";
import { useState, useEffect } from "react";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const fetchData = () => {
    fetch(` https://dev.to/api/articles?per_page=${count}`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };
  const [count, setCount] = useState(9);
  useEffect(() => {
    fetchData();
  }, [count]);

  return (
    <div>
      <Header setInputValue={setInputValue} />

      <CarouselCard />
      <TrendingCard />
      <AllBlogPost
        articles={articles}
        inputValue={inputValue}
        count={count}
        setCount={setCount}
      />
      <Footer />
    </div>
  );
}
