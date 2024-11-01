import { Product } from "@/components/Product";

export default async function Page() {
  // const [count, setCount] = useState("");
  let data = await fetch("http://127.0.0.1:8000/api");
  let products = await data?.json();
  console.log(products);

  return (
    <>
      {products.map((product) => {
        return (
          <>
            <Product />
          </>
        );
      })}
    </>
  );
}
