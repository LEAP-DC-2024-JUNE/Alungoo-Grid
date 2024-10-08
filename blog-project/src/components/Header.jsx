import MainLogo from "@/icons/MainLogo";
import Link from "next/link";
import SearchIcon from "@/icons/SearchIcon";
import { useRouter } from "next/router";

export const Header = ({ setInputValue }) => {
  const router = useRouter();
  return (
    <div className="w-full h-[100px] flex gap-20 flex-row justify-evenly px-[340px]">
      <div className=" flex max-w-[1130px]">
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
        <div class="text-[#3B3C4A]">
          <Link href="/">Home</Link>
        </div>
        <div>
          <Link href="/blog">Blog</Link>
        </div>
        <div>
          <Link href="/contactUs">Contact</Link>
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
          <div className=" w-[199.5px]"></div>
        )}
      </div>
    </div>
  );
};
