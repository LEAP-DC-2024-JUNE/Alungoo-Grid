import { WorkCard } from "@/components/workCard";
import Ubcab from "../../public/Ubcab.png";
import Mentor from "../../public/Mentor.png";
import Itoim from "../../public/itoim.png";
import Buttons from "@/components/buttons";

const Work = () => {
  return (
    <div className=" bg-white  w-3/4 m-auto text-center">
      <button className=" text-sm px-4 py-2 bg-gradient-to-r from-slate-200 to-slate-500 rounded-2xl mt-10 mx-96 text-gray-800 font-medium">
        Works
      </button>
      <p className=" mt-5 px-60 text-center">
        Some of the noteworthy projects I have built:
      </p>
      <div className=" mt-20 flex flex-col items-center gap-6 drop-shadow-md ">
        <WorkCard
          imgSrc={Ubcab}
          title="UBCab"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea omnis, aut nobis sequi atque minus deleniti fugiat delectus distinctio eos numquam nemo officia cumque odit provident repellendus eum. Accusamus ipsum excepturi vitae quisquam eius accusantium aspernatur, vero molestias sint porro, incidunt placeat repudiandae eligendi minus? Recusandae quod magnam mollitia ut."
          chips={Buttons}
        />
        <WorkCard
          imgSrc={Mentor}
          title="MentorHub"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea omnis, aut nobis sequi atque minus deleniti fugiat delectus distinctio eos numquam nemo officia cumque odit provident repellendus eum. Accusamus ipsum excepturi vitae quisquam eius accusantium aspernatur, vero molestias sint porro, incidunt placeat repudiandae eligendi minus? Recusandae quod magnam mollitia ut."
          chips={Buttons}
          reverse={true}
        />
        <WorkCard
          imgSrc={Itoim}
          title="iToim"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea omnis, aut nobis sequi atque minus deleniti fugiat delectus distinctio eos numquam nemo officia cumque odit provident repellendus eum. Accusamus ipsum excepturi vitae quisquam eius accusantium aspernatur, vero molestias sint porro, incidunt placeat repudiandae eligendi minus? Recusandae quod magnam mollitia ut."
          chips={Buttons}
        />
      </div>
    </div>
  );
};

export default Work;
