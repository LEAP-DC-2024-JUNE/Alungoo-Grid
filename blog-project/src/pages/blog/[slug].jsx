import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Footer, Header } from "@/components";
import { useRouter } from "next/router";
import moment from "moment/moment";

const singlePost = ({ name, data }) => {
  // const [singleArticle, setSingleArticle] = useState({});
  // // const searchParam = useSearchParams();
  // // const value = searchParam.get("selectedId");

  // const router = useRouter();
  // const fetchData = async () => {
  //   await fetch(` https://dev.to/api/articles/${router.query.slug}`)
  //     .then((response) => response.json())
  //     .then((data) => setSingleArticle(data));
  // };

  // console.log(data);
  // useEffect(() => {
  //   fetchData();
  // }, [router.query.slug]);

  return (
    <>
      <Header />
      <div className=" flex flex-col items-start  py-5 px-[700px] pb-10">
        <p className=" font-bold text-3xl">{data.title}</p>
        <p className=" font-bold text-3xl">{name}</p>

        <div className=" flex gap-9 py-5 items-center">
          <div className=" flex gap-9 py-5 items-center">
            <img
              src={data?.user?.profile_image}
              width={40}
              className=" rounded-full"
            />
            <p className=" text-sm text-[#696A75] font-medium">
              {data?.user?.name}
            </p>
            <p className=" text-sm text-[#696A75] font-medium">
              {moment(data.readable_publish_date).format("MMM Do YYYY")}
            </p>
          </div>
        </div>
        <div>
          <img src={data.social_image} className=" rounded-lg" />
        </div>

        <div
          dangerouslySetInnerHTML={{ __html: data.body_html }}
          className=" text-xl text-[#3B3C4A] font-normal py-10"
        ></div>
      </div>

      <Footer />
    </>
  );
};

export const getServerSideProps = async ({ query }) => {
  console.log(query);
  let name = "Alungoo bn";
  console.log(name);
  const data = await fetch(`https://dev.to/api/articles/${query.slug}`).then(
    (response) => response.json()
  );
  return {
    props: {
      name,
      data,
    },
  };
};
export default singlePost;
