import Link from "next/link";
import { Button } from "../ui/button";
import Container from "../Container";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative bg-white">
      <Container className="py-10 sm:py-12 md:py-14 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight">
            Discover stories, insights & <br />
            <span className="text-indigo-600">ideas worth sharing</span>
          </h1>
          <p className="mt-6 text-lg text-slate-600 max-w-lg">
            A modern blog platform where developers and creators share
            knowledge, tutorials, and inspiration. Stay updated with the latest
            posts.
          </p>
          <div className="mt-8 flex gap-4">
            <Button
              size="lg"
              className="bg-indigo-600 hover:bg-indigo-700 text-white cursor-pointer"
            >
              Start Reading
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-slate-300 text-slate-700 hover:bg-slate-100 cursor-pointer"
            >
              <Link href="/posts/create">Create a Post</Link>
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1200"
              alt="Blog illustration"
              className="w-full h-full object-cover"
              width={600}
              height={450}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
