"use client";
import { useEffect } from "react";

const Test = () => {
  const fetchData = () => {
    fetch("https://dev.to/api/articles?per_page=1")
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  return <div>contact page bn</div>;
};
export default Test;
