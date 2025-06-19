import React from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { path: "/trending", icon: "ri-fire-line", label: "Trending" },
  { path: "/popular", icon: "ri-bard-line", label: "Popular" },
  { path: "/movie", icon: "ri-movie-ai-line", label: "Movies" },
  { path: "/tv", icon: "ri-tv-fill", label: "Tv Shows" },
  { path: "/person", icon: "ri-team-line", label: "People" },
];

const infoLinks = [
  { path: "/about", icon: "ri-information-line", label: "About" },
  { path: "/contact", icon: "ri-team-line", label: "Contact" },
];

const SideNav = () => {
  return (
    <div className="w-[20%] h-full pt-5 pl-7 border-gray-400 text-white">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <i className="text-[#07E2F3] ri-tv-line text-2xl"></i>
        <h2 className="text-white font-bold text-2xl">TrendFlix</h2>
      </div>

      {/* Navigation */}
      <h2 className="mt-8 text-xl font-semibold">New Feeds</h2>
      <div className="flex flex-col text-gray-500 text-xl font-semibold mt-5 pl-2 gap-5">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            to={link.path}
            className="w-3/4 hover:bg-[#07E2F3] hover:text-white duration-300 rounded-lg p-5"
          >
            <i className={`${link.icon} pr-1`}></i>
            {link.label}
          </Link>
        ))}
      </div>

      {/* Separator */}
      <hr className="bg-gray-600 h-[2px] w-5/6 mt-6 border-none" />

      {/* About & Contact */}
      <h2 className="mt-8 text-xl font-semibold">More</h2>
      <div className="flex flex-col text-gray-500 text-xl font-semibold mt-7 pl-2 gap-5">
        {infoLinks.map((link) => (
          <Link
            key={link.label}
            to={link.path}
            className="w-3/4 hover:bg-[#07E2F3] hover:text-white duration-300 rounded-lg p-5"
          >
            <i className={`${link.icon} pr-1`}></i>
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
