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
      <p>Recommended Product</p>
      <div className="flex gap-60 flex-wrap">
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
