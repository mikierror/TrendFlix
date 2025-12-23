import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Topnav from '../Components/Topnav';
import Dropdown from '../Components/Dropdown';
import axios from "../Utils/Axios";
import VerticalCard from '../Components/VerticalCard';
import Loader from '../Utils/Loader';
import InfiniteScroll from "react-infinite-scroll-component";

function Trending() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const GetData = async () => {
    try {
      const { data } = await axios.get(
        `/trending/${selectedCategory}/${duration}?page=${page}`
      );
      if (data.results.length > 0) {
        setTrending((prev) => [...prev, ...data.results]);
        setPage((prev) => prev + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const refreshHandler = () => {
    setPage(1);
    setTrending([]);
    setHasMore(true);
    GetData();
  };

  useEffect(() => {
    refreshHandler();
  }, [selectedCategory, duration]);

  const navigate = useNavigate();

  return trending && (
    <div className='max-w-screen min-h-screen bg-slate-950 p-5 '>
      {/* topnav */}
    <div className=' w-full h-fit md:px-[3%] flex flex-col items-center justify-center '>
        <Topnav />
        <div className='flex items-center justify-center h-fit w-full mt-3'>  
        <Link className='hidden md:block text-2xl text-zinc-400 font-semibold hover:text-[#07E2F3]' onClick={() => navigate(-1)} >
            <i className='text-gray-400 hover:text-[#07E2F3] ri-arrow-left-line border-2 rounded-full p-1 mr-2 bg-slate-800'></i>
            trending
          </Link>
         <div className="flex gap-3 w-full items-center justify-start md:justify-end"> <Dropdown title="Category" options={["all", "tv", "movie"]} category={ setSelectedCategory} /> <Dropdown title="Duration" options={["day", "week"]} category={() => setDuration} /> </div>
      </div>
      </div>

      {/* cards with infinite scroll */}
      <InfiniteScroll
        dataLength={trending.length}
        next={GetData}
        hasMore={hasMore}
        loader={<Loader />}
      >
        <VerticalCard data={trending} title={selectedCategory} />
      </InfiniteScroll>
    </div>
  );
}

export default Trending;
