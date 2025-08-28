import Link from "next/link";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row justify-between items-center mb-8">
      <h1 className="text-3xl md:text-4xl font-bold text-slate-900">
        Welcome to the Blog 🚀
      </h1>
      <Link href="/posts/create">
        <Button className="mt-4 md:mt-0">+ New Post</Button>
      </Link>
    </section>
  );
};

export default Hero;
