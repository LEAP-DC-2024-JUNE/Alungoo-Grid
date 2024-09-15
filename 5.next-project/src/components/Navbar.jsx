import Logo from "@/icons/Logo";
import Toggle from "../icons/Toggle";
import Moon from "../icons/Moon";
import { useTheme } from "next-themes";
import Image from "next/image";

export const Navbar = () => {
  // const { setTheme, theme } = useTheme();

  // const toggleTheme = () => {
  //   if (theme == "dark") {
  //     setTheme("light");
  //   } else {
  //     setTheme("dark");
  //   }
  // };
  //
  // const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div className=" sm:flex sm:flex-col">
      <navbar className="   xl:w-3/4 xl:m-auto xl:flex xl:justify-between xl:gap-4 xl:py-2 ">
        <div className="  py-2">
          <Logo />
        </div>
        <div className="xl:flex">
          <div className="">
            <ul className="xl:flex gap-4 font-serif py-2 text-gray-800 sm: text-pretty ">
              <li className="hover:shadow-xl sm: m-5">About</li>
              <li className="hover:shadow-xl sm: m-5"> Work</li>
              <li className="hover:shadow-xl sm: m-5">Testimonials</li>
              <li className="hover:shadow-xl sm: m-5">Contact</li>
            </ul>
          </div>

          <div className="xl:flex sm:flex sm:flex-col xl:flex-row">
            <button className=" sm: p-4">
              <Toggle />
            </button>
            <button className=" xl:px-2.5 bg-gray-900 text-white rounded-3xl xl:mx-4 ">
              Download CV
            </button>
          </div>
        </div>
      </navbar>
    </div>
  );
};
