import Pic2 from "../../public/Pic2.png";
import Image from "next/image";
export default function About() {
  return (
    <div className="xl:bg-gray-50 min-w-full text-center  bg-gray-50 dark:bg-gray-900 p-5 xl:py-25 xl:p-20">
      <button className=" xl:text-sm px-4 py-2 bg-gradient-to-r from-slate-200 to-slate-500 rounded-2xl mt-10 xl:mx-96 text-gray-800 xl:font-medium">
        About me
      </button>
      <div className="flex xl:flex-row  flex-col gap-5 xl:justify-between xl:-[500px] mt-10 xl:ml-30">
        <Image src={Pic2} />
        <div className=" flex flex-col gap-4 text-start xl:w-[700px]">
          <p className=" font-bold text-2xl">
            Curious about me? Here you have it:
          </p>
          <div className="flex flex-col gap-4">
            <p className=" text-gray-600 dark:text-gray-300">
              I'm a designer turned full stack developer, passionate about
              React.js and Node.js. I excel in blending technical and visual
              aspects to craft exceptional digital products, prioritizing user
              experience, precise design, and optimized code.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Since starting my web development journey in 2015, I've embraced
              challenges and kept up with the latest tech trends. Now in my
              early thirties, seven years in, I'm building cutting-edge web apps
              using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and
              more.
            </p>
            <p className=" text-gray-600 dark:text-gray-300 ">
              With a progressive mindset, I enjoy the entire product development
              process, from ideation to execution. Off duty, you'll find me on
              Twitter, tracking startup journeys, or unwinding. Follow me for
              tech insights and public project updates on Twitter or GitHub.
            </p>
            <p className="text-gray-600  dark:text-gray-300">
              Finally, some quick bits about me.
            </p>
            <ul className=" my-5 list-disc mx-10 text-gray-600 dark:text-gray-300">
              <li>B.E. in Computer Engineering</li>
              <li>Full time freelancer</li>
              <li>Avid learner</li>
            </ul>
            <p className="text-gray-600 dark:text-gray-300 text-base">
              One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! I promise I don't bite 😉
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
