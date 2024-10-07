export const TrendingSingleCard = ({ image, tags, title, key }) => {
  return (
    <div
      key={key}
      className="  rounded-t-lg rounded-b-lg flex flex-col justify-center items-start"
    >
      <img
        src={image}
        className="relative w-[280px] h-[358px] rounded-t-lg rounded-b-lg  brightness-50  "
      />
      <p className=" px-4 absolute bottom-32 text-blue-600 bg-blue-50 rounded-xl text-sm text-center font-bold ">
        {tags}
      </p>
      <p className=" absolute bottom-20 bg-slate-500 font-bold  text-white pl-3">
        {title.slice(0, 30) + "..."}
      </p>
    </div>
  );
};
