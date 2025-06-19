import React, { useEffect, useState } from "react";
import SearchingInput from "./SearchingInput";
import axios from "../Utils/Axios";

function Topnav() {
  const [query, setQuery] = useState("");
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    if (query.trim() !== "") {
      axios
        .get(`/search/multi?query=${query}`)
        .then((res) => setSearchData(res.data.results))
        .catch((err) => console.log(err));
    } else {
      setSearchData([]);
    }
  }, [query]);

  return (
    <div className="w-full h-[7vh] relative bg-transparent px-4">
      <div className="absolute w-full flex items-center justify-center gap-3 mt-3 px-4 md:px-0">
        <i className="text-gray-400 ri-search-line text-2xl"></i>
        <input
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          type="text"
          placeholder="Search anything..."
          className="w-full max-w-[500px] p-2 rounded-lg bg-transparent text-white border border-gray-700 focus:outline-none focus:border-[#07E2F3] placeholder:text-gray-400 transition-all duration-300"
        />
        {query !== "" && (
          <i
            onClick={() => setQuery("")}
            className="text-gray-400 ri-close-line text-2xl cursor-pointer hover:text-white"
          ></i>
        )}
      </div>

      {/* Search Results */}
      {query !== "" && searchData?.length > 0 && <SearchingInput result={searchData} />}
    </div>
  );
}

export default Topnav;
