import Image from "next/image";

export const WorkCard = ({ title, description, imgSrc, reverse }) => {
  const arr = [
    "React",
    "Next.js",
    "Typescript",
    "Nest.js",
    "PostgreSQL",
    "Tailwind",
    "Figma",
    "Cypress",
    "Storybook",
    "Git",
  ];

  if (reverse == true) {
    return (
      <div className="flex gap-10 flex-row-reverse">
        <Image src={imgSrc} />
        <div className=" mt-8 px-[150px]">
          <p className=" font-bold">{title}</p>
          <p className=" mt-5">{description}</p>
          <div className="flex gap-3 justify-center flex-wrap">
            {arr.map((button) => {
              return (
                <span className=" bg-gray-400 text-gray-50 px-4 py-1 rounded-2xl mt-7 ">
                  {button}
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
      <Image src={imgSrc} />
      <div className=" mt-8 px-[150px] ">
        <p className=" font-bold">{title}</p>
        <p className=" mt-5">{description}</p>
        <div className="flex gap-3 justify-center flex-wrap">
          {arr.map((button) => {
            return (
              <span className=" bg-gray-400 text-gray-50 px-4 py-1 rounded-2xl mt-7">
                {button}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};
