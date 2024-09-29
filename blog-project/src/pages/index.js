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
    fetch(" https://dev.to/api/articles?per_page=9")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <Header setInputValue={setInputValue} />

      <CarouselCard />
      <TrendingCard />
      <AllBlogPost articles={articles} inputValue={inputValue} />
      <Footer />
    </div>
  );
}
