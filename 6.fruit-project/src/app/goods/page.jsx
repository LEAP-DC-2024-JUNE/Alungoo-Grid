import { Product } from "@/components/Product";

export default async function Products() {
  let data = await fetch("http://127.0.0.1:8000/api");
  let products = await data.json();
  console.log(products);

  return (
    <div className=" flex flex-row gap-20 justify-center py-10">
      {products.map((product) => {
        return (
          <div>
            <Product
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
