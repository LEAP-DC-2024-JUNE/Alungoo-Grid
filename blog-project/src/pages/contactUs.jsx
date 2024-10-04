import { Footer } from "@/components";
import { Header } from "@/components";

const ContactUs = () => {
  return (
    <div>
      <Header />
      <div className=" flex flex-col items-center gap-10  h-[895px]">
        <div className=" w-[624px] h-[163px]">
          <p className=" font-bold text-2xl py-5">Contact Us</p>
          <p className=" text-[#696A75]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Libero
            architecto eius magni ducimus qui et eum, id ratione, beatae tempora
            corrupti laudantium sint veritatis dolore aspernatur, dignissimos
            fugiat placeat cum.
          </p>
        </div>
        <div className=" flex gap-10">
          <span className=" border-2 w-[294px] h-[133px] p-[16px] rounded-md">
            <p className=" font-bold text-xl py-2">Address</p>
            <p className=" text-[#696A75]">
              1328 Oak Ridge Drive, Saint Louis, Missouri
            </p>
          </span>
          <span className=" border-2 w-[294px] h-[133px] p-[16px] rounded-md">
            <p className=" font-bold text-xl py-2">Contact</p>
            <p className=" text-[#696A75]">313-332-8662</p>
            <p className=" text-[#696A75]"> info@email.com</p>
          </span>
        </div>
        <div className=" bg-[#F6F6F7] w-[643px] h-[440px] rounded-md ">
          <div className=" pl-[38px] flex flex-col items-start gap-6 pt-5">
            <p className=" font-bold text-lg"> Leave a Message</p>
            <div className=" flex flex-col items-start gap-5">
              <div className=" flex gap-10">
                <input
                  type="text"
                  placeholder="Your name"
                  className=" br-2  p-2 shadow-sm rounded"
                />{" "}
                <input
                  type="email"
                  placeholder="Your email"
                  className=" br-2  p-2 shadow-sm rounded"
                />{" "}
              </div>
              <input
                type="text"
                placeholder="Subject"
                className=" br-2  p-2 shadow-sm rounded"
              />{" "}
              <input
                type="text"
                placeholder="Write a message"
                className=" br-2 w-[478px] h-[134px] bg-white shadow-sm rounded p-1"
              />{" "}
              <button className=" bg-[#4B6BFB] px-[16px] py-[10px] text-white font-sans rounded-md">
                {" "}
                Send a message
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ContactUs;
