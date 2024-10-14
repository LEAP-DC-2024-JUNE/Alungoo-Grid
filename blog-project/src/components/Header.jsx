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
    <div className=" py-5 flex px-[210px] items-center justify-between">
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

      <div className=" flex gap-20 text-[ #3B3C4A] items-center w-[800px]">
        <div className=" flex w-[660px] gap-20 justify-center">
          <Link
            href="/"
            className={`hover:text-white hover:bg-black hover: rounded-md ${
              router.pathname == "/"
                ? ` text-white bg-black rounded-md`
                : `text-black`
            }`}
          >
            Home
          </Link>

          <Link
            href="/blog"
            className={` hover:text-white hover:bg-black hover: rounded-md ${
              router.pathname == "/blog"
                ? ` text-white bg-black rounded-md`
                : `text-black`
            }`}
          >
            Blog
          </Link>

          <Link
            href="/contactUs"
            className={` hover:text-white hover:bg-black hover: rounded-md ${
              router.pathname == "/contactUs"
                ? ` text-white bg-black rounded-md`
                : `text-black`
            }`}
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
            <span className=" absolute top-[7px] right-3">
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
