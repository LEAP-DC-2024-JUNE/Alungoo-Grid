import { Products } from "@/components/Products";
import ResponsiveDemo from "@/components/ResponsiveDemo";
import UseState from "../components/UseState";
import { FilterFunction } from "@/components/FilterFunction";
import Assignment1 from "./assignment1";
import Assignment2 from "./assignment2";
import Assignment3 from "./assignment3";
import Assignment4 from "./assignment4";
import Assignment5 from "./assignment5";
import Assignment2New from "./assignment2New";
import InputForm from "../pages/inputForm";
import MemberReg from "../pages/memberReg";
import Search from "./searchInput";
// import Promise from "../components";

export default function Home() {
  return (
    <div className="m-40">
      HICHEELUUD
      <div style={{ border: "2px solid purple", margin: "10px" }}>
        September/17/2024
        <UseState />
      </div>
      <div style={{ border: "2px solid purple", margin: "10px" }}>
        September/18/2024
        {/* <FilterFunction />
        <Assignment1 />
        <Assignment2 />
        <Assignment3 />
        <Assignment4 />
        <Assignment5 /> */}
      </div>
      <div style={{ border: "2px solid purple", margin: "10px" }}>
        September/19/2024
        <Assignment2New />
        <InputForm />
      </div>
      <div>
        <MemberReg />
      </div>
      <div style={{ border: "2px solid purple", margin: "10px" }}>
        <p className=" bg-lime-200">September 26</p>
        <Search />
      </div>
      <div>
        {/* <Products />
        <ResponsiveDemo /> */}
        {/* <Promise /> */}
      </div>
    </div>
  );
}
