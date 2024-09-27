import Facebook from "@/icons/Facebook";
import Instagram from "@/icons/Instagram";
import LinkedIn from "@/icons/LinkedIn";
import MainLogo from "@/icons/MainLogo";
import Twitter from "@/icons/Twitter";
import Link from "next/link";

const Footer = () => {
  return (
    <div class=" bg-[#E8E8EA] w-full h-auto mt-10">
      <div className=" flex justify-evenly text-center">
        <div>
          <p className=" font-bold">About</p>
          <p className=" w-[300px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quia,
            veniam officia incidunt neque adipisci iste perspiciatis illo? Non
            cumque doloremque quisquam quibusdam nemo praesentium ipsam
            perferendis facilis, saepe sapiente!
          </p>
          <p>Email: info@jstemplate.net</p>
          <p>Phone: 880 123 456 789</p>
        </div>
        <div className=" flex flex-col">
          <Link href="/">Home</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Contact</Link>
        </div>
        <div className=" flex">
          <Facebook />
          <Twitter />
          <Instagram />
          <LinkedIn />
        </div>
      </div>
      <div className=" flex justify-between">
        <div className=" flex">
          <div>
            <MainLogo />
          </div>
          <div>
            <p>MetaBlog</p>
            <p>© All Rights Reserved.</p>
          </div>
        </div>
        <div className=" flex gap-10">
          <p className=" border-r-[1px]">Term of Use</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
