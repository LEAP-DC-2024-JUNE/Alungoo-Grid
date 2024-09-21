const Register = () => {
  return (
    <div className="xl:w-9/12 p-5 " style={{ border: "solid 1px brown" }}>
      <h1 className=" text-3xl text-blue-600 font-bold m-10 text-center">
        {" "}
        New Member Registration
      </h1>
      <div className="">
        <div className=" flex">
          <label
            className=" font-semibold"
            class="after:content-['*'] after:ml-0.5 after:text-red-500 text-sm font-medium text-slate-700"
          >
            {" "}
            First Name
          </label>
          <input
            class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
            type="text"
          />

          <label
            className=" font-semibold"
            class="after:content-['*'] after:ml-0.5 after:text-red-500  text-sm font-medium text-slate-700"
          >
            {" "}
            Last Name
          </label>
          <input
            class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
            type="text"
          />
        </div>
        <div className="flex flex-row flex-wrap gap-6">
          <label
            className=" font-semibold"
            class="after:content-['*'] after:ml-0.5 after:text-red-500 text-sm font-medium text-slate-700"
          >
            {" "}
            Address
          </label>
          <input
            class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1"
            type="text"
          />

          <label
            className=" font-semibold"
            class="after:content-['*'] after:ml-0.5 after:text-red-500 text-sm font-medium text-slate-700"
          >
            {" "}
            Address 2
          </label>
          <input
            class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
            type="text"
          />
        </div>
        <div>
          <label class="after:content-['*'] after:ml-0.5 after:text-red-500  text-sm font-medium text-slate-700">
            {" "}
            City
          </label>
          <input
            class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
            type="text"
          />
        </div>
        <div className="flex flex-row flex-wrap gap-6">
          <div>
            <label class="after:content-['*'] after:ml-0.5 after:text-red-500  text-sm font-medium text-slate-700">
              {" "}
              State Province
            </label>
            <select class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1"></select>
            <option>Alaska</option>
          </div>

          <label class="after:content-['*'] after:ml-0.5 after:text-red-500   text-sm font-medium text-slate-700">
            {" "}
            Zip/Postal Code
          </label>
          <input
            class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500  rounded-md sm:text-sm focus:ring-1"
            type="number"
          />
        </div>
        <div>
          <label class="after:content-['*'] after:ml-0.5 after:text-red-500  text-sm font-medium text-slate-700">
            {" "}
            Phone
          </label>
          <input
            class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
            type="number"
            placeholder="(_)__-__"
          />
        </div>
        <div>
          <label class="after:content-['*'] after:ml-0.5 after:text-red-500 text-sm font-medium text-slate-700">
            Email Address
          </label>
          <input
            class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 rounded-md sm:text-sm focus:ring-1"
            type="email"
          />
        </div>

        <label class="after:content-['*'] after:ml-0.5 after:text-red-500   text-sm font-medium text-slate-700">
          Membership type
        </label>

        <div className="flex gap-10">
          <input
            class="mt-1 px-3 py-2 bg-white border  border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1 text-sm font-medium text-slate-700"
            type="radio"
          />
          <label class=" text-sm font-medium text-slate-700">Standard </label>
          <input
            class="mt-1 px-3 py-2 bg-white border  border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1 text-sm font-medium text-slate-700"
            type="radio"
          />
          <label class=" text-sm font-medium text-slate-700">Premium</label>
          <input
            class="mt-1 px-3 py-2 bg-white border  border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1 text-sm font-medium text-slate-700"
            type="radio"
          />
          <label class=" text-sm font-medium text-slate-700">Ultimate</label>
        </div>
      </div>
    </div>
  );
};
export default Register;
