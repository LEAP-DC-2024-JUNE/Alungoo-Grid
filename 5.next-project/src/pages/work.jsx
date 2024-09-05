import { Workcard } from "@/components/workcard";

const Work = () => {
  return (
    <div className=" bg-white  w-3/4 m-auto px-72 text-center">
      <button className=" text-sm px-4 py-2 bg-gradient-to-r from-slate-200 to-slate-500 rounded-2xl mt-10 mx-96 text-gray-800 font-medium">
        Works
      </button>
      <p className=" mt-5 px-60 text-center">
        Some of the noteworthy projects I have built:
      </p>

      <Workcard
        para="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            laboriosam mollitia. Quod deserunt incidunt et nam voluptatum,
            laboriosam assumenda aliquam fuga ea omnis eligendi cum iure magni.
            Iste, est fugiat?"
      />
    </div>
  );
};

export default Work;
