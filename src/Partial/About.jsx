import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function About() {
  const navigate= useNavigate(-1)
  return (
    <div className="min-h-screen bg-slate-950 text-white px-6 py-12">
       <Link
          className='text-2xl  text-zinc-400 font-semibold hover:text-[#07E2F3] flex items-center  '
          onClick={() => navigate(-1)}
        >
          <i className='text-gray-400 text-2xl hover:text-[#07E2F3] ri-arrow-left-line border-2 rounded-full px-1 mr-2 ml-4 bg-slate-800'></i> Back
        </Link>
      <div className="max-w-4xl mt-13 mx-auto space-y-6">
        <h1 className="text-4xl font-bold text-[#07E2F3]">🎬 About Movie Hub</h1>

        <p className="text-lg text-gray-300 leading-relaxed">
          <strong>Movie Hub</strong> is a modern, feature-rich web application designed to explore, discover, and enjoy the world of movies, TV shows, and celebrities. Built using <span className="text-[#07E2F3] font-semibold">React.js</span>, <span className="text-[#07E2F3] font-semibold">Redux Toolkit</span>, and <span className="text-[#07E2F3] font-semibold">Tailwind CSS</span>, this platform connects with the <span className="font-medium">TMDB (The Movie Database)</span> API to serve you real-time content from across the world.
        </p>

        <h2 className="text-2xl font-semibold text-white">📌 Key Features</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Browse trending <span className="text-[#07E2F3]">movies</span>, <span className="text-[#07E2F3]">TV shows</span>, and <span className="text-[#07E2F3]">people</span></li>
          <li>Watch YouTube trailers directly inside the app</li>
          <li>View detailed movie/TV info with genres, ratings, platforms, and tags</li>
          <li>See recommendations and similar content</li>
          <li>Search anything across movies, shows, or celebrities</li>
          <li>Modern and clean UI with hover effects and smooth transitions</li>
          <li>Infinite scrolling for seamless content loading</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white">📱 Coming Soon</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Responsive design for tablets and mobile</li>
          <li>Dark/light theme toggle</li>
          <li>User authentication and personal watchlist</li>
        </ul>

        <h2 className="text-2xl font-semibold text-white">👨‍💻 Developer Note</h2>
        <p className="text-gray-300">
          This app was initially built as a passion project and learning experience. It has grown into a robust entertainment dashboard. I’m currently improving it for full responsiveness and production deployment. Feel free to share your thoughts or contribute!
        </p>

        <p className="text-sm text-gray-500">— Created by Suryansh Kaintura, using ❤️ & React</p>
      </div>
    </div>
  )
}

export default About;
