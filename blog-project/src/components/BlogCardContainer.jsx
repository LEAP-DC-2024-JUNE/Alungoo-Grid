import { BlogCard } from "./BlogCard";

export const BlogCardContainer = ({ articles, inputValue }) => {
  const filteredArticles = articles.filter((article) => {
    let inputValueUpper = inputValue.toUpperCase();
    let articleTitle = article.title.toUpperCase();
    return articleTitle.includes(inputValueUpper);
    // article.title == inputValue
  });
  console.log(articles);
  return (
    <div className=" w-full ">
      <div className=" font-bold px-40 py-10 text-xl">All Blog Post</div>
      <div className="grid grid-cols-3 gap-5 px-40 py-5">
        {filteredArticles.map((article, index) => {
          return (
            <>
              <BlogCard
                img={article.social_image}
                tag={article.tags}
                title={article.title}
                user={article.user.name}
                publishDate={article.readable_publish_date}
                key={index}
                withPic={true}
              />
            </>
          );
        })}
      </div>
      <div className=" py-10 text-center">
        <button className="border-2  px-3 py-1">Load More</button>
      </div>
    </div>
  );
};
