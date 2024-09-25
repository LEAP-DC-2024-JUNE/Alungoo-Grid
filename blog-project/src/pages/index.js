import {
  Header,
  Footer,
  BlogCard,
  CarouselCard,
  TrendinCard,
} from "@/components";

export default function Home() {
  return (
    <div className=" bg-slate-800 text-white text-2xl text-center mt-5">
      Hello New Project
      <Header />
      <Footer />
      <BlogCard />
      <CarouselCard />
      <TrendinCard />
    </div>
  );
}
