export const TrendingSingleCard = ({ image, tags, title, key }) => {
  return (
    <div
      key={key}
      className="  rounded-t-lg rounded-b-lg flex flex-col justify-center items-start bg-contain  brightness-50  "
    >
      <img
        src={image}
        className="relative w-[300px] h-[388px] rounded-t-lg rounded-b-lg "
      />
      <p className=" absolute bottom-32 text-blue-600 bg-blue-50 rounded-xl text-sm text-center font-bold ">
        {tags}
      </p>
      <p className=" absolute bottom-10 bg-slate-300 font-bold  text-white">
        {title}
      </p>
    </div>
  );
};
