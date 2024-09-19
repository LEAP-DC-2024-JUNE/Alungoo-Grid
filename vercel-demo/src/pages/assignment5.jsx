import { useState } from "react";

const Assignment5 = () => {
  const [isPassed, setIsPassed] = useState(true);
  const students = [
    { name: "Alice", grade: 58 },
    { name: "Bob", grade: 72 },
    { name: "Charlie", grade: 85 },
    { name: "David", grade: 45 },
  ];
  const passingStudents = students.filter((student) => {
    return isPassed ? student.grade >= 60 : student.grade < 59;
  });
  const handlePass = (param1) => {
    setIsPassed(param1);
  };
  return (
    <div>
      <div>
        <div className=" font-bold text-xl ">Filter Passing Students :</div>
        <button
          className=" bg-blue-400 border-2"
          onClick={() => handlePass(true)}
        >
          Passed Exam
        </button>
        <button
          className=" bg-pink-400 border-2"
          onClick={() => handlePass(false)}
        >
          Failed Exam
        </button>
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
