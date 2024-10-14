import Link from "next/link";

export const TrendingSingleCard = ({ image, tags, title, key, id }) => {
  return (
    <Link href={`/blog/${id}`}>
      <div
        key={key}
        className="  rounded-t-lg rounded-b-lg flex flex-col justify-center items-start"
      >
        <img
          src={image}
          className="relative w-[268px] h-[320px] rounded-t-lg rounded-b-lg  brightness-50  "
        />
        {/* <div className=" absolute bottom-8 flex flex-col gap-2">
          <p className="  text-blue-600 bg-blue-100 rounded-xl text-sm text-center font-bold ">
            {tags}
          </p>
          <p className="  bg-slate-500 font-bold  text-white ">
            {title.length > 20 ? title.slice(0, 30) : "..."}
          </p>
        </div> */}
      </div>
    </Link>
  );
};
