// const Goods = () => {
//   return <>hello this is goodsiin page bn</>;
// };

// export default Goods;

import { Product } from "@/components/Product";
import Link from "next/link";

export default async function Products() {
  let data = await fetch("http://127.0.0.1:8000/api");
  let products = await data.json();
  console.log(products);

  return (
    <div className=" flex flex-row gap-20 justify-center">
      {products.map((product, index) => {
        return (
          <div>
            <Product
              key={index}
              name={product.productName}
              price={product.price}
              from={product.from}
              id={product.id}
            />
          </div>
        );
      })}
    </div>
  );
}
