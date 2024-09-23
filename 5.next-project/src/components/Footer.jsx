import Figma from "@/icons/Figmalogo";
import Gitlogo from "@/icons/Gitlogo";
import Twitterlogo from "@/icons/Twitterlogo";

export const Footer = () => {
  return (
    <div className="flex flex-col justify-center text-center w-full dark:bg-gray-950 ">
      <div className=" text-sm  text-gray-800 font-medium mt-5">
        <button>Get in touch</button>
      </div>
      <p>
        What’s next? Feel free to reach out to me if you're looking for <br /> a
        developer, have a query, or simply want to connect.
      </p>
      <div className=" mt-5">
        <p className=" font-bold text-2xl">✉️ tom@pinecone.mn</p>
        <p className=" font-bold text-2xl">📞 +976 88112233</p>
      </div>
      <p className=" text-xs text-gray-500 mt-5">
        You may also find me on these platforms!
      </p>
      <div className="flex gap-3 text-center justify-center">
        <Gitlogo />
        <Twitterlogo />
        <Figma />
      </div>
      <p className="mt-10 text-gray-600 dark:text-gray-300 text-center dark:bg-gray-800">
        {" "}
        © 2024 | Greetings with 🖤 from Ulaanbaatar
      </p>
    </div>
  );
};
