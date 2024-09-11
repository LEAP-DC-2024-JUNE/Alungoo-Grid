import Frames from "../../public/frames.jpg";
import { ProductCards } from "./ProductCards";

export const Products = () => {
  const Product = [
    {
      imgSrc: Frames,
      productName: "Burnikk",
      productType: "Sexbomb",
    },
    {
      imgSrc: Frames,
      productName: "Kibal batal",
      productType: "Kibal Black",
    },
    {
      imgSrc: Frames,
      productName: "Very Nice",
      productType: "Saltmaalt",
    },
    {
      imgSrc: Frames,
      productName: "Kulangot",
      productType: "Salt",
    },
    {
      imgSrc: Frames,
      productName: "Sipon Malapot",
      productType: "Salt",
    },
    {
      imgSrc: Frames,
      productName: "Burnikk",
      productType: "Sexbomb",
    },
  ];

  return (
    <div>
      <p className=" text-3xl font-semibold">Recommended Products 😎</p>
      <div className="flex flex-wrap w-[1000px] gap-5">
        {Product.map((frames, index) => {
          return (
            <ProductCards
              key={index}
              imgSrc={frames.imgSrc}
              productName={frames.productName}
              productType={frames.productType}
            />
          );
        })}
      </div>
    </div>
  );
};
