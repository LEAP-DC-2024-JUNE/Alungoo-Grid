import Product from "@/components/Header";

export default async function Page() {
  //   let data = await fetch("http://127.0.0.1:8000/api");
  //   let products = await data?.json();
  //   console.log(products);

  return (
    <>
      hello goodsiin layout bn
      {/* {products.map((product) => {
        return (
          <>
            <Product
              name={product.productName}
              quantity={product.quantity}
              image={product.image}
              from={product.from}
            />
          </>
        );
      })} */}
    </>
  );
}
