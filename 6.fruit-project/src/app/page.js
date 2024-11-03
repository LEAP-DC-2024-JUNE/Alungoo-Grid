import Link from "next/link";
const Home = () => {
  return (
    <div>
      <div className=" mt-40">Welcome </div>
      <Link href="/goods">please click here to shop</Link>
    </div>
  );
};
export default Home;
