import Active from "@/icons/Active";
import Figma from "@/icons/Figmalogo";
import Gitlogo from "@/icons/Gitlogo";
import Location from "@/icons/Location";
import Twitterlogo from "@/icons/Twitterlogo";
import Pic1 from "../../public/Pic.png";
import Image from "next/image";

export default function Intro({}) {
  return (
    <div className="xl:flex font-serif xl: text-gray-600 xl:gap-96 w-full xl:m-auto xl:py-24 xl:px-20 xl:flex-row flex flex-col-reverse p-16 dark:bg-gray-950 dark:text-gray-150">
      <div>
        <p className=" font-extrabold text-3xl text-gray-900 dark:text-gray-300">
          Hi, I'm Alungoo 👩‍💻
        </p>
        <p className=" xl:mt-5 ">
          I specialize in full stack development, particularly with React.js and
          Node.js. My main goal is to create exceptional digital experiences
          that are fast, visually appealing, and accessible to everyone. With
          over 7 years of experience in web development, I continue to find joy
          in crafting innovative solutions and designs.
        </p>
        <div className="flex mt-10 gap-2">
          <Location />
          <p>Ulaanbaatar, Mongolia</p>
        </div>

        <div className="flex gap-2">
          <Active />
          <p>Available for new projects</p>
        </div>
        <div className="flex pt-1 size-16 mt-4">
          <Gitlogo />
          <Twitterlogo />
          <Figma />
        </div>
      </div>
      <div className=" xl:w-[700px]">
        <Image src={Pic1} />
      </div>
    </div>
  );
}
