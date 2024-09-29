export const BlogCard = ({
  img,
  tag,
  title,
  user,
  publishDate,
  key,
  withPic,
}) => {
  return (
    <div
      key={key}
      className=" border-[1px] w-[240px]  p-4 rounded-t-lg rounded-b-lg"
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
        <div>
          {withPic ? (
            <img
              src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg"
              width={25}
              height={25}
              className=" rounded-full"
            />
          ) : null}
        </div>
        <div className="mt-5 text-sm text-slate-500"> {user}</div>
        <div className="mt-5 text-sm text-slate-500"> {publishDate}</div>
      </div>
    </div>
  );
};
