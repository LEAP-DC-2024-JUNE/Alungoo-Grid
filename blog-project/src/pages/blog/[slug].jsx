import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Footer, Header } from "@/components";
import { useRouter } from "next/router";

const singlePost = () => {
  const [singleArticle, setSingleArticle] = useState({});
  // const searchParam = useSearchParams();
  // const value = searchParam.get("selectedId");

  const router = useRouter();

  const fetchData = async () => {
    await fetch(` https://dev.to/api/articles/${router.query.slug}`)
      .then((response) => response.json())
      .then((data) => setSingleArticle(data));
  };
  useEffect(() => {
    fetchData();
  }, [router.query.slug]);

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
