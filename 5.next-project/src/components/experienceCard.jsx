import Image from "next/image";

const ExperienceCard = ({ imgSrc, title, description, dates, key }) => {
  return (
    <div
      key={key}
      className=" xl:flex xl:justify-evenly xl:bg-white xl:drop-shadow-lg xl:m-10 sm:flex-row "
    >
      <div className=" h-[150px] p-5">
        <Image src={imgSrc} />
      </div>
      <div className="xl:flex xl:justify-evenly sm:flex-row sm:flex">
        <div>
          <p className=" font-bold">{title}</p>
          {description.map((desc) => {
            return <li className=" list-none m-5">{desc}</li>;
          })}
        </div>
        <p>{dates}</p>
      </div>
    </div>
  );
};
export default ExperienceCard;
