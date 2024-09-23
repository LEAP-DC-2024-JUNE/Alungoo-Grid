import Image from "next/image";
import ButtonContainer from "./Buttons";
import Pin from "@/icons/pin";
import DarkPin from "@/icons/Darkpin";
import { useTheme } from "next-themes";

export const WorkCard = (props) => {
  const { title, description, imgSrc, reverse, buttons, key } = props;
  const { theme, setTheme } = useTheme();
  if (reverse == false) {
    return (
      <div
        key={key}
        className="flex flex-col xl:flex xl:flex-row-reverse xl:p-10 "
      >
        <div className=" ">
          <Image src={imgSrc} width={490} height={490} />
        </div>

        <div className="  flex flex-col gap-6 p-12 xl:w-[450px] text-start dark:bg-gray-800">
          <p className=" font-bold text-xl text-gray-900 dark:text-gray-50">
            {title}
          </p>
          <p className="  mt-5 text-base text-gray-600 dark:text-gray-300 ">
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
      <div className=" flex flex-col xl:flex xl:flex-row p-10">
        <div className=" ">
          <Image src={imgSrc} width={490} height={490} />
        </div>

        <div className="flex flex-col gap-6 p-12 xl:w-[450px] text-start dark:bg-gray-800">
          <p className=" font-bold">{title}</p>
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
