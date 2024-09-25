import { useState } from "react";

const Register = () => {
  const [membership, setMembership] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [email, setEmail] = useState("");

  const handleFirstName = (parameter1) => {
    setFirstName(parameter1);
  };
  const handleLastName = (parameter1) => {
    setLastName(parameter1);
  };
  const handleAddress = (parameter1) => {
    setAddress(parameter1);
  };
  const handleCity = (parameter1) => {
    setCity(parameter1);
  };
  const handleZip = (parameter1) => {
    setZip(parameter1);
  };
  const handleEmail = (parameter1) => {
    setEmail(parameter1);
  };
  const handleRadioInput = (param1) => {
    setMembership(param1);
  };

  return (
    <div>
      <div className=" xl:text-2xl text-blue-600 font-bold ">
        New Member Registration
      </div>
      <div className="">
        <div className=" flex gap-20">
          <div>
            <label class="after:content-['*'] after:ml-0.5 after:text-red-500  text-sm font-medium text-slate-700">
              First Name
            </label>
            <input
              class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
              type="text"
              onChange={(event) => {
                handleFirstName(event.target.value);
              }}
            />
          </div>
          <div>
            <label class="after:content-['*'] after:ml-0.5 after:text-red-500  text-sm font-medium text-slate-700">
              Last Name
            </label>
            <input
              class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
              type="text"
              onChange={(e) => {
                handleLastName(e.target.value);
              }}
            />
          </div>
        </div>
        <div className="flex  gap-20">
          <div>
            <label class="after:content-['*'] after:ml-0.5 after:text-red-500  text-sm font-medium text-slate-700">
              {" "}
              Address
            </label>
            <input
              class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1"
              type="text"
              onChange={(event) => {
                handleAddress(event.target.value);
              }}
            />
          </div>
          <div>
            <label class="after:content-['*'] after:ml-0.5 after:text-red-500  text-sm font-medium text-slate-700">
              {" "}
              Address 2
            </label>
            <input
              class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
              type="text"
            />
          </div>
        </div>
        <div>
          <label class="after:content-['*'] after:ml-0.5 after:text-red-500  text-sm font-medium text-slate-700">
            {" "}
            City
          </label>
          <input
            class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
            type="text"
            onChange={(e) => {
              handleCity(e.target.event);
            }}
          />
        </div>
        <div className="flex gap-[181px]">
          <div>
            <label class="after:content-['*'] after:ml-0.5 after:text-red-500  text-sm font-medium text-slate-700">
              State Province
            </label>
            <select class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1"></select>
            {/* <option className="xl:invisible">Alaska</option> */}
          </div>
          <div className="flex flex-col">
            <label class="after:content-['*'] after:ml-0.5 after:text-red-500   text-sm font-medium text-slate-700">
              {" "}
              Zip/Postal Code
            </label>
            <input
              class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500  rounded-md sm:text-sm focus:ring-1"
              type="number"
              onChange={(e) => {
                handleZip(e.target.value);
              }}
            />
          </div>
        </div>
        <div>
          <label class="after:content-['*'] after:ml-0.5 after:text-red-500  text-sm font-medium text-slate-700">
            {" "}
            Phone
          </label>
          <input
            class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
            type="number"
            placeholder="( _ ) __ - __"
          />
        </div>
        <div className="flex flex-col ">
          <label class="after:content-['*'] after:ml-0.5 after:text-red-500 text-sm font-medium text-slate-700">
            Email Address
          </label>
          <input
            class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md sm:text-sm focus:ring-1"
            type="email"
            onChange={(e) => {
              handleEmail(e.target.value);
            }}
          />
        </div>
        <div className="">
          <label class="after:content-['*'] after:ml-0.5 after:text-red-500   text-sm font-medium text-slate-700">
            Membership type
          </label>

          <div className="flex gap-5">
            <input
              class="mt-1 px-3 py-2 bg-white border  border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1 text-sm font-medium text-slate-700"
              type="radio"
              value={"Standard"}
              name="membershipType"
              onChange={(event) => handleRadioInput(event.target.value)}
            />
            <label class=" text-sm font-medium text-slate-700">Standard </label>
            <input
              class="mt-1 px-3 py-2 bg-white border  border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1 text-sm font-medium text-slate-700"
              type="radio"
              value={"Premium"}
              name="membershipType"
              onChange={(event) => handleRadioInput(event.target.value)}
            />
            <label class=" text-sm font-medium text-slate-700">Premium</label>
            <input
              class="mt-1 px-3 py-2 bg-white border  border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1 text-sm font-medium text-slate-700"
              type="radio"
              value={"Ultimate"}
              name="membershipType"
              onChange={(event) => handleRadioInput(event.target.value)}
            />
            <label class=" text-sm font-medium text-slate-700">Ultimate</label>
          </div>
          <button
            className="border-2 mt-10"
            onClick={() =>
              console.log(
                membership,
                firstName,
                lastName,
                address,
                city,
                zip,
                email
              )
            }
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
export default Register;
