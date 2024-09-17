import Image from "next/image";

const ExperienceCard = ({ imgSrc, title, description, dates, key }) => {
  return (
    <div
      key={key}
      className=" p-10 bg-white drop-shadow-md rounded-xl dark:bg-gray-800  m-10"
    >
      <div className=" flex flex-col gap-4 xl:justify-evenly xl:flex-row xl:gap-12 ">
        <div>
          <Image src={imgSrc} />
        </div>

        <div className="flex flex-col-reverse gap-5 xl:flex-row text-start">
          <div className=" flex flex-col gap-5">
            <p className=" font-bold text-xl text-gray-900 dark:text-gray-50">
              {title}
            </p>
            <ul className=" font-medium text-base text-gray-600 flex flex-col gap-2 list-disc dark:text-gray-300">
              {description.map((desc) => {
                return <li>{desc}</li>;
              })}
            </ul>
          </div>
          <p className="font-medium text-base text-gray-700 dark:text-gray-200">
            {dates}
          </p>
        </div>
      </div>
    </div>
  );
};
export default ExperienceCard;
