import Logo from "@/icons/Logo";
import Toggle from "@/icons/toggle";
import Intro from "./intro";
import About from "./about";
import Experience from "./experience";
import Skills from "./skills";
import Work from "./work";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

import { useTheme } from "next-themes";

const Home = () => {
  const { setTheme, theme } = useTheme();

  const toggleTheme = () => {
    theme == "dark" ? setTheme("light") : setTheme("dark");
  };
  return (
    <div>
      <Navbar toggle={toggleTheme} theme={theme} />
      <Intro />
      <About />
      <Skills />
      <Experience />
      <Work />
      <Footer />
    </div>
  );
};
export default Home;
