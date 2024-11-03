export const Product = ({ name, price, from, index }) => {
  return (
    <div className=" border-2, bg-pink-200, w-[250px], h-[300px] ">
      <div key={index}></div>
      <div>{name}</div>
      <div>{`price: $ ${price}`}</div>
      <div className=" font-semibold">{`from: ${from}`}</div>
    </div>
  );
};
