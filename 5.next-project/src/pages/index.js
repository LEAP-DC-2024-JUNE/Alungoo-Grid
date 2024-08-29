import Image from "next/image";
import { Inter } from "next/font/google";
import Logo from "@/icons/Logo";
import Toggle from "@/icons/toggle";

export default function Home() {
  return (
    <navbar className="flex justify-between">
      <Logo />
      <div>
        <ul className="flex">
          <li className="mx-5">About</li>
          <li className="mx-5">Work</li>
          <li className="mx-5">Testimonials</li>
          <li className="mx-5">Contact</li>
        </ul>
      </div>
      <div className="flex">
        <Toggle />
        <button className=" pt-0.3 pb-0.3 bg-gray-900 text-white rounded-lg mx-4">
          Download CV
        </button>
      </div>
    </navbar>
  );
}
