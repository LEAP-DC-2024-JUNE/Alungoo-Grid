import Link from "next/link";
import DeleteButton from "@/components/DeleteButton";

const FruitId = async ({ params }) => {
  const { id } = await params;
  const data = await fetch(`http://127.0.0.1:3001/api/goods/${id}`).then(
    (response) => response.json()
  );

  return (
    <div className=" my-40 w-[500px] bg-green-50 border-[2px] ml-[550px] ">
      <div className=" flex flex-col p-8 gap-4">
        <div className="flex justify-end items-center gap-4">
          <span>
            <DeleteButton id={data.id} />
          </span>
        </div>

        <strong>{data.productName}</strong>
        <span className="text-8xl">{data.image}</span>
        <span>
          <strong>From: </strong>
          {data.from}
        </span>
        <span>
          <strong>Nutrients: </strong>
          {data.nutrients}
        </span>

        <span>
          <strong>Organic: </strong>
          {data.organic ? "✅" : "❌"}
        </span>
        <span>
          <strong>Description: </strong>
          {data.description}
        </span>
      </div>

      <div className=" flex gap-4 flex-row justify-center my-10">
        <Link href="/goods" className=" border-2 px-3 hover:bg-green-100">
          {" "}
          ← Go Back
        </Link>
        <Link
          href={`/goods/edit-item/${id}`}
          className=" border-2 px-4 hover:bg-green-100"
        >
          {" "}
          Update an Item
        </Link>
      </div>
    </div>
  );
};

export default FruitId;
