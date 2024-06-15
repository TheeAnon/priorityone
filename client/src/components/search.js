import { useState } from "react";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  const [query, setQuery] = useState("");
  return (
    <div className="flex p-2 items-center justify-center relative">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search shows, podcasts and favorite hosts"
        className="w-full rounded p-2 border text-lg placeholder:text-lg"
      />
      <div className="absolute right-4 bg-gray-200 p-2 rounded hover:bg-black hover:text-white cursor-pointer">
        <IoSearch size={20} />
      </div>
    </div>
  );
};

export default Search;
