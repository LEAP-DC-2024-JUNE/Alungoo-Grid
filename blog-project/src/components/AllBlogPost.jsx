import { BlogCard } from "./BlogCard";

export const AllBlogPost = ({ articles, index }) => {
  return (
    <>
      <p>All Blog Post</p>
      <div className=" grid grid-cols-3 gap-2 px-40 py-5">
        {articles.map((article) => {
          return (
            <div>
              <div className=" flex font-semibold">
                <span>{articles.tags}</span>
                <span>{articles.tags}</span>
                <span>{articles.tags}</span>
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
    </>
  );
};
