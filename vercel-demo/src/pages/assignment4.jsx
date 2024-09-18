const Assignment4 = () => {
  const people = [
    { name: "John", age: 17 },
    { name: "Jane", age: 22 },
    { name: "Tom", age: 15 },
    { name: "Emma", age: 30 },
  ];
  const filterByAge = people.filter((person) => {
    return person.age >= 18;
  });

  return (
    <div>
      <div>
        Filter By Age
        {filterByAge.map((human) => {
          return (
            <div>
              <p>{human.name}</p>
              <p>{human.age}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Assignment4;
