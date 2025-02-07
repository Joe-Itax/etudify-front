import { MostPopularRessource } from "@/components/most-popular-ressource.component";
import { BtnSearchRedirectToSearchRessourcePageInput } from "@/components/search.component";
import { Button } from "@/components/ui/button";
import {
  Book,
  BookA,
  BookAIcon,
  BookAudio,
  BookAudioIcon,
  BookHeartIcon,
  BookImage,
  BookOpen,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <main className="">
      <section className="hero-sect w-full h-auto pb-8 mb-8 border-b sm:border-b-0 border-primary/20">
        <div className="h-screen absolute top-0 left-0 w-full -z-50">
          <Image
            src="/assets/bg-hero-section.jpg"
            alt="alt"
            width={2832}
            height={1640}
            className="w-full h-full"
          />
        </div>
        <div className="w-full flex flex-col justify-center items-center pb-2 px-8 sm:pt-52 min-[500px]:pt-40 pt-36">
          <h1 className="text-center">
            {/* The Creators library of <br /> components & templates */}
            Votre bibliothèque d&apos;études <br /> ultime et collaborative
          </h1>
          <div className="w-full flex justify-center py-4">
            <p className="text-center sm:w-[35rem]">
              {/* Etudify is the world&apos;s largest premium library of Webflow,
              Figma & Framer components and tools. Build better, faster with
              Etudify. */}
              Etudify est la plus grande plateforme éducative pour accéder à des
              ressources, poser des questions et apprendre ensemble. Etudiez
              mieux, plus vite avec Etudify.
            </p>
          </div>
        </div>

        <div className="w-full flex justify-center items-center px-4">
          <Suspense fallback={<div>Chargement...</div>}>
            <BtnSearchRedirectToSearchRessourcePageInput />
          </Suspense>
        </div>

        <div className="w-full flex justify-center items-center px-4 py-6">
          <div className="sm:w-96 min-[500px]:w-3/4 w-full flex flex-wrap justify-center items-center gap-3">
            {searchTxtExemple.map((txt, i) => (
              <>
                <SearchExemple txt={txt} key={`${i}-${txt}`} />
              </>
            ))}
          </div>
        </div>
      </section>

      <section className="most-popular-re w-full flex justify-center items-center pb-8 mb-8 border-b sm:border-b-0 border-primary/20s">
        <div className="w-5/6 flex flex-col justify-center items-center">
          <div className="w-full flex justify-between items-center">
            <h2>Ressources populaires</h2>

            <div>
              <Link href={"/ressources?type=popular"}>
                {" "}
                <Button variant={"secondary"}>Voir plus</Button>
              </Link>
            </div>
          </div>

          <div className="flex gap-0 flex-wrap w-full justify-between">
            <MostPopularRessource />
            <MostPopularRessource />
            <MostPopularRessource />
            <MostPopularRessource />
            <MostPopularRessource />
            <MostPopularRessource />
            <MostPopularRessource />
            <MostPopularRessource />
          </div>
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

        <div>
          {" "}
          <Book />
          <BookA />
          <BookAIcon />
          <BookAudio />
          <BookAudioIcon />
          <BookHeartIcon />
          <BookImage />
          <BookOpen />
        </div>
      </div>
    </main>
  );
}

interface SearchExempleProps {
  txt?: string;
}

function SearchExemple({ txt }: SearchExempleProps) {
  return (
    <div>
      <Button
        variant={"secondary"}
        size={"sm"}
        className="cursor-default py-0 px-2 border border-primary/20 rounded-lg shadow-md hover:bg-white/30"
      >
        {txt}
      </Button>
    </div>
  );
}

const searchTxtExemple = [
  "Sciences",
  "Langues",
  "Informatique",
  "Médecine",
  "Polytechnique",
  "Mathématques",
  "Guide de révision",
];
