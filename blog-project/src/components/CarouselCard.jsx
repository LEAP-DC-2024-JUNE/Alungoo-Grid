import Link from "next/link";

export const CarouselCard = ({ article }) => {
  if (!article) {
    return null;
  }

  return (
    <Link href={`/blog/${article.id}`}>
      <div className="relative ">
        <div className=" rounded-lg">
          <img
            width={1180}
            height={640}
            src={article.social_image}
            className=" rounded-xl  h-[500px] brightness-50"
          />
        </div>

        <div className=" items-start pl-10 gap-6 bg-gray-50 w-[580px] h-[250px] absolute bottom-2 left-3 flex flex-col justify-center shadow-xl rounded-xl ">
          <span className="bottom-44 bg-blue-100 text-indigo-500 text-sm rounded-[6px] w-[100px py-1]">
            technology
          </span>
          <span className="bottom-20 font-bold text-4xl ">{article.title}</span>
          <span className="bottom-10 text-gray-600">{article.publishDate}</span>
        </div>
      </div>
    </Link>
  );
};
