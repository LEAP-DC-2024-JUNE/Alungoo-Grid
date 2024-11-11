import DeleteButton from "@/components/DeleteButton";
import { Fruit } from "@/components/Fruit";
import Link from "next/link";

const FruitId = async ({ params }) => {
  const data = await fetch(`http://127.0.0.1:3001/api/goods/${params.id}`).then(
    (response) => response.json()
  );

  return (
    <div className=" m-0">
      <Fruit
        name={data.productName}
        from={data.from}
        desc={data.description}
        nutri={data.nutrients}
        pic={data.image}
        organic={data.organic}
      />
      <div className=" flex  gap-2 flex-row justify-center my-10">
        <Link href="/goods" className=" border-2 px-3 hover:bg-green-50">
          {" "}
          ← Go Back
        </Link>

        <DeleteButton />
      </div>
    </div>
  );
};
export default FruitId;
