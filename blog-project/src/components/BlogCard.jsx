import Link from "next/link";
import moment from "moment/moment";

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
    // <Link href={{ pathname: "/blog/singlePost", query: { selectedId: id } }}>
    <Link href={`/blog/${id}`}>
      <div
        key={key}
        className=" border-[1px] w-[372px] h-[476px] rounded-t-lg rounded-b-lg flex flex-col items-start justify-evenly px-[10px]"
      >
        <img
          className=" w-[360px] h-[240px] rounded-t-lg rounded-b-lg"
          src={img}
        />

        <div className=" text-blue-600 bg-blue-50 rounded-xl text-sm text-center">
          {tags && tags[0]}
        </div>

        <div className=" font-bold">{title.slice(0, 40) + "..."}</div>
        <div className=" flex flex-row gap-5 items-center ">
          <div>
            <img src={profImg} width={40} className=" rounded-full" />
          </div>
          <div className=" text-sm text-slate-500"> {user}</div>
          <div className="text-sm text-slate-500">
            {" "}
            {moment(publishDate).format("MMM Do YYYY")}
          </div>
        </div>
      </div>
    </Link>
  );
};
