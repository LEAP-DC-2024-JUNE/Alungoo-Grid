import Express from "@/icons/Express";
import JS from "@/icons/JS";
import Mongo from "@/icons/Mongo";

import Node from "@/icons/Node";
import Tailwindcss from "../../public/tailwindcss.png";
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
    <div className=" m-auto w-3/4 text-center">
      <button className=" text-sm px-4 py-2 bg-gradient-to-r from-slate-200 to-slate-500 rounded-2xl mt-10 xl:mx-96 text-gray-800 font-medium">
        Skills
      </button>
      <p className=" mt-5 text-center">
        The skills, tools and technologies I am really good at:
      </p>
      <div>
        <div className=" xl: flex xl: flex-row xl:gap-32 py-10  xl:justify-center sm: flex-wrap sm: gap-24 ">
          <JS />
          <TS />
          <Image src={Reactlogo} />
          <Image src={Tailwindcss} />
          <Node />
          <Express />
          <Nest />
          <Socket />
        </div>
        <div className="xl: flex xl: flex-row xl:gap-32 py-10 xl:justify-center sm: flex-wrap sm: gap-24 ">
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
    </div>
  );
}
