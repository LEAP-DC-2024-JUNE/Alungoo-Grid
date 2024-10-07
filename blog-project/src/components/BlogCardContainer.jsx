import { BlogCard } from "./BlogCard";

export const BlogCardContainer = ({
  articles,
  inputValue,
  setCount,
  count,
}) => {
  const filteredArticles = articles.filter((article) => {
    let inputValueUpper = inputValue.toUpperCase();
    let articleTitle = article.title.toUpperCase();
    return articleTitle.includes(inputValueUpper);
    // article.title == inputValue
  });

  const loadMore = () => {
    setCount(count + 3);
  };
  console.log(articles);

  if (filteredArticles.length == 0) {
    return (
      <div className=" font-bold flex items-center justify-center py-40">
        Oops, No Results found
      </div>
    );
  } else
    return (
      <>
        <div className=" font-bold py-10 text-xl text-center">
          All Blog Post
        </div>
        <div className=" flex flex-col items-center ">
          <div className=" w-[1220px]">
            <div className="grid grid-cols-3 grid-rows-4 gap-4 ">
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
      </>
    );
};
