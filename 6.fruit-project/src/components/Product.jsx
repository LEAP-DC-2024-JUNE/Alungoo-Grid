import Link from "next/link";

export const Product = ({ name, price, pic, id, index, qty }) => {
  return (
    <Link href={`/goods/${id}`}>
      <div
        key={index}
        className=" border-[2px] w-[200px] h-[200px] rounded-t-lg rounded-b-lg mt-28 flex flex-col
        items-center bg-green-50 hover:bg-green-200"
      >
        <div className=" mt-8">
          <div className="text-6xl">{pic}</div>
        </div>
        <div className=" mt-3">
          <strong>{name}</strong>
          <div>{`price: $ ${price}`}</div>
          <div>{`quantity:  ${qty} pcs`}</div>
        </div>
      </div>
    </Link>
  );
};
