import { Products } from "@/components/Products";
import ResponsiveDemo from "@/components/ResponsiveDemo";
import UseState from "../components/UseState";

export default function Home() {
  return (
    <div className="m-40">
      HICHEELUUD
      <div style={{ border: "2px solid purple", margin: "10px" }}>
        September/17/2024
        <UseState />
      </div>
      <div>
        <Products />
        <ResponsiveDemo />
      </div>
    </div>
  );
}
