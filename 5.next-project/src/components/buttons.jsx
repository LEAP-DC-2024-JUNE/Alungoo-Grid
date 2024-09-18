const ButtonContainer = (props) => {
  const { buttons } = props;
  return (
    <div className=" flex flex-wrap xl:w-[500px] gap-5 mt-10">
      {buttons.map((button) => {
        return (
          <button className=" bg-gray-200 text-gray-500 px-4 py-0.5 rounded-2xl  mr-1 text-wrap font-bold">
            {button}
          </button>
        );
      })}
    </div>
  );
};
export default ButtonContainer;
