import React, { useState, useEffect } from "react";
import axios from "axios";

const Search = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="max-w-full">
      <input
        type="text"
        className="py-2 md:w-[410px]  hidden md:block  rounded-md px-5"
        placeholder="search.."
        onChange={(e) => setSearch(e.target.value)}
      />
   
    </div>
  );
};

export default Search;
