export const CarouselCard = ({ img, tags, title, publishDate }) => {
  return (
    <div className=" w-full">
      <div className=" w-[1220px] flex flex-col items-center">
        <div className=" h-[300px] py-10 bg-pink-300 px-40 relative ">
          <img src={img} />
        </div>
        <div className=" bg-gray-100 w-[600px] h-[250px] absolute left-2 bottom-4 flex flex-col justify-center">
          <div className=" flex flex-col items-start pl-10 gap-3">
            <span>{tags}</span>
            <span>{title}</span>
            <span>{publishDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
