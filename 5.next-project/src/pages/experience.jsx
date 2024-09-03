import Upwork from "@/icons/Upwork";

export default function Experience() {
  const arr = [
    {
      logo: "<Upwok>",
      title: "Sr.Frontend Devekoper",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, maiores.",
      dates: "Nov 2021-Present",
    },
    {
      title: "Team Lead",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias, maiores.",
      dates: "July 2017-Nov 2021",
    },
  ];

  return (
    <div className=" bg-gray-50">
      <button className=" text-sm px-4 py-2 bg-gradient-to-r from-slate-200 to-slate-500 rounded-2xl mt-10 mx-96 text-gray-800 font-medium">
        Experiences
      </button>
      <p>Here is a quick summary of my most recent experiences:</p>

      <div className=" mt-6">
        {arr.map((element) => {
          return (
            <div>
              <p className="bg-white drop-shadow-md px-4 ">
                {element.title} {element.dates}
              </p>
              <p className=" list-disc bg-white drop-shadow-md mt-5">
                {element.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
