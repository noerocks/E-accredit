"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Input } from "../ui/input";
import { Search as SearchIcon } from "lucide-react";

const Search = () => {
  const searchParams = useSearchParams();
  console.log(searchParams.get("query"));
  const pathName = usePathname();
  const { replace } = useRouter();

  const handleChange = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${[pathName]}?${params.toString()}`);
  };

  return (
    <div className="relative">
      <Input
        className="pl-8"
        onChange={(e) => handleChange(e.target.value)}
        defaultValue={searchParams.get("query")?.toString()}
      />
      <SearchIcon className="absolute top-1/2 -translate-y-1/2 left-2 w-5 text-muted-foreground" />
    </div>
  );
};

export default Search;
