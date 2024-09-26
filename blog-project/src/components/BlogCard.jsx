export const BlogCard = ({ img, tag, title, user, key }) => {
  return (
    <div
      key={key}
      className=" border-[1px] w-[220px] h-[350px] p-4 rounded-t-lg rounded-b-lg"
    >
      <img
        className=" w-[170px] h-[165px] rounded-t-lg rounded-b-lg"
        src={img}
      />
      <div className=" text-blue-600 bg-blue-50 rounded-xl mt-5 text-sm text-center">
        {tag}
      </div>
      <div className=" font-bold mt-5">{title}</div>
      <div className="mt-5 text-sm text-slate-500"> username:{user}</div>
    </div>
  );
};
