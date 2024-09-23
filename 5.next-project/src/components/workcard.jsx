import Image from "next/image";
import ButtonContainer from "./Buttons";
import Pin from "@/icons/pin";

export const WorkCard = (props) => {
  const { title, description, imgSrc, reverse, buttons, key } = props;
  if (reverse == false) {
    return (
      <div
        key={key}
        className="flex flex-col   bg-white drop-shadow-md darK:drop-shadow-md rounded-lg xl:flex-row-reverse dark:bg-gray-950  bg-white-50 xl: dark:text-gray-100 mt-5 xl:p-10"
      >
        <div className=" dark:bg-gray-700 dark:border-gray-800 p-8 border-r bg-gray-50 flex justify-center flex-1 rounded-t-xl xl: rounded-l-none xl:rounded-r-xl border-gray-100">
          <Image src={imgSrc} width={490} height={390} />
        </div>

        <div className="  flex flex-col gap-6 p-12 xl:w-[850px] text-start dark:bg-gray-800">
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
            <Pin />
          </button>
        </div>
      </div>
    );
  } else
    return (
      <div className="flex flex-col   bg-white drop-shadow-md rounded-lg xl:flex-row  dark:bg-gray-950  bg-white-50 xl: dark:text-gray-100 mt-5 xl:p-10">
        <div className=" dark:bg-gray-700 dark:border-gray-800 p-8 border-r bg-gray-50 flex justify-center flex-1 rounded-t-xl xl: rounded-r-none xl:rounded-l-xl  border-gray-100">
          <Image src={imgSrc} width={490} height={390} />
        </div>
        <div className="   flex flex-col gap-6 xl:p-12 p-8 xl:rounded-none xl:rounded-r-xl rounded-b-xl dark:bg-gray-800">
          <p className=" font-bold">{title}</p>
          <p className=" mt-5 text-base text-gray-600 dark:text-gray-300">
            {description}
          </p>
          <div>
            <ButtonContainer buttons={buttons} />
          </div>
          <button className=" ">
            <Pin />
          </button>
        </div>
      </div>
    );
};
