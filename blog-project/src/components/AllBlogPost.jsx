import { BlogCard } from "./BlogCard";

export const AllBlogPost = ({
  articles,
  inputValue,
  count,
  setCount,
  setCategory,
}) => {
  const filteredArticles = articles.filter((article) => {
    return article.title.toUpperCase().includes(inputValue.toUpperCase());
  });
  const loadMore = () => {
    setCount(count + 3);
  };

  const filteredCategory = (param1) => {
    setCategory(param1);
  };

  return (
    <div className=" flex flex-col gap-10 pt-14 items-center ">
      <p className=" font-bold  text-xl text-start w-[1130px]">All Blog Post</p>
      <div className=" flex gap-10 font-bold py-5 text-sm w-[1130px]">
        <button onClick={() => filteredCategory("javascript")}>
          Javascript
        </button>
        <button onClick={() => filteredCategory("css")}>CSS</button>
        <button onClick={() => filteredCategory("nextjs")}>NextJS</button>
      </div>
      <div className=" flex flex-col">
        <div className=" grid grid-cols-3 gap-2  py-2">
          {filteredArticles.map((article, index) => {
            return (
              <div>
                <BlogCard
                  img={article.social_image}
                  tag={article.tags}
                  title={article.title}
                  user={article.user.name}
                  publishDate={article.readable_publish_date}
                  key={index}
                  id={article.id}
                />
              </div>
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
  );
};
