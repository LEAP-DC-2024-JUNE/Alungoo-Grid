"use client";

import { useEffect } from "react";

const MyComponent = () => {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://127.0.0.1:8000/api");
      const data = await response.json();
      console.log(data);
    };

    fetchData();
  }, []);

  return <div>Check the console for data!</div>;
};
export default MyComponent;
