export const Header = () => {
  return (
    <div className=" bg-green-900 flex flex-row justify-between fixed top-0 right-0 left-0 h-[100px] items-center ">
      <div className=" text-white font-bold text-lg">GoodFoodS</div>
      <div>
        <input
          typeof=" text"
          placeholder=" Search ..."
          className=" rounded-lg w-[500px]"
        ></input>
        <button>
          <img src="/" alt="search" />
        </button>
      </div>
      <div></div>
    </div>
  );
};
