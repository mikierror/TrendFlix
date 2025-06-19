import React from "react";
import { Link } from "react-router-dom";

function HorizantolCard({ trending }) {
  const baseImg = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="w-full pb-8 px-5 flex gap-6 overflow-x-auto no-scrollbar">
      {trending.map((item) => {
        const imagePath =
          item.poster_path || item.backdrop_path || item.profile_path;
        const fullImage = imagePath
          ? `${baseImg}${imagePath}?v=${item.id}`
          : "https://via.placeholder.com/300x450?text=No+Image";

        return (
          <Link
            to={`/${item.media_type}/details/${item.id}`}
            key={item.id}
            className="group relative h-[35vh] w-[24vh] min-w-[170px] rounded-xl overflow-hidden bg-[#1e1e1e] shadow-md hover:scale-[1.05] duration-300 ease-in-out cursor-pointer"
          >
            {/* Card Image */}
            <img
              src={fullImage}
              alt={item.title || item.original_name || item.original_title}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://via.placeholder.com/300x450?text=No+Image";
              }}
              className="h-full w-full object-cover"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-black/90 transition-all"></div>

            {/* Text Content */}
            <div className="absolute bottom-0 w-full p-3 z-10">
              <h2 className="text-white font-semibold text-sm truncate">
                {item.title || item.original_name || item.original_title}
              </h2>
              <p className="text-gray-300 text-xs mt-1 line-clamp-2">
                {item.overview || "No description available."}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default HorizantolCard;
