import {
  Header,
  Footer,
  CarouselCard,
  AllBlogPost,
  TrendingCardContainer,
} from "@/components";

import { useState, useEffect } from "react";
import { Prev } from "@/icons/Prev";
import { Next } from "@/icons/Next";
import { MyContext } from "@/utils/context";

export default function Home() {
  const [articles, setArticles] = useState([]);
  const [carouselArticles, setCarouselArticles] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [count, setCount] = useState(9);

  const [category, setCategory] = useState("");
  const [index, setIndex] = useState(0);

  const fetchData = () => {
    fetch(`https://dev.to/api/articles?per_page=${count}&tag=${category}`)
      .then((response) => response.json())
      .then((data) => setArticles(data));
  };
  const fetchCarousel = () => {
    fetch("https://dev.to/api/articles?per_page=4&state=fresh")
      .then((response) => response.json())
      .then((data) => setCarouselArticles(data));
  };
  console.log(articles);
  useEffect(() => {
    fetchCarousel();
  }, []);

  // const fetchingDataInUseEffect = ()=> {
  // fetchData();}
  // useEffect [fetchingDataInUseEffect,[]]

  useEffect(() => {
    fetchData();
  }, [count, category]);

  const nextPic = () => {
    if (index == carouselArticles.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const prevPic = () => {
    if (index == 0) {
      setIndex(carouselArticles.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  return (
    <div className=" flex flex-col gap-8">
      <Header setInputValue={setInputValue} />
      <div className=" flex flex-col items-center">
        <CarouselCard article={carouselArticles[index]} />

        <div className=" flex justify-end flex-row w-[1130px] ">
          <button onClick={prevPic}>
            <Prev />
          </button>
          <button onClick={nextPic}>
            <Next />
          </button>
        </div>
      </div>
      <TrendingCardContainer />
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
