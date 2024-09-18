const Assignment1 = () => {
  const array = [1, 2, 3, 4, 5, 6, 7, 8];
  const evenNumberArray = array.filter((number) => {
    return number % 2 == 0;
  });

  return (
    <div>
      <div>
        Filter Even Number
        {evenNumberArray.map((number) => {
          return <p>{number}</p>;
        })}
      </div>
    </div>
  );
};
export default Assignment1;
