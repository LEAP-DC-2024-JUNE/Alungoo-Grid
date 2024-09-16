import ExperienceCard from "@/components/experienceCard";
import Upwork from "../../public/upwork.png";

const Experience = () => {
  const Experiences = [
    {
      imgSrc: Upwork,
      title: "Sr.Frontend Developer",
      description: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      ],

      dates: "Nov 2021-Present",
    },
    {
      imgSrc: Upwork,
      title: "Team Lead",
      description: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      ],
      dates: "Jul 2017-Oct 2021",
    },
    {
      imgSrc: Upwork,
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
    <div className=" bg-gray-50  xl:w-3/4 m-auto px-22 text-center py-4 dark:bg-gray-900">
      <button className=" text-sm px-4 py-2 bg-gradient-to-r from-slate-200 to-slate-500 rounded-2xl mt-10 xl:mx-96 text-gray-800 font-medium">
        Experiences
      </button>
      <p className=" m-5 xl:px-60 text-center ">
        Here is a quick summary of my most recent experiences:
      </p>

      <div className=" xl:m-10 bg-gray-50 dark:bg-gray-900">
        {Experiences.map((experience, index) => {
          return (
            <ExperienceCard
              key={index}
              imgSrc={experience.imgSrc}
              title={experience.title}
              description={experience.description}
              dates={experience.dates}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Experience;
