import Link from "next/link";

export const BlogCard = ({
  img,
  tags,
  title,
  user,
  publishDate,
  key,
  profImg,
  id,
}) => {
  return (
    <Link href={{ pathname: "/blog/singlePost", query: { selectedId: id } }}>
      <div
        key={key}
        className=" border-[1px] w-[392px] h-[476px] rounded-t-lg rounded-b-lg flex flex-col items-center justify-evenly"
      >
        <img
          className=" w-[360px] h-[240px] rounded-t-lg rounded-b-lg"
          src={img}
        />

        <div className=" text-blue-600 bg-blue-50 rounded-xl text-sm text-center">
          {tags && tags[0]}
        </div>

        <div className=" font-bold">{title}</div>
        <div className=" flex flex-row gap-5 ">
          <div>{<img src={profImg} className=" rounded-full" />}</div>
          <div className=" text-sm text-slate-500"> {user}</div>
          <div className="text-sm text-slate-500"> {publishDate}</div>
        </div>
      </div>
    </Link>
  );
};
