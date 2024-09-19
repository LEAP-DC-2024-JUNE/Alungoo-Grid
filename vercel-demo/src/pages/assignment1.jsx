import { useState } from "react";

const Assignment1 = () => {
  const [numbers, setNumbers] = useState(true);

  const array = [1, 2, 3, 4, 5, 6, 7, 8];

  const numbersArray = array.filter((number) => {
    return numbers ? number % 2 == 0 : number % 2 !== 0;
  });
  const handleClickOdd = () => {
    setNumbers(false);
  };
  const handleClickEven = () => {
    setNumbers(true);
  };
  return (
    <div className="font-bold text-xl flex gap-10">
      <div>
        <div>Filtered Numbers :</div>
        <button className=" bg-cyan-500 border-2" onClick={handleClickEven}>
          Even Numbers
        </button>
        <button className=" bg-orange-400 border-2" onClick={handleClickOdd}>
          Odd Numbers
        </button>
        <div></div>
        {numbersArray.map((num, index) => {
          return (
            <>
              <div key={index}></div>
              <p>{num}</p>
            </>
          );
        })}
      </div>
    </div>
  );
};
export default Assignment1;
