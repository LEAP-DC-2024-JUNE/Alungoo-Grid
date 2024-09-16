import Image from "next/image";

const ExperienceCard = ({ imgSrc, title, description, dates, key }) => {
  return (
    <div
      key={key}
      className=" xl:flex xl:justify-evenly xl:m-10 sm : flex sm : flex-col p-10 sm: m-5 xl: bg-white xl: drop-shadow-md xl: rounded-lg dark:bg-gray-800"
    >
      <div className=" xl:h-[150px] xl:p-5  ml-10 text-start">
        <Image src={imgSrc} />
      </div>
      <div className="xl:flex xl:justify-evenly flex-col-reverse flex xl:flex-row">
        <div>
          <p className=" font-bold sm:text-left sm: m-2">{title}</p>
          {description.map((desc) => {
            return (
              <li className=" xl:list-none xl:m-5 sm:m m-5 sm: text-start">
                {desc}
              </li>
            );
          })}
        </div>
        <p className="sm: text-left sm: m-3">{dates}</p>
      </div>
    </div>
  );
};
export default ExperienceCard;
