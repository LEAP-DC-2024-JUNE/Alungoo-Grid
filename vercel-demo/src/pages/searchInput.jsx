import { useState } from "react";

const Search = () => {
  const [inputValue, setInputValue] = useState("");
  const people = [
    {
      name: "Dull",
      age: 18,
      class: "Leap-DC",
    },
    {
      name: "Alungoo",
      age: 16,
      class: "Leap-Chicago",
    },
    {
      name: "Sumiyaa",
      age: 18,
      class: "Leap-Seattle",
    },
  ];

  const filteredValue = people.filter((person) => {
    let inputValueUpper = inputValue.toUpperCase();
    let personNameUpper = person.name.toUpperCase();
    return personNameUpper.includes(inputValueUpper);
  });

  // person.name.toUpperCase() == inputValue.toUpperCase()
  //person.name.toUpperCase().includes(inputValue.toUpper.Case)

  return (
    <div>
      <input
        type="text"
        className=" border-2 bg-gray-100 border-blue"
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
      ></input>
      {filteredValue.length == 0
        ? people.map((person) => {
            return (
              <div className="border-2">
                <p>{person.name}</p>
                <p>{person.class}</p>
              </div>
            );
          })
        : filteredValue.map((person) => {
            return (
              <div className="border-2">
                <p>{person.name}</p>
                <p>{person.class}</p>
              </div>
            );
          })}
    </div>
  );
};

export default Search;
