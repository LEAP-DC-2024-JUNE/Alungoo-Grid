"use client";
import React from "react";
import { useState } from "react";

const HomePage = () => {
  const [data, setData] = useState({
    lastName: "Geser",
    name: "Sansar",
    age: 3,
  });

  const handleValueChange = (e) => {
    setData((prevState) => ({ ...prevState, [e.target.name]: e.target.value }));
  };
  console.log(data);
  return (
    <div className=" flex flex-col gap-2">
      <label>Last Name:</label>
      <input
        type="text"
        name="lastName"
        value={data.lastName}
        onChange={handleValueChange}
        className=" border-2 border-purple-700 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
      ></input>
      <label>Name:</label>
      <input
        type="text"
        name="name"
        value={data.name}
        onChange={(e) => handleValueChange(e)}
        className=" border-2 border-purple-700 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
      ></input>
      <label>Age:</label>
      <input
        type="number"
        name="age"
        value={data.age}
        onChange={(e) => handleValueChange(e)}
        className=" border-2 border-purple-700 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
      ></input>
    </div>
  );
};

export default HomePage;
