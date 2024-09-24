import Logo from "@/icons/Logo";
import Sun from "@/icons/Sun";
import { Moon } from "@/icons/Moon";
import { useTheme } from "next-themes";
import HamburgerIcon from "@/icons/HamburgerIcon";
import HamburgerMenu from "./HamburgerMenu";
import { useState, useEffect } from "react";
import DarkLogo from "@/icons/DarkLogo";
import DarkHamburgerIcon from "@/icons/DarkHamburgerIcon";

export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  let toggleTheme = () => {
    if (theme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div className="w-full xl:flex xl:gap-60 xl:justify-between  dark:bg-gray-950 dark:border-gray-950  xl:items-center">
      <div className=" flex justify-between xl:mx-10 p-10">
        <div className=" ">{theme == "light" ? <Logo /> : <DarkLogo />}</div>
        <div className="xl:invisible ">
          <button onClick={() => setIsVisible(!isVisible)}>
            {theme == "light" ? <HamburgerIcon /> : <DarkHamburgerIcon />}
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
        <div className="xl:flex xl:flex-row xl:visible xl:gap-4  xl:mx-10 xl:items-center">
          <div onClick={toggleTheme} className=" flex ">
            {theme === "dark" ? <Moon /> : <Sun />}
          </div>
          <div className=" py-[6px] px-[14px] bg-gray-900 text-white rounded-2xl dark:bg-gray-50 dark:text-gray-900 ">
            <button>Download CV</button>
          </div>
        </div>
      </div>
    </div>
  );
};
