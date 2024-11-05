import Cart from "./svg/Cart";
import LocationLogo from "./svg/LocationLogo";
import SearchLogo from "./svg/SearchLogo";
import User from "./svg/User";
import Link from "next/link";

export const Header = () => {
  return (
    <div className=" bg-green-900 flex flex-row justify-evenly fixed top-0 right-0 left-0 h-[80px] items-center">
      <button className=" text-white font-bold text-4xl ml-10">
        <Link href={"/"}>GoodFoods</Link>
      </button>
      <div>
        <input
          typeof=" text"
          placeholder="   Search In-Store Products"
          className=" rounded-2xl w-[550px] h-[35px]"
        ></input>
        <button className=" -ml-8 cursor-pointer ">
          <SearchLogo />
        </button>
      </div>
      <div className=" flex flex-row items-center gap-2">
        <div>
          <LocationLogo />
        </div>
        <div>
          <p className=" font-normal text-white font-sans">GoodFoodS</p>
          <p className=" font-medium text-white">Find a Store</p>
        </div>
      </div>
      <div className=" flex item-center gap-2">
        <div>
          <User />
        </div>
        <div className=" font-medium text-white">Log In</div>
      </div>
      <div className=" flex items-center gap-2 mr-10">
        <div>
          <Cart />
        </div>
        <div className=" font-medium text-white">Cart</div>
      </div>
    </div>
  );
};
