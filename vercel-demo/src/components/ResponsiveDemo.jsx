const Responsive = () => {
  let age = 18;

  if (9 < 10 || 10 > 20) {
    console.log("ajillana");
  } else {
    console.log("ajillangui");
  }

  let loading = true;

  let obj = {
    name: "Duluu",
    lastName: "Billy",
  };

  return (
    <div>
      <div className=" font-extrabold text-2xl">
        {loading == true ? <div>Loading</div> : <div>Hi leap guys</div>}
        {loading && <div>Loading</div>}
        {!loading && <div>hi leap guys</div>}

        {age < 18 ? <div>Nasand hureegui</div> : <div>Nasand hursen</div>}
        {age > 18 ? <div>Nasand hursen</div> : <div>Nasand hureegui</div>}

        {obj.name == "Duluu" && obj.lastName == "Billy" && <div>Welcome</div>}
        {obj.name !== "Duluu" ||
          (obj.lastName !== "Billy" && <div>Newtreh erhgui bn</div>)}
      </div>

      <div className=" sm:flex sm:gap-5">
        <div className=" w-[200px] h-[200px] bg-pink-600"></div>
        <div className=" w-[200px] h-[200px] bg-emerald-600"></div>
        <div className=" w-[200px] h-[200px] bg-blue-700"></div>
      </div>
    </div>
  );
};
export default Responsive;
