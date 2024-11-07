import { Fruit } from "@/components/Fruit";

export default async function FruitId({ params }) {
  const { id } = await params;
  const data = await fetch(`http://127.0.0.1:3001/api/goods/${params.id}`);
  let product = await data.json();

  console.log(id);

  return (
    <div className="">
      <Fruit
        name={product.productName}
        from={product.from}
        desc={product.description}
        nutri={product.nutrients}
        pic={product.image}
      />
    </div>
  );
}
