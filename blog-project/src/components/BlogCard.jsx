export const BlogCard = ({ img, tag, title, user, key }) => {
  return (
    <div
      key={key}
      className=" border-[1px] w-[300px] h-[410px] p-4 rounded-t-lg rounded-b-lg"
    >
      <img
        className=" w-[300px] h-[200px] rounded-t-lg rounded-b-lg"
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
