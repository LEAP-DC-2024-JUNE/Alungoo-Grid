import Image from "next/image";
import { ButtonContainer } from "./Buttons";
import Pin from "@/icons/pin";

export const WorkCard = (props) => {
  const { title, description, imgSrc, reverse, buttons, key, pin } = props;
  if (reverse == false) {
    return (
      <div className=" sm:flex-col sm:m-16 sm: drop-shadow-lg sm: rounded-xl sm:bg-white-50 sm: w-fit">
        <div
          key={key}
          className="xl:flex xl: justify-between xl:flex-row-reverse xl:m-10 xl: bg-white xl: drop-shadow-md xl: rounded-lg"
        >
          <Image src={imgSrc} height={0} />

          <div className="  text-start p-14">
            <p className=" font-bold">{title}</p>
            <p className=" mt-5 xl:w-[800px] text-start">{description}</p>
            <div>
              <ButtonContainer buttons={buttons} />
            </div>
            <div className=" mt-10">
              <Pin />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className=" sm:flex-col sm: m-16 sm:w-fit sm: content-center">
      <div className="xl:flex  xl: justify-between xl:m-10 xl: bg-white xl: drop-shadow-md xl: rounded-lg">
        <Image src={imgSrc} height={0} />
        <div className="  text-start p-14">
          <p className=" font-bold">{title}</p>
          <p className=" mt-5 text-start xl:w-[800px]">{description}</p>
          <div>
            <ButtonContainer buttons={buttons} />
          </div>
          <div className=" mt-10">
            <Pin />
          </div>
        </div>
      </div>
    </div>
  );
};
