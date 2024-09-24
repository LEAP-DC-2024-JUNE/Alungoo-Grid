import Image from "next/image";
import ButtonContainer from "./Buttons";
import Pin from "@/icons/pin";
import { useTheme } from "next-themes";
import DarkPin from "@/icons/Darkpin";

export const WorkCard = (props) => {
  const { title, description, imgSrc, reverse, buttons, key } = props;
  const { theme } = useTheme();
  if (reverse == false) {
    return (
      <div
        key={key}
        className="flex flex-col xl:flex-row-reverse xl: bg-white  drop-shadow-md  rounded-lg dark:bg-gray-900  xl:px-16 bg-white-50 xl: dark:text-gray-100 mt-10"
      >
        <div className=" dark:bg-gray-700 dark:border-gray-700 p-12 border-r bg-gray-50 xl:w-[850px]">
          <Image src={imgSrc} />
        </div>

        <div className="  flex flex-col gap-6 p-12 xl:w-[850px] text-start dark:bg-gray-800">
          <p className=" font-bold text-xl text-gray-900 dark:text-gray-50">
            {title}
          </p>
          <p className="  mt-5 text-base text-gray-600 dark:text-gray-300">
            {description}
          </p>
          <div>
            <ButtonContainer buttons={buttons} />
          </div>
          <button className="">
            {theme == "light" ? <Pin /> : <DarkPin />}
          </button>
        </div>
      </div>
    );
  } else
    return (
      <div className="flex flex-col  bg-white drop-shadow-md rounded-lg xl:flex-row  dark:bg-gray-900  xl:px-16 bg-white-50 xl: dark:text-gray-100 mt-10">
        <div className=" dark:bg-gray-700 dark:border-gray-700 p-12 border-r bg-gray-50 xl:w-[850px]">
          <Image src={imgSrc} />
        </div>
        <div className="   flex flex-col gap-6 p-12 xl:w-[850px] text-start dark:bg-gray-800">
          <p className=" font-bold text-xl text-gray-900 dark:text-gray-50">
            {title}
          </p>
          <p className=" mt-5 text-base text-gray-600 dark:text-gray-300">
            {description}
          </p>
          <div>
            <ButtonContainer buttons={buttons} />
          </div>
          <button className=" ">
            {theme == "light" ? <Pin /> : <DarkPin />}
          </button>
        </div>
      </div>
    );
};
