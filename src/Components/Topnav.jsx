import React, { useEffect, useState } from "react";
import SearchingInput from "./SearchingInput";
import axios from "../Utils/Axios";

function Topnav() {
  const [query, setQuery] = useState("");
  const [searchData, setSearchData] = useState([]);
  const [isNavOpen, setIsNavOpen] = useState(false);


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
    <div className="w-full h-[7vh] relative bg-transparent ">
      <div className="absolute w-full bg-slate-800/50 rounded-3xl px-4 py-1  flex items-center justify-between lg:flex lg:items-center lg:justify-center gap-1 mt-3 ">
        <div className="flex items-center justify-start md:justify-start lg:justify-around h-full w-full gap-6 ">
          <h4 className="text-xs font-semibold text-gray-300 uppercase ">Tre<span className="text-cyan-300">ndF</span>lix</h4>
          <input
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            type="text"
            placeholder="Search anything..."
            className="w-[22vh] lg:w-full lg:max-w-[500px] p-1 rounded-lg bg-transparent text-white border border-gray-600 focus:outline-none focus:border-[#07E2F3] placeholder:text-gray-400 transition-all duration-300"
          /></div>
        {query !== "" && (
          <i
            onClick={() => setQuery("")}
            className="text-gray-400 ri-close-line text-2xl cursor-pointer hover:text-white"
          ></i>
        )}
        <button
          onClick={() => setIsNavOpen(true)}
          className="lg:hidden text-2xl text-gray-400 "
        >
          ☰
        </button>

      </div>

      {/* Search Results */}
      {query !== "" && searchData?.length > 0 && <SearchingInput result={searchData} />}
    </div>
  );
}

export default Topnav;
