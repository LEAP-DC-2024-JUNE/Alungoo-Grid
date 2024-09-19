import Image from "next/image";

export const ProductCards = (props) => {
  const { imgSrc, productType, productName, key } = props;
  return (
    <div key={key} className=" border-2 shadow-lg">
      <div className="w-[300px] h-[300px]">
        <Image src={imgSrc} alt="/" />
      </div>
      <div className=" bg-slate-100 text-center">
        <p className=" text-2xl m-6 font-bold">{productName}</p>
        <p>{productType}</p>
      </div>
    </div>
  );
};
