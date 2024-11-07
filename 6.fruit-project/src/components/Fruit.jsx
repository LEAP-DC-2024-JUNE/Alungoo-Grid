export const Fruit = ({ name, desc, nutri, pic, from }) => {
  return (
    <div className="my-40 flex flex-col gap-5  border-[2px] rounded-xl mx-[600px] px-5 bg-green-50 py-5">
      <div className=" ">{pic}</div>
      <div>
        <strong>Name: </strong>
        {name}
      </div>
      <div>
        <strong>Description: </strong>
        {desc}
      </div>
      <div>
        <strong>Nutrition: </strong>
        {nutri}
      </div>
      <div>
        <strong>From: </strong>

        {from}
      </div>
    </div>
  );
};
