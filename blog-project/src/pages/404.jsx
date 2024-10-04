import { Footer, Header } from "@/components";
import Link from "next/link";
const Custom404 = () => {
  return (
    <>
      <Header />
      <div className=" flex gap-10  flex-row justify-center py-40">
        <div className=" font-bold text-8xl">404</div>
        <div className=" border-r-8"></div>
        <div className=" flex flex-col gap-10 w-[398px]">
          <p className=" font-bold font-serif text-3xl">Page Not Found</p>
          <p>
            We're sorry, This page is unknown or does not exist the page you are
            looking for.
          </p>
          <button className=" bg-[#4B6BFB] px-[16px] py-[10px] text-white font-sans rounded-md">
            <Link href="/">Back To Home</Link>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Custom404;
