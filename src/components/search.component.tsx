"use client";

import { SearchIcon } from "lucide-react";
import { Input } from "./ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface SearchProps {
  children?: React.ReactNode;
  placeholder?: string;
  className?: string;
}

export function Search({ children, placeholder, className }: SearchProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");

    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }

    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <>
      {children}
      <div className="bg-white border text-secondary-foreground hover:bg-white/70 rounded-md shadow-md flex justify-center items-center gap-2 px-2 py-3">
        <label htmlFor="search-ressource">
          <SearchIcon />
        </label>

        <Input
          className={`${className}`}
          type="search"
          placeholder={placeholder}
          autoCapitalize="on"
          id="search-ressource"
          onChange={(e) => handleSearch(e.target.value)}
          defaultValue={searchParams.get("query")?.toString()}
        />
      </div>
    </>
  );
}
