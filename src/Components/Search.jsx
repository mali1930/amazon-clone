import React from "react";

const Search = () => {
  return (
    <div className="max-w-full">
      <input
        type="text"
        className="py-2 md:w-[410px]  hidden md:block  rounded-md px-5"
        placeholder="search.."
      />
    </div>
  );
};

export default Search;
