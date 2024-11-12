import Link from "next/link";
import DeleteButton from "@/components/DeleteButton";
import Update from "@/components/svg/UpdateLogo";

const FruitId = async ({ params }) => {
  const { id } = await params;
  const data = await fetch(`http://127.0.0.1:3001/api/goods/${id}`).then(
    (response) => response.json()
  );

  return (
    <div className=" my-40 w-[500px] bg-green-50 border-[2px] ml-[550px] ">
      <div className=" flex flex-col p-8 gap-4">
        <div className=" flex flex-row justify-between">
          {data.id}
          <div>
            <span>
              <DeleteButton id={data.id} />
            </span>
            <span>
              <Link href={`/goods/edit-item/${id}`}>
                <Update />
              </Link>
            </span>
          </div>
        </div>
        <strong>{data.productName}</strong>
        <span>{data.image}</span>
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

      <div className=" text-center my-10">
        <Link href="/goods" className=" border-2 px-3 hover:bg-green-50">
          {" "}
          ← Go Back
        </Link>
      </div>
    </div>
  );
};

export default FruitId;
