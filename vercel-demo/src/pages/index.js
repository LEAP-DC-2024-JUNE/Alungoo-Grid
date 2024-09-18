import { Products } from "@/components/Products";
import ResponsiveDemo from "@/components/ResponsiveDemo";
import UseState from "../components/UseState";
import { FilterFunction } from "@/components/FilterFunction";
import Assignment1 from "./assignment1";
import Assignment2 from "./assignment2";
import Assignment3 from "./assignment3";
import Assignment4 from "./assignment4";

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
        <FilterFunction />
        <Assignment1 />
        <Assignment2 />
        <Assignment3 />
        <Assignment4 />
      </div>
      <div>
        {/* <Products />
        <ResponsiveDemo /> */}
      </div>
    </div>
  );
}
