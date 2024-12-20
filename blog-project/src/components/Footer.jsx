import Facebook from "@/icons/Facebook";
import Instagram from "@/icons/Instagram";
import LinkedIn from "@/icons/LinkedIn";
import MainLogo from "@/icons/MainLogo";
import Twitter from "@/icons/Twitter";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className=" max-[1220px] py-10 flex flex-col gap-2 items-center bg-[#E8E8EA] ">
      <div className=" flex gap-[200px] border-b-[1px] border-gray-300 ">
        <div>
          <p className=" font-bold">About</p>
          <p className=" w-[300px] py-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quia,
            veniam officia incidunt neque adipisci iste perspiciatis illo? Non
            cumque doloremque quisquam quibusdam nemo praesentium ipsam
            perferendis facilis, saepe sapiente!
          </p>
          <div className=" flex gap-3">
            <p className=" font-bold">Email: </p>
            <p>info@jstemplate.net</p>
          </div>
          <div className=" flex gap-1 ">
            <p className=" font-bold">Phone:</p>
            <p>880 123 456 789</p>
          </div>
        </div>
        <div className=" flex flex-col gap-3">
          <Link href="/">Home</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contactUs">Contact</Link>
        </div>
        <div className=" flex gap-10 pr-40">
          <Facebook />
          <Twitter />
          <Instagram />
          <LinkedIn />
        </div>
      </div>
      <div className=" flex gap-[370px] py-5">
        <div className=" flex gap-2">
          <div>
            <MainLogo />
          </div>
          <div>
            <div className="flex">
              <p>Meta</p>
              <p className=" font-semibold">Blog</p>
            </div>
            <p>© All Rights Reserved.</p>
          </div>
        </div>
        <div className=" flex border-r-[1px] border-gray-300">
          <p class="border-r-[1px] border-gray-300 px-10 hover: underline">
            Term of Use
          </p>
          <p class="border-r-[1px] border-gray-300 px-10 hover: underline">
            Privacy Policy
          </p>
          <p class="border-r-[1px] border-gray-300 px-10 hover: underline">
            Cookie Policy
          </p>
        </div>
      </div>
    </div>
  );
};
