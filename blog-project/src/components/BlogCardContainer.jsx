import { BlogCard } from "./BlogCard";
import { Header } from "./Header";

export const BlogCardContainer = ({ articles, inputValue }) => {
  const filteredArticles = articles.filter((article) => {
    let inputValueUpper = inputValue.toUpperCase();
    let articleTitle = article.title.toUpperCase();
    return articleTitle.includes(inputValueUpper);

    // article.title == inputValue
  });
  return (
    <div className=" w-full ">
      <div className=" font-bold">All Blog Post</div>
      <div className="flex flex-wrap gap-5 justify-center items-center">
        {filteredArticles?.map((article, index) => {
          return (
            <div className="ml-10">
              <div>
                <BlogCard
                  img={article.social_image}
                  tag={article.tags}
                  title={article.title}
                  user={article.user.username}
                  key={index}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div>
        <button className="border-2 ml-40">Load More</button>
      </div>
    </div>
  );
};
