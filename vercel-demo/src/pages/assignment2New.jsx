import { useState } from "react";

const Assignment2New = () => {
  const [length, setLength] = useState(2);

  const array = ["apple", "banana", "kiwi", "pear"];

  const fruits = array.filter((element) => {
    return element.length >= length;
  });

  const handleClickAll = (param1) => {
    return setLength(param1);
  };

  return (
    <div>
      <div className="font-bold text-xl flex gap-10">
        <div>Filter By Length :</div>

        <button
          className=" bg-green-400 border-2"
          onClick={() => handleClickAll(4)}
        >
          4
        </button>
        <button
          className=" bg-green-400 border-2"
          onClick={() => handleClickAll(2)}
        >
          2
        </button>
        <button
          className=" bg-green-400 border-2"
          onClick={() => handleClickAll(5)}
        >
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
export default Assignment2New;
