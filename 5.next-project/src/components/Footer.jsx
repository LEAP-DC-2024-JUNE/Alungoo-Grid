import Clip from "@/icons/Clipboard";
import DarkClip from "@/icons/DarkClipboard";
import Figma from "@/icons/Figmalogo";
import Gitlogo from "@/icons/Gitlogo";
import Twitterlogo from "@/icons/Twitterlogo";
import { useTheme } from "next-themes";
import DarkFigma from "@/icons/DarkFigmalogo";
import DarkTwitterlogo from "@/icons/DarkTwitterlogo";
import DarkGitlogo from "@/icons/DarkGitlogo";

export const Footer = () => {
  const { theme } = useTheme();
  return (
    <div className="flex flex-col justify-center text-center w-full dark:bg-gray-950 ">
      <div className=" text-sm  text-gray-800 font-medium mt-10">
        <button className=" py-[4px] px-[12px] bg-slate-500 text-white rounded-2xl">
          Get in touch
        </button>
      </div>
      <p className=" mt-5">
        What’s next? Feel free to reach out to me if you're looking <br />
        for a developer, have a query, or simply want to connect.
      </p>
      <div className=" mt-5">
        <div className="flex justify-center text-center gap-3">
          <p className=" font-bold text-2xl">✉️ tom@pinecone.mn</p>
          <button>{theme == "light" ? <Clip /> : <DarkClip />}</button>
        </div>
        <div className="flex justify-center text-center gap-3">
          <p className=" font-bold text-2xl">📞 +976 88112233</p>
          <button>{theme == "light" ? <Clip /> : <DarkClip />}</button>
        </div>
      </div>
      <p className=" text-xs text-gray-500 mt-5 dark:text-gray-50">
        You may also find me on these platforms!
      </p>
      <div className="flex gap-3 text-center justify-center">
        {theme == "light" ? <Gitlogo /> : <DarkGitlogo />}
        {theme == "light" ? <Twitterlogo /> : <DarkTwitterlogo />}
        {theme == "light" ? <Figma /> : <DarkFigma />}
      </div>
      <p className="mt-10 text-gray-600 dark:text-gray-300 text-center dark:bg-gray-800">
        {" "}
        © 2024 | Greetings with 🖤 from Ulaanbaatar
      </p>
    </div>
  );
};
