import {
  Header,
  Footer,
  CarouselCard,
  TrendingCard,
  AllBlogPost,
} from "@/components";
import { useState, useEffect } from "react";

export default function Home() {
  const [articles, setArticles] = useState([]);
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
      <Header />

      {/* <CarouselCard /> */}
      {/* <TrendingCard /> */}
      <AllBlogPost articles={articles} />
      <Footer />
    </div>
  );
}
