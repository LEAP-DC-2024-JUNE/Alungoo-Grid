import Logo from "@/icons/Logo";
import CloseIcon from "@/icons/CloseIcon";
import { useTheme } from "next-themes";
import Sun from "@/icons/Sun";
import { Moon } from "@/icons/Moon";
import { useState } from "react";
import DarkLogo from "@/icons/DarkLogo";
import DarkClose from "@/icons/DarkClose";

const HamburgerMenu = ({ isVisible, setIsVisible }) => {
  const { theme, setTheme } = useTheme();

  let toggleTheme = () => {
    if (theme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div className="visible bg-gray-900 bg-opacity-100 fixed top-0 left-0 w-screen h-screen">
      <div className=" dark:bg-gray-950 bg-white m-5">
        <div className=" p-5 border-gray-100 flex justify-between item-center border-b-[1px] dark:border-gray-800 ">
          <div>{theme == "light" ? <Logo /> : <DarkLogo />}</div>
          <div>
            <button onClick={() => setIsVisible(!isVisible)}>
              <div>{theme == "light" ? <CloseIcon /> : <DarkClose />}</div>
            </button>
          </div>
        </div>
        <div className="">
          <ul className="flex flex-col gap-4 p-6 border-b-[1px] dark:border-gray-800 text-pretty border-gray-100">
            <li className="font -medium text-base text-gray-600 dark:text-white">
              About
            </li>
            <li className="font -medium text-base text-gray-600 dark:text-white">
              Work
            </li>
            <li className="font -medium text-base text-gray-600 dark:text-white">
              Testimonials
            </li>
            <li className="font -medium text-base text-gray-600 dark:text-white">
              Contact
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-5 p-5">
          <div className=" flex justify-between">
            <p className="dark:text-white text-gray-600 text-base">
              Switch Theme
            </p>
            <div onClick={toggleTheme} className="cursor-poiter">
              {theme === "dark" ? <Moon /> : <Sun />}
            </div>
          </div>
          <div>
            <button className="bg-gray-900 text-gray-50 text-base px-4 py-[8px] w-full dark:bg-gray-50 dark:text-gray-900 rounded-2xl">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HamburgerMenu;
