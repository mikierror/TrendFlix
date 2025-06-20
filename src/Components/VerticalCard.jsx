import React from 'react';
import { Link } from 'react-router-dom';

function VerticalCard({ data, title }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-8 px-6 py-8">
      {data.map((item, i) => {
        const imagePath = item.profile_path || item.backdrop_path || item.poster_path;
        const imageUrl = imagePath
          ? `https://image.tmdb.org/t/p/w500${imagePath}`
          : '/noimage.jpg';

        const name = item.name || item.title || item.original_name || item.original_title;
        const popularity = parseInt(item.popularity % 100);

        return (
          <Link
            to={`/${item.media_type || title}/details/${item.id}`}
            key={i}
            className="relative bg-gradient-to-br from-zinc-800 to-zinc-900 rounded-2xl overflow-hidden shadow-md hover:shadow-[0_15px_30px_rgba(7,226,243,0.2)] transform hover:scale-[1.03] transition-all duration-300"
          >
            {/* Image Section */}
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-[300px] object-cover rounded-t-2xl"
            />

            {/* Content */}
            <div className="p-4">
              <h2 className="text-white font-semibold text-lg leading-tight line-clamp-2">
                {name}
              </h2>
              <p className="text-zinc-400 text-sm mt-1 line-clamp-2">
                {item.overview || 'No description available'}
              </p>
            </div>

            {/* Popularity Badge */}
            <div className="absolute top-3 right-3 bg-[#07E2F3] text-black font-semibold text-xs px-3 py-1 rounded-full shadow-lg animate-pulse">
              {popularity}% HOT
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-30 transition-opacity duration-300 rounded-2xl" />
          </Link>
        );
      })}
    </div>
  );
}

export default VerticalCard;
