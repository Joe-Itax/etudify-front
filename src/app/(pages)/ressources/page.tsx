import { SearchWrapper } from "@/components/search-wrapper.component";
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
        <SearchWrapper />
      </Suspense>
    </>
  );
}
