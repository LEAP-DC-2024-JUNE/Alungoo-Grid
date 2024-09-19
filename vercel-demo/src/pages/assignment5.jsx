const Assignment5 = () => {
  const students = [
    { name: "Alice", grade: 58 },
    { name: "Bob", grade: 72 },
    { name: "Charlie", grade: 85 },
    { name: "David", grade: 45 },
  ];
  const passingStudents = students.filter((student) => {
    return student.grade >= 60;
  });

  return (
    <div>
      <div className=" font-bold text-xl flex gap-10">
        Filter Passing Students :
        {passingStudents.map((pass, index) => {
          return (
            <div key={index}>
              <p>{pass.name}</p>
              <p>{pass.grade}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Assignment5;
