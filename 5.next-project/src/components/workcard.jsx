import Image from "next/image";

export const WorkCard = ({ title, description, imgSrc, reverse, buttons }) => {
  if (reverse == true) {
    return (
      <div className="flex gap-60 ">
        <Image src={imgSrc} />
        <div className=" mt-8 ">
          <p className=" font-bold">{title}</p>
          <p className=" mt-5 w-[800px]">{description}</p>
          <div className="flex gap-3 justify-center flex-wrap w-[800px]">
            {buttons.map((buttonName) => {
              return (
                <span className=" bg-gray-400 text-gray-50 px-4 py-1 rounded-2xl mt-7 ">
                  {buttonName}
                </span>
              );
            })}
          </div>
          <span></span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-10 ">
      <div className=" mt-8 text-start ">
        <p className=" font-bold">{title}</p>
        <p className=" mt-5 text-start">{description}</p>
        <div className="flex gap-3 justify-center flex-wrap">
          {buttons.map((buttonName) => {
            return (
              <span className=" bg-gray-400 text-gray-50 px-4 py-1 rounded-2xl mt-7">
                {buttonName}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};
