import Express from "@/icons/Express";
import JS from "@/icons/JS";
import Mongo from "@/icons/Mongo";

import Node from "@/icons/Node";
import Tailwind from "../../public/tailwind.png";
import Sass from "@/icons/Sass";
import Socket from "@/icons/Socket";
import Next from "../../public/next.png";
import TS from "@/icons/TS";
import Image from "next/image";
import Reactlogo from "../../public/reactlogo.png";
import Nest from "@/icons/Nest";
import Tech from "../../public/Tech.png";
import FigmaPort from "@/icons/FigmaPort";
import Cypress from "@/icons/Cypress";
import Storybook from "@/icons/Storybook";
import GitPort from "@/icons/GitPort";

export default function Skills() {
  return (
    <div className=" m-auto w-full text-center dark:bg-gray-950">
      <button className=" text-sm px-4 py-2 bg-gradient-to-r from-slate-200 to-slate-500 rounded-2xl mt-10 xl:mx-96 text-gray-800 font-medium">
        Skills
      </button>
      <p className=" mt-5 text-center p-5">
        The skills, tools and technologies I am really good at:
      </p>
      <div className=" flex flex-row justify-between flex-wrap p-10 xl: gap-20  ">
        <JS />
        <TS />
        <Image src={Reactlogo} />
        <Image src={Tailwind} />
        <Node />
        <Express />
        <Nest />
        <Socket />
        <Image src={Tech} />
        <Image src={Next} />
        <Mongo />
        <Sass />
        <FigmaPort />
        <Cypress />
        <Storybook />
        <GitPort />
      </div>
    </div>
  );
}
