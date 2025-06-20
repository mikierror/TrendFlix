import React from 'react';
import { Link } from 'react-router-dom';
import Dropdown from './Dropdown';
import HorizantolCard from './HorizantolCard';

function Horizontal({ trending, category }) {
  return Array.isArray(trending) && trending.length !== 0 ? (
    <div className="w-full h-[40vh] flex flex-col px-4">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl md:text-3xl text-gray-300 font-semibold pt-2">Trending</h1>
        <Dropdown category={category} title="Filter" options={['tv', 'movie', 'all']} />
      </div>
      <HorizantolCard trending={trending} />
    </div>
  ) : (
    <div className="w-full text-center text-white py-8">Loading...</div>
  );
}

export default Horizontal;
