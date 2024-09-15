import { WorkCard } from "@/components/WorkCard";
import Ubcab from "../../public/Ubcab.png";
import Mentor from "../../public/Mentor.png";
import Itoim from "../../public/itoim.png";

const Work = () => {
  const works = [
    {
      imgSrc: Ubcab,
      title: "UBCab",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea omnis, aut nobis sequi atque minus deleniti fugiat delectus distinctio eos numquam nemo officia cumque odit provident repellendus eum. Accusamus ipsum excepturi vitae quisquam eius accusantium aspernatur, vero molestias sint porro, incidunt placeat repudiandae eligendi minus? Recusandae quod magnam mollitia ut.",
      buttons: [
        "React.js",
        "Next.js",
        "Typescript",
        "Nest.js",
        "PostgreSQL",
        "Tailwind",
        "Figma",
        "Cypress",
        "Storybook",
        "Git",
      ],
    },

    {
      imgSrc: Mentor,
      title: "MentorHub",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea omnis, aut nobis sequi atque minus deleniti fugiat delectus distinctio eos numquam nemo officia cumque odit provident repellendus eum. Accusamus ipsum excepturi vitae quisquam eius accusantium aspernatur, vero molestias sint porro, incidunt placeat repudiandae eligendi minus? Recusandae quod magnam mollitia ut.",
      buttons: [
        "React.js",
        "Next.js",
        "Typescript",
        "Nest.js",
        "PostgreSQL",
        "Tailwind",
        "Figma",
        "Cypress",
        "Storybook",
        "Git",
      ],
    },

    {
      imgSrc: Itoim,
      title: "iToim",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea omnis, aut nobis sequi atque minus deleniti fugiat delectus distinctio eos numquam nemo officia cumque odit provident repellendus eum. Accusamus ipsum excepturi vitae quisquam eius accusantium aspernatur, vero molestias sint porro, incidunt placeat repudiandae eligendi minus? Recusandae quod magnam mollitia ut.",
      buttons: [
        "React.js",
        "Next.js",
        "Typescript",
        "Nest.js",
        "PostgreSQL",
        "Tailwind",
        "Figma",
        "Cypress",
        "Storybook",
        "Git",
      ],
    },
  ];
  return (
    <div className=" bg-white  xl:w-full m-auto text-center">
      <button className=" text-sm px-4 py-2 bg-gradient-to-r from-slate-200 to-slate-500 rounded-2xl mt-10 xl:mx-96 text-gray-800 font-medium">
        Works
      </button>
      <p className=" mt-5 xl:px-60 text-center">
        Some of the noteworthy projects I have built:
      </p>
      <div className=" m-20 drop-shadow-md ">
        {works.map((work, index) => {
          return (
            <WorkCard
              key={index}
              imgSrc={work.imgSrc}
              title={work.title}
              description={work.description}
              reverse={index % 2 == 0 ? true : false}
              buttons={work.buttons}
            />
          );
        })}
      </div>
      {/* <div className=" mt-20 flex flex-col items-center gap-6 drop-shadow-md ">
        <WorkCard
          imgSrc={Ubcab}
          title="UBCab"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea omnis, aut nobis sequi atque minus deleniti fugiat delectus distinctio eos numquam nemo officia cumque odit provident repellendus eum. Accusamus ipsum excepturi vitae quisquam eius accusantium aspernatur, vero molestias sint porro, incidunt placeat repudiandae eligendi minus? Recusandae quod magnam mollitia ut."
        />
        <WorkCard
          imgSrc={Mentor}
          title="MentorHub"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea omnis, aut nobis sequi atque minus deleniti fugiat delectus distinctio eos numquam nemo officia cumque odit provident repellendus eum. Accusamus ipsum excepturi vitae quisquam eius accusantium aspernatur, vero molestias sint porro, incidunt placeat repudiandae eligendi minus? Recusandae quod magnam mollitia ut."
          reverse={true}
        />
        <WorkCard
          imgSrc={Itoim}
          title="iToim"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea omnis, aut nobis sequi atque minus deleniti fugiat delectus distinctio eos numquam nemo officia cumque odit provident repellendus eum. Accusamus ipsum excepturi vitae quisquam eius accusantium aspernatur, vero molestias sint porro, incidunt placeat repudiandae eligendi minus? Recusandae quod magnam mollitia ut."
        />
      </div> */}
    </div>
  );
};

export default Work;
