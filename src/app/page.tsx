import { Search } from "@/components/search.component";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
// import bgHeroSection from "/public/assets/bg-hero-section.jpg";

export default function Home() {
  return (
    <main className="">
      <section className="hero-sect w-full h-screen">
        <div className="h-screen absolute top-0 left-0 w-full -z-50">
          <Image
            src="/assets/bg-hero-section.jpg"
            alt="alt"
            width={2832}
            height={1640}
            className="w-full h-full"
          />
        </div>
        <div className="w-full flex flex-col justify-center items-center py-20 px-8 sm:pt-52 min-[500px]:pt-40 pt-36">
          <h1 className="text-center">
            The Creators library of <br /> components & templates
          </h1>
          <div className="w-full flex justify-center py-4">
            <p className="text-center sm:w-[35rem]">
              Etudify is the world&apos;s largest premium library of Webflow,
              Figma & Framer components and tools. Build better, faster with
              Etudify .
            </p>
          </div>
        </div>

        <div className="w-full flex justify-center items-center">
          <Search placeholder="Search Components (eg. Footer, Header)" />
        </div>
      </section>
      <div className="flex flex-wrap gap-8">
        <div className="w-40 h-40 bg-[#1a0749]"></div>
        <div className="w-40 h-40 bg-primary"></div>
        <div className="w-40 h-40 bg-[#230c5a]"></div>
        <div className="w-40 h-40 bg-primary2"></div>
        <div className="w-40 h-40 bg-[#ebe5ff]"></div>
        <div className="w-40 h-40 bg-secondary">
          <p className="text-secondary-foreground">Hello</p>
        </div>
      </div>
      {/* hsl() */}
    </main>
  );
}
