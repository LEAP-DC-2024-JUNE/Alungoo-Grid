import Express from "@/icons/Express";
import JS from "@/icons/JS";
import Mongo from "@/icons/Mongo";
import Next from "@/icons/Next";
import Node from "@/icons/Node";
import React from "@/icons/React";
import Sass from "@/icons/Sass";
import Socket from "@/icons/Socket";
// import SQL from "../../public/Tech.png";
import TS from "@/icons/TS";

export default function Skills() {
  return (
    <div>
      <button className=" text-sm px-4 py-2 bg-gradient-to-r from-slate-200 to-slate-500 rounded-2xl mt-10 mx-96 text-gray-800 font-medium">
        Skills
      </button>
      <p>The skills, tools and technologies I am really good at:</p>
      <div>
        <div>
          <JS />
          <TS />
          {/* <React />
          <Next /> */}
          {/* <Node /> */}
          {/* <Express /> */}
          {/* <Sass />
          <Socket /> */}
        </div>
        <div>
          {/* <SQL /> */}
          {/* <Mongo />
          <Sass /> */}
        </div>
      </div>
    </div>
  );
}
