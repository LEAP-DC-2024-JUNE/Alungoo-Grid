import { BlogCard } from "./BlogCard";

export const AllBlogPost = ({
  articles,
  inputValue,
  count,
  setCount,
  setCategory,
  category,
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
    <>
      <p className=" font-bold px-44 py-10 text-xl text-center">
        All Blog Post
      </p>
      <div className=" flex gap-10 font-bold px-40 py-10">
        <button>All</button>
        <button onClick={() => filteredCategory("javascript")}>
          Javascript
        </button>
        <button onClick={() => filteredCategory("css")}>CSS</button>
        <button onClick={() => filteredCategory("nextjs")}>NextJS</button>
      </div>
      <div className=" flex flex-col items-center">
        <div className=" grid grid-cols-3 gird-row-3 gap-2 px-40 py-5">
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
    </>
  );
};
