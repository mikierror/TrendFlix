import { Link } from "react-router-dom";

const Header = ({ wallpaper }) => {
  const title =
    wallpaper.name ||
    wallpaper.original_name ||
    wallpaper.original_title ||
    "Untitled";

  const overview = wallpaper.overview
    ? wallpaper.overview.slice(0, 200)
    : "No overview available.";

  const imageURL =
    wallpaper.profile_path || wallpaper.backdrop_path
      ? `https://image.tmdb.org/t/p/original${
          wallpaper.profile_path || wallpaper.backdrop_path
        }`
      : "";

  return (
    <div
      className="relative w-full h-[52vh] w rounded-xl shadow-lg flex flex-col justify-end p-[6%] bg-cover bg-center overflow-hidden z-10"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.85)), url(${imageURL})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h1 className="text-white text-4xl md:text-5xl font-extrabold drop-shadow-lg mb-2">
        {title}
      </h1>

      <p className="w-full md:w-[60%] text-gray-300 text-sm md:text-base leading-relaxed mb-3">
        {overview}
        <Link className="text-[#07E2F3] font-semibold ml-1">...more</Link>
      </p>

      <div className="flex items-center text-white text-sm gap-4 mb-5">
        <span className="flex items-center gap-1">
          <i className="ri-megaphone-fill text-yellow-400"></i>
          {wallpaper.release_date || "No Info"}
        </span>
        <span className="flex items-center gap-1">
          <i className="ri-album-fill text-yellow-400"></i>
          {wallpaper.media_type || "No Info"}
        </span>
      </div>

      <Link
        className="w-fit bg-[#07E2F3] hover:bg-[#06c5d6] text-white px-5 py-2 rounded-lg font-medium transition duration-300"
        to={`/${wallpaper.media_type}/${wallpaper.id}/Trailer`}
      >
        Watch Trailer
      </Link>
    </div>
  );
};

export default Header;
