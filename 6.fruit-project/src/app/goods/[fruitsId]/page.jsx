import { Fruit } from "@/components/Fruit";

export default async function FruitId() {
  let data = await fetch("http://127.0.0.1:8000/api/produces");
  let products = await data.json();
  console.log(products);

  return (
    <div>
      <p>hello goodsiin page bn</p>
      {products.map((product, index) => {
        return (
          <div>
            <Fruit
              key={index}
              name={product.productName}
              from={product.from}
              desc={product.description}
              nutri={product.nutrients}
            />
          </div>
        );
      })}
    </div>
  );
}
