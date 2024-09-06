import Image from "next/image";

export const WorkCard = ({ title, description, imgSrc, reverse, chips }) => {
  if (reverse == true) {
    return (
      <div className="flex gap-60 flex-row-reverse">
        <Image src={imgSrc} />
        <div className=" mt-8 ">
          <p className=" font-bold">{title}</p>
          <p className=" mt-5">{description}</p>
          <div className="flex gap-6 text-gray-200 rounded-md">
            {arr.map((i) => {
              <button>{i}</button>;
            })}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-60 ">
      <Image src={imgSrc} />
      <div className=" mt-8 ">
        <p className=" font-bold">{title}</p>
        <p className=" mt-5">{description}</p>
        <div className="flex gap-6 text-gray-200 rounded-md">
          {arr.map((i) => {
            <button>{i}</button>;
          })}
        </div>
      </div>
    </div>
  );
};
