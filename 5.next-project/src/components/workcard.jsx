import Ubcab from "../../public/Ubcab.png";
import Image from "next/image";
import Mentor from "../../public/Mentor.png";

export const Workcard = (props) => {
  return (
    <div>
      <div className="flex">
        <Image src={Ubcab} />
        <div>
          <p>UBcab</p>
          <p className=" ml-60">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            laboriosam mollitia. Quod deserunt incidunt et nam voluptatum,
            laboriosam assumenda aliquam fuga ea omnis eligendi cum iure magni.
            Iste, est fugiat?
          </p>
        </div>
      </div>
      <Image src={Mentor} />
      <p>{props.para}</p>
    </div>
  );
};
