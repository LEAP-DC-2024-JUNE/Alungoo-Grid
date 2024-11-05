import Link from "next/link";
const Home = () => {
  return (
    <div>
      <div className=" mt-40">Welcome </div>
      <Link href="/goods" className=" border -[2px] bg-gray-100">
        Shop now
      </Link>
    </div>
  );
};
export default Home;
