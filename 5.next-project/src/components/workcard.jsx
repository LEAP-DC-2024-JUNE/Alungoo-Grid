import Image from "next/image";
import { ButtonContainer } from "./Buttons";

export const WorkCard = (props) => {
  const { title, description, imgSrc, reverse, buttons, key } = props;
  if (reverse == true) {
    return (
      <div key={key} className="flex gap-40 flex-row-reverse m-10">
        <Image src={imgSrc} />

        <div className=" mt-8 text-wrap">
          <p className=" font-bold">{title}</p>
          <p className=" mt-5 w-[800px] text-start">{description}</p>
          <div>
            <ButtonContainer buttons={buttons} />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex gap-40 ">
      <Image src={imgSrc} />
      <div className=" mt-8 text-start ">
        <p className=" font-bold">{title}</p>
        <p className=" mt-5 text-start w-[800px]">{description}</p>
        <div>
          <ButtonContainer buttons={buttons} />
        </div>
      </div>
    </div>
  );
};
