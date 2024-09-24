import Experience from "@/components/Experience";
import Work from "@/components/Work";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import About from "@/components/About";
import Intro from "@/components/Intro";
import Skills from "@/components/Skills";

const Home = () => {
  return (
    <div>
      <Navbar />
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
