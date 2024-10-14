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
      <div className=" flex flex-col gap-5 items-center py-20">
        <p className=" font-bold text-3xl w-[900px]">{data.title}</p>
        {/* <p className=" font-bold text-3xl">{name}</p> */}

        <div className=" flex gap-9 py-5 w-[900px]">
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
        <div>
          <img src={data.social_image} width={900} className=" rounded-lg" />
        </div>

        <div
          dangerouslySetInnerHTML={{ __html: data.body_html }}
          className=" text-xl text-[#3B3C4A] font-normal py-4 w-[900px]"
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
