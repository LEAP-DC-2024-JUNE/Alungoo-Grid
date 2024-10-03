import { Next } from "@/icons/Next";
import { Prev } from "@/icons/Prev";
import { useState } from "react";
export const CarouselCard = ({ img, tags, title, publishDate }) => {
  const [current, setCurrent] = useState(0);
  const prev = () => {
    setCurrent((current) => (current == 0 ? img.length - 1 : current - 1));
  };
  const next = () => {
    setCurrent((current) => (current == img.length - 1 ? 0 : current + 1));
  };
  return (
    <div className=" relative w-[1220px] overflow-hidden">
      <div
        className="transition-transform ease-out duration-500 "
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        <img src={img} width={1000} height={450} className=" flex" />
      </div>

      <div className="flex flex-col items-start pl-10 gap-3 bg-gray-50 w-[600px] h-[250px] absolute bottom-16 left-5 flex flex-col justify-center">
        <span className="absolute bottom-44 bg-blue-100 text-blue-500 text-sm ">
          {tags}
        </span>
        <span className="absolute bottom-20 font-bold text-2xl ">{title}</span>
        <span className="absolute bottom-10">{publishDate}</span>
      </div>

      <div className=" flex">
        <button onClick={prev} className=" hover:bg-white p-2">
          <Prev />
        </button>
        <button onClick={next} className=" hover:bg-white p-2">
          <Next />
        </button>
      </div>
    </div>
  );
};
