// const arr = [2, 5, 100];

// const result = arr.map((element) => {
//   return element * 2;
// });

// return result;
import Buttons from "@/components/buttons";
import Pic from "../components/pic";
export default function recap() {
  return (
    <div>
      <h1 className="text-pink-700 text-3xl">Snapshot</h1>
      <input type="text" placeholder="Search.."></input>

      <Buttons />
      <p className=" text-blue-800 text-2xl">Mountain Picture</p>
      <Pic />
    </div>
  );
}
