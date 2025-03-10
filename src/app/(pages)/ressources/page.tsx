import { Search } from "@/components/search.component";
import { Suspense } from "react";

interface Props {
  params: {
    id: string;
  };
}

export default function Page({ params }: Props) {
  const { id } = params;

  return (
    <>
      <h1>Page {id}</h1>
      <p>Page content</p>
      <Suspense fallback={<div>Chargement...</div>}>
        <Search placeholder="Rechercher une Ressource (ex. Math, Science, etc...)" />
      </Suspense>
    </>
  );
}
