import Logo from "@/icons/Logo";
import Sun from "@/icons/Sun";
import { Moon } from "@/icons/Moon";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

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
    <div className="flex flex-col">
      <navbar className="   xl:w-3/4 xl:m-auto xl:flex xl:justify-between xl:gap-4 xl:py-2  dark:bg-gray-950 dark:border-gray-950">
        <div className="  py-2">
          <Logo />
        </div>
        <div className="xl:flex">
          <div className="">
            <ul className="xl:flex gap-4 font-serif py-2 text-gray-800 text-pretty xl:visible">
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
            <button className=" px-4 py-[5px] bg-gray-900 text-white rounded-xl dark:bg-gray-50 dark:text-gray-900">
              Download CV
            </button>
          </div>
        </div>
      </navbar>
    </div>
  );
};
