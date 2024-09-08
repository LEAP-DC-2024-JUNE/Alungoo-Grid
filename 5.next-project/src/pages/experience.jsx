import Upwork from "@/icons/Upwork";
import Image from "next/image";
// import upwork from "../../public/upwork.png";

export default function Experience() {
  const arr = [
    {
      imgsrc: <Upwork />,
      title: "Sr.Frontend Developer",
      description: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      ],

      dates: "Nov 2021-Present",
    },
    {
      imgsrc: <Upwork />,
      title: "Team Lead",
      description: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      ],
      dates: "Jul 2017-Oct 2021",
    },
    {
      imgsrc: <Upwork />,
      title: "Full Stack Developer",
      description: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      ],

      dates: "Dec 2015-May 2017",
    },
  ];

  return (
    <div className=" bg-gray-50  w-3/4 m-auto px-22 text-center py-4">
      <button className=" text-sm px-4 py-2 bg-gradient-to-r from-slate-200 to-slate-500 rounded-2xl mt-10 mx-96 text-gray-800 font-medium">
        Experiences
      </button>
      <p className=" mt-5 px-60 text-center ">
        Here is a quick summary of my most recent experiences:
      </p>

      <div>
        {arr.map((element) => {
          return (
            <div className=" m-10 flex justify-between px-10 bg-white drop-shadow-2xl flex-1">
              <div className=" m-4">{element.imgsrc}</div>
              <div className=" text-center  m-4">
                <div className=" font-medium">{element.title}</div>
                <ul className=" list-disc mt-4">
                  {element.description.map((desc) => {
                    return <li className="m-2">{desc}</li>;
                  })}
                </ul>
              </div>
              <div className=" m-4">{element.dates}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
