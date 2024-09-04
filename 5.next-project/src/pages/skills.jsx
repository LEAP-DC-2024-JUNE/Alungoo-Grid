import Express from "@/icons/Express";
import JS from "@/icons/JS";
import Mongo from "@/icons/Mongo";
import Next from "@/icons/Next";
import Node from "@/icons/Node";

import Sass from "@/icons/Sass";
import Socket from "@/icons/Socket";
import Tech from "../../public/tech.png";
import TS from "@/icons/TS";
import Image from "next/image";
import Reactlogo from "../../public/reactlogo.png";
import Nest from "@/icons/Nest";
import Tailwind from "@/icons/Tailwind";
import FigmaPort from "@/icons/FigmaPort";
import Cypress from "@/icons/Cypress";
import Storybook from "@/icons/Storybook";
import GitPort from "@/icons/GitPort";

export default function Skills() {
  return (
    <div className=" m-auto w-3/4 text-center">
      <button className=" text-sm px-4 py-2 bg-gradient-to-r from-slate-200 to-slate-500 rounded-2xl mt-10 mx-96 text-gray-800 font-medium">
        Skills
      </button>
      <p className=" mt-5 text-center">
        The skills, tools and technologies I am really good at:
      </p>
      <div>
        <div className="flex gap-32 py-10  justify-center ">
          <JS />
          <TS />
          <Image src={Reactlogo} />
          <Node />
          <Express />
          <Nest />
          <Socket />
        </div>
        <div className="flex gap-32 py-10 justify-center ">
          <Image src={Tech} />
          <Mongo />
          <Sass />
          <FigmaPort />
          <Cypress />
          <Storybook />
          <GitPort />
        </div>
      </div>
    </div>
  );
}
