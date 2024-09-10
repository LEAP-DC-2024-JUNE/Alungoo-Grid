import Image from "next/image";

export const ProductCards = (props) => {
  const { imgSrc, productType, productName, key } = props;
  return (
    <div key={key}>
      <div className="w-[400px] h-[400px]">
        <Image src={imgSrc} />
      </div>
      <p className=" text-lg font-bold">{productName}</p>
      <p>{productType}</p>
    </div>
  );
};
