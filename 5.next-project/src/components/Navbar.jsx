import Logo from "@/icons/Logo";
import Sun from "@/icons/Sun";
import { Moon } from "@/icons/Moon";
import { useTheme } from "next-themes";
import HamburgerIcon from "@/icons/HamburgerIcon";
import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react";
import DarkLogo from "@/icons/DarkLogo";

export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);

  let toggleTheme = () => {
    if (theme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div className="xl:w-full xl:flex xl:gap-60 xl:justify-between  dark:bg-gray-950 dark:border-gray-950   w-screen item-center">
      <div className=" flex justify-between xl:mx-10 p-10">
        <div className=" ">{theme == "light" ? <Logo /> : <DarkLogo />}</div>
        <div className="xl:invisible ">
          <button onClick={() => setIsVisible(!isVisible)}>
            <HamburgerIcon />
          </button>
          {isVisible && (
            <HamburgerMenu isVisible={isVisible} setIsVisible={setIsVisible} />
          )}
        </div>
      </div>
      <div className="xl:flex invisible xl:justify-end">
        <div className=" ">
          <ul className="flex gap-8 font-serif  text-gray-600 text-pretty xl:visible dark:text-gray-300">
            <li className="hover:shadow-xl sm: m-5">About</li>
            <li className="hover:shadow-xl sm: m-5"> Work</li>
            <li className="hover:shadow-xl sm: m-5">Testimonials</li>
            <li className="hover:shadow-xl sm: m-5">Contact</li>
          </ul>
        </div>
        <div className="xl:flex xl:flex-row xl:visible xl:gap-4 xl:ml-28 xl:mx-10">
          <div onClick={toggleTheme} className=" flex mt-3">
            {theme === "dark" ? <Moon /> : <Sun />}
          </div>
          <div className="">
            <button>Download CV</button>
          </div>
        </div>
      </div>
    </div>
  );
};
