import Image from "next/image";
import { Inter } from "next/font/google";
import Logo from "@/icons/Logo";
import Toggle from "@/icons/toggle";
import Intro from "./intro";
import About from "./about";

export default function Home() {
  return (
    <div className=" w-screen">
      <navbar className="flex justify-between gap-4 py-2 mx-20 bg-slate-300">
        <div className=" py-2">
          <Logo />
        </div>
        <div className="flex">
          <div className=" mr-8">
            <ul className="flex gap-4 font-serif py-2 text-gray-600">
              <li>About</li>
              <li>Work</li>
              <li>Testimonials</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="flex ">
            <Toggle />
            <button className=" px-2.5 bg-gray-900 text-white rounded-3xl mx-4">
              Download CV
            </button>
          </div>
        </div>
      </navbar>

      <Intro />
      <About />
    </div>
  );
}
