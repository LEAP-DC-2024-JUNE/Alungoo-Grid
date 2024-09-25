import { BlogCard } from "./BlogCard";

export const BlogCardContainer = ({ articles }) => {
  return (
    <div className=" w-3/4 border-2 ml-20">
      <div className=" font-bold">All Blog Post</div>
      <div className="flex flex-wrap gap-5 m-5">
        {articles?.map((article, index) => {
          return (
            <div className="ml-10">
              <BlogCard
                img={article.social_image}
                tag={article.tags}
                title={article.title}
                user={article.user.username}
                key={index}
              />
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
