const callBack = () => {
  const handleClick = (callback, param2) => {
    console.log("button daragdla");
    callback();
    console.log(param2);
  };
  const logHelloWorld = () => {
    console.log("Hello World");
  };
  return (
    <div>
      <button
        className=" bg-blue-300"
        onClick={() => handleClick(logHelloWorld)}
      >
        {" "}
        Click me ehnii arga
      </button>
      <button
        className=" bg-pink-300"
        onClick={() =>
          handleClick(() => {
            console.log("callback ajilla");
          }, "Leap")
        }
      >
        {" "}
        Click me 2dahi ehnii arga
      </button>
    </div>
  );
};
export default callBack;
