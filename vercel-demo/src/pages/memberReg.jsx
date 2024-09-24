const Register = () => {
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
            />
          </div>
          <div>
            <label class="after:content-['*'] after:ml-0.5 after:text-red-500  text-sm font-medium text-slate-700">
              Last Name
            </label>
            <input
              class="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
              type="text"
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
    </div>
  );
};
export default Register;
