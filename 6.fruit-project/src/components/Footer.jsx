import Facebook from "@/icons/Facebook";
import Instagram from "@/icons/Instagram";
import LinkedIn from "@/icons/LinkedIn";
import Twitter from "@/icons/Twitter";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className=" py-10 flex flex-col gap-2 bg-green-900 ">
      <div className=" flex  flex-row justify-around ">
        <div className=" flex flex-col gap-4 items-start">
          <button className=" text-white font-bold text-4xl">
            <Link href={"/"}>GoodFoods</Link>
          </button>
          <button className=" text-white font-normal text-2xl ">
            Shopping
          </button>
          <button className=" text-white font-normal text-m ">
            Weekly sales
          </button>
          <button className=" text-white font-normal text-m ">
            Browse In-Store
          </button>
          <button className=" text-white font-normal text-m ">
            Grocery Pickup & Delivery →
          </button>
          <button className=" text-white font-normal text-m ">Catering</button>
          <button className=" text-white font-normal text-m ">
            Shipped to You
          </button>
          <button className=" text-white font-normal text-m ">
            Order Online
          </button>
        </div>
        <div className=" flex flex-col gap-4 items-start ">
          <button className=" text-white font-normal text-m ">
            About GoodFoods
          </button>
          <button className=" text-white font-normal text-m ">
            Our Values
          </button>
          <button className=" text-white font-normal text-m ">
            Departments
          </button>
          <button className=" text-white font-normal text-m ">Career</button>
          <button className=" text-white font-normal text-m ">Newsroom</button>
        </div>
        <div>
          <div className=" flex flex-col items-start gap-8 ">
            <button className=" text-white font-normal text-2xl ">
              Need Help?
            </button>
            <button className=" text-white font-normal text-m ">
              Visit customer care
            </button>
            <button className=" text-white font-normal text-lg ">
              Connect With Us
            </button>
          </div>
          <div className=" flex gap-10 my-8">
            <Facebook />
            <Twitter />
            <Instagram />
            <LinkedIn />
          </div>
          <button className=" border-[2px] rounded-3xl px-6 py-3 text-white">
            Sign up for email
          </button>
        </div>
      </div>
      <div className=" flex py-8  flex-row justify-stretch pl-[250px]">
        <div>
          <p className=" text-white font-light text-xs ml-10">
            © All Rights Reserved.
          </p>
        </div>
        <div className=" flex gap-4">
          <p className=" text-white font-light text-xs ml-10">Term of Use</p>
          <p className=" text-white font-light text-xs ml-10">Privacy Policy</p>
          <p className=" text-white font-light text-xs ml-10">Cookie Policy</p>
        </div>
      </div>
    </div>
  );
};
