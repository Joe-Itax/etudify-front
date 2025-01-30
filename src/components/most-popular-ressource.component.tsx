import { ListStart, Star } from "lucide-react";
import Image from "next/image";

interface MostPopularRessourceProps {
  children?: React.ReactNode;
}

export function MostPopularRessource({ children }: MostPopularRessourceProps) {
  return (
    <>
      <div className="w-1/4 p-2 flex flex-col items-start">
        {/* <h1>MostPopularRessource</h1> */}
        {children}
        <div className="h-80">
          <Image
            src={"/assets/bg-cards/1.jpg"}
            alt="Cover Image Resource"
            width={736}
            height={736}
            className="rounded-xl h-full"
          />
        </div>

        <div className="py-2">
          <div className="cat flex items-start">
            <p className="font-bold">Catégorie: </p>
            <p>Livre</p>
          </div>

          <div className="author flex items-start">
            <p className="font-bold">Auteur: </p>
            <p>John Doe</p>
          </div>

          <div className="cote flex items-start">
            <p className="font-bold">Côte: </p>
            <p>4.5</p>
            <Star size={20} />
          </div>
        </div>
      </div>
    </>
  );
}
