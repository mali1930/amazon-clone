import React, { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useGetProductsQuery } from "../features/products/productsSlice";

const Search = () => {
  const [search, setSearch] = useState("");
  const [isFocused, setFocused] = useState(false);
  const { data } = useGetProductsQuery();
  const navigate = useNavigate();
  const results = useMemo(() => {
    if (!data || !search) return [];
    return data.filter(
      (item) => item.title.includes(search) || item.description.includes(search)
    );
  }, [data, search]);
  return (
    <div className="max-w-full relative pb-px">
      <input
        type="text"
        className="py-2 md:w-[410px] hidden md:block outline-none rounded-md px-5"
        placeholder="search.."
        onBlur={() => setTimeout(() => setFocused(false), 250)}
        onFocus={() => setFocused(true)}
        onChange={(e) => setSearch(e.target.value)}
      />
      {isFocused && (
        <div
          className="flex flex-col absolute w-full h-72 border shadow-xl bg-white rounded-md overflow-auto
         top-full left-0"
        >
          {results.length === 0 ? (
            <div className="text-center"> No results. </div>
          ) : (
            results.map((item) => (
              <div
                onClick={() => navigate('/product/'+item.id)}
                className="flex gap-4 p-3 border cursor-pointer hover:bg-gray-200 transition-colors">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-12 aspect-square rounded-md"
                />
                <div className="flex-1 w-[85%]">
                  <h2 className="font-bold text-lg truncate">{item.title}</h2>
                  <p className="text-sm text-gray-400 truncate">{item.description}</p>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
