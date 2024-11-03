export const Fruit = ({ name, desc, nutri }) => {
  return (
    <div className=" border-2, bg-pink-200, w-[250px], h-[300px] flex flex-row">
      <div key={index}>{/* <image src={image} /> */}</div>
      <div>{name}</div>
      <div>{desc}</div>
      <div>{from}</div>
      <div>{nutri}</div>
    </div>
  );
};
