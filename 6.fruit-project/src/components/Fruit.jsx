export const Fruit = ({ name, desc, nutri, pic, from }) => {
  return (
    <div className="my-40 flex flex-col gap-5  border-[2px] rounded-xl mx-[600px] px-5 bg-green-50 py-5">
      <div className=" ">{pic}</div>
      <div>
        <span className=" font-bold">Name:</span>
        {name}
      </div>
      <div className="">
        <span className=" font-bold ">Description:</span>
        {desc}
      </div>
      <div>
        <span className=" font-bold">Nutrition:</span>
        {nutri}
      </div>
      <div>
        <span className=" font-bold">From:</span>

        {from}
      </div>
    </div>
  );
};
