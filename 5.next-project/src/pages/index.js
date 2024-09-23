// import Logo from "@/icons/Logo";
// import Toggle from "@/icons/toggle";

import Intro from "./intro";
import About from "./about";
import Experience from "./experience";
import Skills from "./skills";
import Work from "./work";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
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
