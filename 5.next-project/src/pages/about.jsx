import Pic2 from "../../public/Pic2.png";
import Image from "next/image";
export default function About() {
  return (
    <>
      <div className="xl:bg-gray-50  w-3/4 m-auto text-center sm: bg-gray-50 sm: w-auto">
        <button className=" xl:text-sm px-4 py-2 bg-gradient-to-r from-slate-200 to-slate-500 rounded-2xl mt-10 xl:mx-96 text-gray-800 xl:font-medium">
          About me
        </button>
        <div className="xl:flex xl:flex-row sm: flex sm: flex-col gap-40 mt-10 mx-20 pb-10">
          <Image src={Pic2} />
          <div className=" text-start">
            <p className=" font-extrabold text-3xl">
              Curious about me? Here you have it:
            </p>
            <p className=" my-5 text-gray-600">
              I'm a designer turned full stack developer, passionate about
              React.js and Node.js. I excel in blending technical and visual
              aspects to craft exceptional digital products, prioritizing user
              experience, precise design, and optimized code.
            </p>
            <p className="text-gray-600">
              Since starting my web development journey in 2015, I've embraced
              challenges and kept up with the latest tech trends. Now in my
              early thirties, seven years in, I'm building cutting-edge web apps
              using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and
              more.
            </p>
            <p className=" my-5 text-gray-600">
              With a progressive mindset, I enjoy the entire product development
              process, from ideation to execution. Off duty, you'll find me on
              Twitter, tracking startup journeys, or unwinding. Follow me for
              tech insights and public project updates on Twitter or GitHub.
            </p>
            <p className="text-gray-600">Finally, some quick bits about me.</p>
            <ul className=" my-5 list-disc mx-10 text-gray-600">
              <li>B.E. in Computer Engineering</li>
              <li>Full time freelancer</li>
              <li>Avid learner</li>
            </ul>
            <p className="text-gray-600">
              One last thing, I'm available for freelance work, so feel free to
              reach out and say hello! I promise I don't bite 😉
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
