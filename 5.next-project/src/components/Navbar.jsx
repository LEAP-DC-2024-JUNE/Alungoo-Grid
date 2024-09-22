import Logo from "@/icons/Logo";
import Sun from "@/icons/Sun";
import { Moon } from "@/icons/Moon";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import Hamburger from "@/icons/Hamburger";

export const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  let toggleTheme = () => {
    if (theme == "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <div>
      <navbar className=" w-full xl:flex xl:gap-4 xl:py-2  dark:bg-gray-950 dark:border-gray-950 flex flex-row">
        <div className="  xl:py-2 xl:ml-20">
          <Logo />
        </div>
        <div className="xl:flex invisible">
          <div className=" ">
            <ul className="flex gap-6 font-serif py-2 text-gray-600 text-pretty xl:visible dark:text-gray-300">
              <li className="hover:shadow-xl sm: m-5">About</li>
              <li className="hover:shadow-xl sm: m-5"> Work</li>
              <li className="hover:shadow-xl sm: m-5">Testimonials</li>
              <li className="hover:shadow-xl sm: m-5">Contact</li>
            </ul>
          </div>
          <div className="xl:flex xl:flex-row xl:visible">
            <button onClick={toggleTheme} className=" flex">
              {theme === "dark" ? <Sun /> : <Moon />}
            </button>
            <button className="rounded-xl bg-gray-900 text-gray-50 font-medium text-base px-4 py-[6px] dark:bg-gray-50 dark:text-gray-900">
              Download CV
            </button>
          </div>
        </div>
        <span className="xl:invisible ml-10">
          <Hamburger />
        </span>
      </navbar>
    </div>
  );
};
