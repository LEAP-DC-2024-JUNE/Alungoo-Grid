import Link from "next/link";

export const Product = ({ name, price, from, index, id }) => {
  return (
    <Link href={`/goods/${id}`}>
      <div
        key={index}
        className=" border-[2px] w-[180px] h-[200px] rounded-t-lg rounded-b-lg mt-28 flex flex-col items-center"
      >
        <div>
          <img
            src="https://images.pexels.com/photos/557659/pexels-photo-557659.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            width={160}
            height={185}
            className=" rounded-md mt-1"
          />
        </div>
        <div>{name}</div>
        <div>{`price: $ ${price}`}</div>
        <div className=" font-semibold">{`from: ${from}`}</div>
      </div>
    </Link>
  );
};
