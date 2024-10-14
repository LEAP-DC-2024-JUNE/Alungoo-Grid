import "@/styles/globals.css";
import { Next } from "@/icons/Next";
import { MyContext } from "@/utils/context";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }) {
  const [count, setCount] = useState(12);
  const [articlesBlogList, setArticlesBlogList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const fetchData = () => {
    fetch(` https://dev.to/api/articles?per_page=${count}`)
      .then((response) => response.json())
      .then((data) => setArticlesBlogList(data));
  };
  useEffect(() => {
    fetchData();
  }, [count]);
  return (
    <MyContext.Provider
      value={{
        count,
        setCount,
        articlesBlogList,
        setArticlesBlogList,
        inputValue,
        setInputValue,
      }}
    >
      <Component {...pageProps} />
    </MyContext.Provider>
  );
}
