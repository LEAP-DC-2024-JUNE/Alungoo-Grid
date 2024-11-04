export const Product = ({ name, price, from, index }) => {
  return (
    <div
      key={index}
      className=" border-[2px] w-[180px] h-[200px] rounded-t-lg rounded-b-lg mt-28 flex flex-col items-center"
    >
      <div>{name}</div>
      <div>{`price: $ ${price}`}</div>
      <div className=" font-semibold">{`from: ${from}`}</div>
    </div>
  );
};
