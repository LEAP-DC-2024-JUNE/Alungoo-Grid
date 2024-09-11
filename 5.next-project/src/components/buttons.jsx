export const ButtonContainer = (props) => {
  const { buttons } = props;
  return (
    <div className=" flex gap-5 w-[600px] flex-wrap">
      {buttons.map((button) => {
        return (
          <div className=" bg-gray-400 text-gray-50 px-4 py-1 rounded-2xl mt-7">
            {button}
          </div>
        );
      })}
    </div>
  );
};
