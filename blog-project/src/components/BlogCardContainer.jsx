import { MyContext } from "@/utils/context";
import { BlogCard } from "./BlogCard";
import { useContext } from "react";

export const BlogCardContainer = () => {
  const { articlesBlogList, count, setCount, inputValue } =
    useContext(MyContext);
  const filteredArticles = articlesBlogList.filter((article) => {
    let inputValueUpper = inputValue.toUpperCase();
    let articleTitle = article.title.toUpperCase();
    return articleTitle.includes(inputValueUpper);
    // article.title == inputValue
  });

  const loadMore = () => {
    setCount(count + 3);
  };

  if (filteredArticles.length == 0) {
    return (
      <div className=" flex items-center justify-center py-40">
        <img src="https://i.pinimg.com/736x/37/b3/98/37b39834414977701d0b9094a4ed81bb.jpg" />
      </div>
    );
  } else
    return (
      <div className=" flex flex-col gap-1 max-[1220px] px-[452px]">
        <div className=" font-bold py-10 text-xl ">All Blog Post</div>
        <div>
          <div>
            <div className="grid grid-cols-3 grid-rows-4 gap-8 ">
              {filteredArticles.map((article, index) => {
                return (
                  <>
                    <BlogCard
                      id={article.id}
                      img={article.social_image}
                      profImg={article.user.profile_image}
                      tags={article.tag_list}
                      title={article.title}
                      user={article.user.name}
                      publishDate={article.readable_publish_date}
                      key={index}
                    />
                  </>
                );
              })}
            </div>
            <div className=" py-10 text-center">
              <button className="border-2  px-3 py-1" onClick={loadMore}>
                Load More
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};
