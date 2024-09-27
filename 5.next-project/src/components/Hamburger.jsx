export const Hamburger = () => {
  return (
    <div>
      <div className="xl:flex">
        <div className="">
          <ul className="flex gap-6 font-serif py-2 text-gray-600 text-pretty xl:visible dark:text-gray-300">
            <li className="hover:shadow-xl sm: m-5">About</li>
            <li className="hover:shadow-xl sm: m-5"> Work</li>
            <li className="hover:shadow-xl sm: m-5">Testimonials</li>
            <li className="hover:shadow-xl sm: m-5">Contact</li>
          </ul>
        </div>
        <div className="xl:flex flex flex-col xl:flex-row">
          <button onClick={toggleTheme} className=" flex items-center">
            Switch theme
            {theme === "dark" ? <Sun /> : <Moon />}
          </button>
          <button className=" px-3 py-1 text-base  bg-gray-900 text-gray-50 rounded-2xl dark:bg-gray-100 dark:text-gray-900">
            Download CV
          </button>
        </div>
      </div>
    </div>
  );
};
