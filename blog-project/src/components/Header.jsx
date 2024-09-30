import MainLogo from "@/icons/MainLogo";
import Link from "next/link";

export const Header = ({ setInputValue }) => {
  return (
    <div className="flex justify-between px-40 items-center py-5">
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
      <div>
        <input
          type="text"
          className=" bg-slate-100 border-2 border-gray"
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search ... "
        ></input>
      </div>
    </div>
  );
};
