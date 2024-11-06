export const Fruit = ({ name, desc, nutri, id }) => {
  return (
    <div className="my-40 flex flex-col gap-3 px-[500px]">
      <div className=" font-bold">{name}</div>
      <div>{desc}</div>
      <div>{nutri} </div>
    </div>
  );
};
