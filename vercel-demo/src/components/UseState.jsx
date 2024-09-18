import { useState } from "react";

const Hook = () => {
  const [name, setName] = useState("Alungoo");
  const handleClick = () => {
    setName("Sansar");
  };

  const [number, setNumber] = useState(0);
  const ClickButton = () => {
    setNumber(number + 1);
  };

  const [count, setCount] = useState(0);
  const Increment = () => {
    setCount(count + 1);
  };
  const Decrement = () => {
    setCount(count - 1);
  };

  const [text, setText] = useState("On");
  const TextButton = () => {
    text == "On" ? setText("Off") : setText("On");
  };

  const [click, setClick] = useState(false);
  const Clicked = () => {
    setClick(!click);
  };
  return (
    <div className=" flex flex-col justify-start">
      <div>
        <p>{name}</p>
        <button className="font-bold border-2" onClick={handleClick}>
          Click here
        </button>
      </div>
      <button style={{ border: "3px solid blue" }} onClick={ClickButton}>
        {number} Times Clicked
      </button>
      <div>
        <p>Count : {count}</p>
        <button className="font-bold border-2" onClick={Increment}>
          +
        </button>
        <button className="font-bold border-2" onClick={Decrement}>
          -
        </button>
      </div>

      <div
        onClick={TextButton}
        className={`${text == "On" ? "bg-green-600" : "bg-red-600"}`}
        style={{ padding: "20px" }}
      >
        <button className=" font-bold">{text}</button>
      </div>
      <div className={`${click == "On" ? "bg-green-600" : "bg-red-600"}`}>
        <button
          className=" px-60 font-extrabold border-4 w-full"
          onClick={Clicked}
        >
          {click ? "ON" : "OFF"}
        </button>
      </div>
    </div>
  );
};
export default Hook;
