// const arr = [2, 5, 100];

// const result = arr.map((element) => {
//   return element * 2;
// });

// return result;
import Buttons from "@/components/buttons";
import Pic from "../components/pic";
export default function recap() {
  return (
    <div>
      <h1 className="text-pink-700 text-3xl">Snapshot</h1>
      <input type="text" placeholder="Search.."></input>

      <Buttons />
      <p className=" text-blue-800 text-2xl">Mountain Picture</p>
      <Pic />
    </div>
  );
}

// Homewrok

// 1. Take an array of numbers and make them strings

const arr = [2, 5, 100];
const result = arr.map((element) => `${element}`);
console.log(result); // ["2", "5", "100"]

// 2. Capitalize each of an array of names

const capitalizeNames = ["john", "JACOB", "jinGleHeimer", "schmidt"];
const capNames = capitalizeNames.map((element) => {
  return element[0].toUpperCase() + element.slice(1).toLocaleLowerCase();
});
console.log(capNames); //[ 'John', 'Jacob', 'Jingleheimer', 'Schmidt' ]

// 3. Make an array of strings of the names

const data = [
  {
    name: "Angelina Jolie",
    age: 80,
  },
  {
    name: "Eric Jones",
    age: 2,
  },
  {
    name: "Paris Hilton",
    age: 5,
  },
  {
    name: "Kayne West",
    age: 16,
  },
  {
    name: "Bob Ziroll",
    age: 100,
  },
];
const names = data.map((element) => {
  return element.name;
});
console.log(names); // ['Angelina Jolie','Eric Jones','Paris Hilton','Kayne West','Bob Ziroll']

//4. Make an array of strings of the names saying whether or not they can go to The Matrix

const input = [
  {
    name: "Angelina Jolie",
    age: 80,
  },
  {
    name: "Eric Jones",
    age: 2,
  },
  {
    name: "Paris Hilton",
    age: 5,
  },
  {
    name: "Kayne West",
    age: 16,
  },
  {
    name: "Bob Ziroll",
    age: 100,
  },
];
const output = input.map((element) => {
  if (element.age >= 80) {
    return `${element.name} can go to the Matrix`;
  } else {
    return `${element.name} cannot go to the Matrix`;
  }
});
console.log(output); //[ 'Angelina Jolie can go to the Matrix', 'Eric Jones cannot go to the Matrix','Paris Hilton cannot go to the Matrix','Kayne West cannot go to the Matrix','Bob Ziroll can go to the Matrix']
