import Pic from "../../public/Pic2.png";
import Image from "next/image";

const Picture = () => {
  return (
    <div>
      <Image src={Pic} />
    </div>
  );
};

export default Picture;
