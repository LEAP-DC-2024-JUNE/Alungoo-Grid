import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Footer, Header } from "@/components";
import { useRouter } from "next/router";
import moment from "moment/moment";

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
    <>
      <Header />
      <div className=" flex flex-col items-start  py-5 px-[700px] pb-10">
        <p className=" font-bold text-3xl">{singleArticle.title}</p>

        <div className=" flex gap-9 py-5 items-center">
          <div className=" flex gap-9 py-5 items-center">
            <img
              src={singleArticle?.user?.profile_image}
              width={40}
              className=" rounded-full"
            />
            <p className=" text-sm text-[#696A75] font-medium">
              {singleArticle?.user?.name}
            </p>
            <p className=" text-sm text-[#696A75] font-medium">
              {moment(singleArticle.readable_publish_date).format(
                "MMM Do YYYY"
              )}
            </p>
          </div>
        </div>
        <div>
          <img src={singleArticle.social_image} className=" rounded-lg" />
        </div>

        <div
          dangerouslySetInnerHTML={{ __html: singleArticle.body_html }}
          className=" text-xl text-[#3B3C4A] font-normal py-10"
        ></div>
      </div>

      <Footer />
    </>
  );
};
export default singlePost;
