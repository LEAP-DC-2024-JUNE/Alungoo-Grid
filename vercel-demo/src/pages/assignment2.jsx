const Assignment2 = () => {
  const array = ["apple", "banana", "kiwi", "pear"];
  const fruits = array.filter((element) => {
    return element.length > 4;
  });

  return (
    <div>
      <div>
        Filter By Length
        {fruits.map((fruit) => {
          return <p>{fruit}</p>;
        })}
      </div>
    </div>
  );
};
export default Assignment2;
