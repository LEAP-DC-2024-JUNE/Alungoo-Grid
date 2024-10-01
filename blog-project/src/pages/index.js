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
  const [count, setCount] = useState(9);
  const [category, setCategory] = useState("");
  const [trendingArticle, setTrendingArticle] = useState("");

  const fetchData = () => {
    fetch(
      `https://dev.to/api/articles?per_page=${count}&tag=${category}&tag=${trendingArticle}&per_page=4`
    )
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };

  // const fetchingDataInUseEffect = ()=> {
  // fetchData();}
  // useEffect [fetchingDataInUseEffect,[]]

  useEffect(() => {
    fetchData();
  }, [count, category]);

  return (
    <div>
      <Header setInputValue={setInputValue} />

      <CarouselCard />
      <TrendingCard
        trendginArticle={trendingArticle}
        setTrendingArticle={setTrendingArticle}
        articles={articles}
      />
      <AllBlogPost
        articles={articles}
        inputValue={inputValue}
        count={count}
        setCount={setCount}
        category={category}
        setCategory={setCategory}
      />
      <Footer />
    </div>
  );
}
