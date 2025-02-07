"use client";

import {
  BtnSearchRedirectToSearchRessourcePageInput,
  Search,
} from "@/components/search.component";
import { Suspense } from "react";

export function SearchWrapper() {
  return (
    <Search placeholder="Rechercher une Ressource (ex. Math, Science, etc...)" />
  );
}

export function WrapperBtnSearchRedirectToSearchRessourcePageInput() {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <BtnSearchRedirectToSearchRessourcePageInput />
    </Suspense>
  );
}
