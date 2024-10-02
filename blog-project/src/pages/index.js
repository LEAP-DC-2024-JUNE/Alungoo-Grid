import {
  Header,
  Footer,
  CarouselContainer,
  AllBlogPost,
  TrendingCardContainer,
} from "@/components";
import { useState, useEffect } from "react";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(9);
  const [category, setCategory] = useState("");

  const fetchData = () => {
    fetch(`https://dev.to/api/articles?per_page=${count}&tag=${category}`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };
  console.log(category);
  // const fetchingDataInUseEffect = ()=> {
  // fetchData();}
  // useEffect [fetchingDataInUseEffect,[]]

  useEffect(() => {
    fetchData();
  }, [count, category]);

  return (
    <div>
      <Header setInputValue={setInputValue} />
      <CarouselContainer />
      {/* <TrendingCardContainer /> */}
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
