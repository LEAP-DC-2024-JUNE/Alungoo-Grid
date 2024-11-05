export const Fruit = ({ name, desc, nutri, id }) => {
  return (
    <div className=" border-[2px] flex flex-col gap-3">
      <div>{name}</div>
      <div>{id}</div>
      <div>{desc}</div>
      <div>{nutri}</div>
    </div>
  );
};
