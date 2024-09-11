import Logo from "@/icons/Logo";
import Toggle from "../icons/Toggle";
import Moon from "../icons/Moon";
import { useTheme } from "next-themes";
import Image from "next/image";

export const Navbar = () => {
  const { setTheme, theme } = useTheme();

  // const toggleTheme = () => {
  //   if (theme == "dark") {
  //     return <Toggle onClick={() => setTheme("light")} />;
  //   } else {
  //     return <Moon onClick={() => setTheme("dark")} />;
  //   }
  // };
  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div>
      <navbar className="   w-3/4 m-auto flex justify-between gap-4 py-2 bg-gradient-to-r from-slate-200 to-slate-500 px-20 ">
        <div className=" py-2">
          <Logo />
        </div>
        <div className="flex">
          <div className=" mr-8">
            <ul className="flex gap-4 font-serif py-2 text-gray-800">
              <li className="hover:shadow-xl">About</li>
              <li className="hover:shadow-xl"> Work</li>
              <li className="hover:shadow-xl">Testimonials</li>
              <li className="hover:shadow-xl">Contact</li>
            </ul>
          </div>
          <div className="flex ">
            {currentTheme === "dark" ? (
              <button className="/" onClick={() => setTheme("light")}>
                {""}
                <Toggle />
              </button>
            ) : (
              <button className="/" onClick={() => setTheme("dark")}>
                <Moon />
              </button>
            )}
            {/* <Toggle /> */}

            <button className=" px-2.5 bg-gray-900 text-white rounded-3xl mx-4">
              Download CV
            </button>
          </div>
        </div>
      </navbar>
    </div>
  );
};
