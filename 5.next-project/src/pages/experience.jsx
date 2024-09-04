import Upwork from "@/icons/Upwork";
import Image from "next/image";
// import upwork from "../../public/upwork.png";

export default function Experience() {
  const arr = [
    {
      imgsrc: <Upwork />,
      title: "Sr.Frontend Developer",
      description: "Lorem khjgdsif.kjbvskjdv.bksjdbf",

      dates: "Nov 2021-Present",
    },
    {
      imgsrc: <Upwork />,
      title: "Team Lead",
      description: "Lorem",

      dates: "Jul 2017-Oct 2021",
    },
    {
      imgsrc: <Upwork />,
      title: "Full Stack Developer",
      description: "Lorem",

      dates: "Dec 2015-May 2017",
    },
  ];

  return (
    <div className=" bg-gray-50  w-3/4 m-auto px-72 text-center">
      <button className=" text-sm px-4 py-2 bg-gradient-to-r from-slate-200 to-slate-500 rounded-2xl mt-10 mx-96 text-gray-800 font-medium">
        Experiences
      </button>
      <p className=" mt-5 px-60 text-center">
        Here is a quick summary of my most recent experiences:
      </p>

      <div className=" mt-6">
        {arr.map((element) => {
          return (
            <div className=" m-7 flex justify-between px-10 bg-white drop-shadow-2xl">
              <div>{element.imgsrc}</div>
              <div className=" text-center">
                <div className=" font-medium">{element.title}</div>
                <li>{element.description}</li>
              </div>
              <div>{element.dates}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
