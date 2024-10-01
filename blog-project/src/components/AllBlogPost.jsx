import { BlogCard } from "./BlogCard";

export const AllBlogPost = ({ articles, inputValue, count, setCount }) => {
  const filteredArticles = articles.filter((article) => {
    return article.title.toUpperCase().includes(inputValue.toUpperCase());
  });
  const loadMore = () => {
    setCount(count + 3);
  };

  return (
    <>
      <p className=" font-bold px-44 py-10 text-xl text-center">
        All Blog Post
      </p>
      <div className=" flex flex-col items-center">
        <div className=" grid grid-cols-3 gird-row-3 gap-2 px-40 py-5">
          {filteredArticles.map((article, index) => {
            return (
              <div>
                <div className=" flex font-semibold">
                  {/* <span>{article.tags}</span>
                <span>{article.tags}</span>
                <span>{article.tags}</span> */}
                </div>

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
