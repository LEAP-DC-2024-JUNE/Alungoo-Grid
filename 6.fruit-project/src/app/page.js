import Link from "next/link";
const Home = () => {
  return (
    <div className=" flex flex-col items-center ">
      <div className=" mt-28">
        <img
          src="https://images.pexels.com/photos/1132047/pexels-photo-1132047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          width={800}
          height={450}
        />
      </div>
      <div className=" py-10 ">
        <Link href="/goods" className=" border -[2px] bg-gray-100 px-5 py-2">
          Shop Now
        </Link>
      </div>
      <div className=" py-10 ">
        <Link
          href="/goods/new-item"
          className=" border -[2px] bg-gray-100 px-5 py-2"
        >
          Add New Products
        </Link>
      </div>
    </div>
  );
};
export default Home;
