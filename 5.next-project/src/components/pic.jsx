import Image from "next/image";
const Nature = () => {
  return (
    <div className="flex gap-5">
      <Image
        src="https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg"
        width={200}
        height={200}
      />
      <Image
        src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        width={200}
        height={200}
      />
      <Image
        src="https://images.pexels.com/photos/534164/pexels-photo-534164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        width={200}
        height={200}
      />
    </div>
  );
};
export default Nature;
