import { Product } from "@/components/Product";

const Fruits = async () => {
  const briefData = await fetch("http://127.0.0.1:3001/api").then((response) =>
    response.json()
  );

  console.log(briefData);

  return (
    <div className=" grid grid-cols-5 gap-10  py-10 px-[150px]">
      {briefData.map((product, index) => {
        return (
          <div key={index}>
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
};
export default Fruits;
