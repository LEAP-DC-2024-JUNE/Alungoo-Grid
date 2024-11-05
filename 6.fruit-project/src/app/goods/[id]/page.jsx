import { Fruit } from "@/components/Fruit";

export default async function FruitId({ params }) {
  const { id } = await params;
  const data = await fetch(`http://127.0.0.1:8000/api/goods/${params.id}`).then(
    (response) => response.json()
  );

  console.log(params);

  return (
    <div>
      {data.map((product, index) => {
        return (
          <div>
            <Fruit
              key={index}
              name={product.productName}
              from={product.from}
              desc={product.description}
              nutri={product.nutrients}
              id={product.id}
            />
          </div>
        );
      })}
    </div>
  );
}
