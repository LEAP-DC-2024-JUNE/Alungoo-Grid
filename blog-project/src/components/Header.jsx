import MainLogo from "@/icons/MainLogo";
import Link from "next/link";
import SearchIcon from "@/icons/SearchIcon";
import { useRouter } from "next/router";

export const Header = ({ setInputValue }) => {
  const router = useRouter();
  return (
    <div className="">
      <div className="flex items-center justify-center gap-60 h-[120px]">
        <div className="flex items-center">
          <MainLogo />
          <p className=" text-2xl">Meta</p>
          <p className=" font-semibold text-2xl">Blog</p>
        </div>
        <div className=" flex gap-20 text-[ #3B3C4A]">
          <div class="text-[#3B3C4A]">
            <Link href="/">Home</Link>
          </div>
          <div>
            <Link href="/blog">Blog</Link>
          </div>
          <div>
            <Link href="/">Contact</Link>
          </div>
        </div>
        <div className=" relative">
          {router.pathname == "/blog" ? (
            <div>
              <input
                type="text"
                className=" bg-slate-100 border-2 border-gray"
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="  Search"
              />
              <span className=" absolute top-[6px] right-3">
                <SearchIcon />
              </span>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};
