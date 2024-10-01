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
      className=" border-[1px] w-[392px] h-[488px] p-4 rounded-t-lg rounded-b-lg flex flex-col justify-center items-center gap-5"
    >
      <img
        className=" w-[360px] h-[240px] rounded-t-lg rounded-b-lg "
        src={img}
      />
      <div className=" text-blue-600 bg-blue-50 rounded-xl text-sm text-center">
        {tag}
      </div>
      <div className=" font-bold">{title}</div>
      <div className=" flex flex-row gap-5 ">
        <div>
          {withPic && (
            <img
              src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg"
              width={20}
              className=" rounded-full"
            />
          )}
        </div>
        <div className=" text-sm text-slate-500"> {user}</div>
        <div className="text-sm text-slate-500"> {publishDate}</div>
      </div>
    </div>
  );
};
