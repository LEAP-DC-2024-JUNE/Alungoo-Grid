const Buttons = () => {
  const arr = ["beach", "birds", "food"];

  return (
    <div className="flex gap-6">
      {arr.map((button) => {
        return <div>{button}</div>;
      })}
      {/* <div>
        <button className=" bg-slate-950 text-white ">Mountain</button>
      </div>
      <div>
        <button className=" bg-slate-950 text-white ">Beaches</button>
      </div>
      <div>
        <button className=" bg-slate-950 text-white ">Beaches</button>
      </div>
      <div>
        <button className=" bg-slate-950 text-white ">Birds</button>
      </div>
      <div></div>
      <button className=" bg-slate-950 text-white ">Food</button> */}
    </div>
  );
};

export default Buttons;
