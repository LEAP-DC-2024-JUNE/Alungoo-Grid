import { Product } from "@/components/Product";

export default async function Products() {
  let data = await fetch("http://127.0.0.1:8000/api");
  let products = await data.json();
  console.log(products);

  return (
    <div className=" grid grid-cols-5 gap-10  py-10 px-[150px]">
      {products.map((product) => {
        return (
          <div>
            <Product
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
