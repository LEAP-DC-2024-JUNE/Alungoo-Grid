import { useState } from "react";

export const FilterFunction = () => {
  // const array = [1, 2, 3, 4];
  // const filteredArray = array.filter((element) => {
  //   return element > 2;
  // });
  const [age, setAge] = useState(18);
  const array = [
    {
      name: "Dull",
      age: 18,
    },
    {
      name: "Alungoo",
      age: 16,
    },
    {
      name: "Sumiyaa",
      age: 18,
    },
  ];
  const filteredArray = array.filter((element) => {
    return element.age >= age;
  });

  const handleClick = () => {
    setAge(0);
  };
  const handleClickAdult = () => {
    setAge(18);
  };
  return (
    <div style={{ border: "5px solid green" }}>
      <h1>Nasand Hursen Humuus</h1>
      <button className=" bg-purple-300 border-2" onClick={handleClickAdult}>
        18 aas deesh nasniihan
      </button>
      <button className=" bg-pink-300 border-2" onClick={handleClick}>
        buh nasniihan
      </button>
      <div>
        {filteredArray.map((person, index) => {
          return (
            <div key={index}>
              <p>{person.name}</p>
              <span>{person.age}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
