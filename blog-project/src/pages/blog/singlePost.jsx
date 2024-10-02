import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Footer, Header } from "@/components";

const singlePost = () => {
  const [singleArticle, setSingleArticle] = useState({});
  const searchParam = useSearchParams();
  const value = searchParam.get("selectedId");

  const fetchData = () => {
    fetch(` https://dev.to/api/articles/${value}`)
      .then((response) => response.json())
      .then((data) => setSingleArticle(data));
  };
  useEffect(() => {
    fetchData();
  }, [value]);

  return (
    <div>
      <div>
        <Header />
      </div>
      {/* <div className=" font-bold">{singleArticle.title}</div> */}
      <div dangerouslySetInnerHTML={{ __html: singleArticle.body_html }}></div>
      <div>
        <Footer />
      </div>
    </div>
  );
};
export default singlePost;
