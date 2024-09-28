export const BlogCard = ({
  img,
  tag,
  title,
  user,
  profilePic,
  publishDate,
  key,
}) => {
  return (
    <div
      key={key}
      className=" border-[1px] w-[240px] h-[350px] p-4 rounded-t-lg rounded-b-lg"
    >
      <img
        className=" w-[200px] h-[165px] rounded-t-lg rounded-b-lg"
        src={img}
      />
      <div className=" text-blue-600 bg-blue-50 rounded-xl mt-5 text-sm text-center">
        {tag}
      </div>
      <div className=" font-bold mt-5">{title}</div>
      <div className=" flex flex-row items-center justify-between">
        <div className=" bg-pink-400 rounded-full w-[25px] h-[25px]">
          {" "}
          {profilePic}
        </div>
        <div className="mt-5 text-sm text-slate-500"> {user}</div>
        <div className="mt-5 text-sm text-slate-500"> {publishDate}</div>
      </div>
    </div>
  );
};
