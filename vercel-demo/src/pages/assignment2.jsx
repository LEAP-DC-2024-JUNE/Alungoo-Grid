import { useState } from "react";

const Assignment2 = () => {
  const [length, setLength] = useState(2);

  const array = ["apple", "banana", "kiwi", "pear"];

  const fruits = array.filter((element) => {
    return element.length >= length;
  });

  const handleClickShort = () => {
    return setLength(4);
  };
  const handleClickLong = () => {
    return setLength(5);
  };
  return (
    <div>
      <div className="font-bold text-xl flex gap-10">
        <div>Filter By Length :</div>

        <button className=" bg-green-400 border-2" onClick={handleClickShort}>
          4
        </button>
        <button className=" bg-red-400 border-2" onClick={handleClickLong}>
          5
        </button>
        {fruits.map((fruit, index) => {
          return (
            <div key={index}>
              <p>{fruit}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Assignment2;
