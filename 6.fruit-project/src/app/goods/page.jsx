import { Product } from "@/components/Product";

export default async function Fruits() {
  const briefData = await fetch("http://127.0.0.1:3001/api");
  const products = await briefData.json();
  console.log(briefData);

  return (
    <div className=" grid grid-cols-5 gap-10  py-10 px-[150px]">
      {products.map((product, index) => {
        return (
          <div>
            <Product
              key={index}
              name={product.productName}
              price={product.price}
              id={product.id}
              pic={product.image}
            />
          </div>
        );
      })}
    </div>
  );
}
