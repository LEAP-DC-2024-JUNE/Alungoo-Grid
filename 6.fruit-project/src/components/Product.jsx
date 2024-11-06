import Link from "next/link";

export const Product = ({ name, price, from, pic, id }) => {
  return (
    <Link href={`/goods/${id}`}>
      <div className=" border-[2px] w-[200px] h-[180px] rounded-t-lg rounded-b-lg mt-28 flex flex-col items-center bg-green-50">
        <div className=" mt-8">
          <div>{pic}</div>
        </div>
        <div className=" mt-3">
          <div>{name}</div>
          <div>{`price: $ ${price}`}</div>
        </div>
      </div>
    </Link>
  );
};
