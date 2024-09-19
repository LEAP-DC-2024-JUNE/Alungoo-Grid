import { useState } from "react";

const Form = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const handleFirstName = (param1) => {
    setFirstName(param1);
  };

  const handleLastName = (param1) => {
    setLastName(param1);
  };
  const handleEmail = (param1) => {
    setEmail(param1);
  };
  const submitButton = () => {
    console.log(firstName, lastName, email);
  };

  return (
    <div className="flex flex-row gap-10">
      FirstName:
      <input
        type="text"
        placeholder="FirstName"
        className="border-2 w-1/2"
        onChange={(event) => handleFirstName(event.target.value)}
      />
      LastName:
      <input
        type="text"
        placeholder="LastName"
        className="border-2 w-1/2 "
        onChange={(event) => handleLastName(event.target.value)}
      />
      email:
      <input
        type="email"
        placeholder="email"
        className="border-2 w-1/2"
        onChange={(event) => handleEmail(event.target.value)}
      />
      <button className="border-2 bg-gray-200" onClick={submitButton}>
        Submit
      </button>
      {/* <input type="password" placeholder="alungoo" className="border-2" />
      ↑ password
      <input
        type="email"
        placeholder="Alungoo976@gmail.com"
        className="border-2"
      />
      ↑ email
      <input type="number" placeholder="123456" className="border-2" />
      ↑ number
      <input type="checkbox" className="border-2" />
      ↑ checkbox
      <input type="radio" className="border-2" />
      ↑ radio
      <input type="hidden" className="border-2" />
      ↑ hidden
      <input type="button" className="border-2" />
      ↑ button
      <input type="color" placeholder="blue" className="border-2" />
      ↑ color
      <input type="file" className="border-2" />
      ↑ file
      <input type="image" className="border-2" />↑ image */}
    </div>
  );
};

export default Form;
