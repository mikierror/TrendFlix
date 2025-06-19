import React from 'react';
import { Link } from "react-router-dom";
import noimage from "/noimage.jpg";

function SearchingInput({ result }) {
  return (
    <div className="z-[1000] absolute top-[110%] left-1/2 -translate-x-1/2 w-[90%] max-w-[600px] max-h-[50vh] overflow-auto bg-slate-900 rounded-lg shadow-2xl border border-gray-700">
      {result.map((item) => (
        <Link
          key={item.id}
          to={`/${item.media_type}/details/${item.id}`}
          className="flex items-center gap-4 p-3 hover:bg-[#07E2F3] hover:text-black duration-300 border-b border-zinc-800"
        >
          <img
            className="w-16 h-10 object-cover bg-zinc-900 rounded shadow"
            src={
              item.profile_path || item.backdrop_path
                ? `https://image.tmdb.org/t/p/original${item.profile_path || item.backdrop_path}`
                : noimage
            }
            alt={item.title || item.name}
          />
          <h1 className="text-white text-left truncate">
            {item.name || item.original_name || item.title || item.original_title}
          </h1>
        </Link>
      ))}
    </div>
  );
}

export default SearchingInput;
