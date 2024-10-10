import MainLogo from "@/icons/MainLogo";
import Link from "next/link";
import SearchIcon from "@/icons/SearchIcon";
import { useRouter } from "next/router";
import { useContext } from "react";
import { MyContext } from "@/utils/context";

export const Header = () => {
  const router = useRouter();
  const { setInputValue } = useContext(MyContext);
  return (
    <div className="max-[1220px] h-[100px] flex gap-20 flex-row justify-evenly px-[250px]">
      <div className=" flex ">
        <div className="flex items-center">
          <button>
            <Link href="/">
              <MainLogo />
            </Link>
          </button>
          <button className=" text-2xl ml-1">
            <Link href="/">Meta</Link>
          </button>
          <button className=" font-semibold text-2xl">
            <Link href="/">Blog</Link>
          </button>
        </div>
      </div>
      <div className=" flex gap-20 text-[ #3B3C4A] items-center">
        <div>
          <Link
            href="/"
            className="  hover: text-black hover:bg-slate-100 hover: rounded-md"
          >
            Home
          </Link>
        </div>
        <div>
          <Link
            href="/blog"
            className="  hover: text-black hover:bg-slate-100 hover: rounded-md"
          >
            Blog
          </Link>
        </div>
        <div>
          <Link
            href="/contactUs"
            className="  hover: text-black hover:bg-slate-100 hover: rounded-md"
          >
            Contact
          </Link>
        </div>
      </div>
      <div className=" relative items-center flex">
        {router.pathname == "/blog" ? (
          <div>
            <input
              type="text"
              className=" bg-slate-100 border-2 border-gray"
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="  Search"
            />
            <span className=" absolute top-[42px] right-3">
              <SearchIcon />
            </span>
          </div>
        ) : (
          <div className=" w-[210px]"></div>
        )}
      </div>
    </div>
  );
};
