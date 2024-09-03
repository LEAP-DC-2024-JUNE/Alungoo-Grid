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
      <button className="bg-gradient-to-r from-slate-200 to-slate-500">
        Skills
      </button>
      <p>The skills, tools and technologies I am really good at:</p>
      <div>
        <div>
          <JS />
          <TS />
          <React />
          <Next />
          <Node />
          <Express />
          <Sass />
          <Socket />
        </div>
        <div>
          {/* <SQL /> */}
          <Mongo />
          <Sass />
        </div>
      </div>
    </div>
  );
}
