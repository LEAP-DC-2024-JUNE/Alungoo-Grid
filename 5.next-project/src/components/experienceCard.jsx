import Image from "next/image";

const ExperienceCard = ({ imgSrc, title, description, dates, key }) => {
  return (
    <div
      key={key}
      className=" flex justify-evenly bg-white drop-shadow-lg m-20"
    >
      <div className=" h-[150px] p-5">
        <Image src={imgSrc} />
      </div>
      <div>
        <p className=" font-bold">{title}</p>
        {description.map((desc) => {
          return <li className=" list-none m-5">{desc}</li>;
        })}
      </div>
      <p>{dates}</p>
    </div>
  );
};
export default ExperienceCard;
