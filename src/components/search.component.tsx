"use client";

import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

interface SearchProps {
  placeholder?: string;
  classNameInput?: string;
  classNameSearchBox?: string;
  typeInput?: string;
  readOnly?: boolean;
  onClick?: any;
}

export function Search({
  placeholder,
  classNameInput,
  classNameSearchBox,
  typeInput = "text",
  readOnly,
  onClick,
}: SearchProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  }, 1000);

  return (
    <>
      <div
        className={`${classNameSearchBox} bg-white border border-primary/20 text-secondary-foreground hover:bg-white/70 rounded-lg shadow-lg flex justify-center items-center gap-2 px-2 py-0 w-[28rem]`}
        onClick={onClick}
      >
        <label htmlFor="search-ressource" className="text-red cursor-pointer">
          <SearchIcon className="stroke-muted-foreground" />
        </label>

        <Input
          className={`${classNameInput} w-full border-0`}
          type={typeInput}
          placeholder={placeholder}
          autoCapitalize="on"
          id="search-ressource"
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={searchParams.get("query")?.toString()}
          readOnly={readOnly}
          autoFocus={searchParams.get("from") === "hs-home"}
        />
      </div>
    </>
  );
}

export function BtnSearchRedirectToSearchRessourcePageInput() {
  const router = useRouter();
  const searchResource = () => {
    router.push("/ressources?from=hs-home");
  };
  return (
    <>
      <Search
        placeholder="Rechercher une Ressource (ex. Math, Science, etc...)"
        readOnly
        classNameInput="cursor-pointer"
        classNameSearchBox="cursor-pointer"
        onClick={searchResource}
      />
    </>
  );
}
