import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Topnav from '../Components/Topnav';
import Dropdown from './Dropdown';
import axios from "../Utils/Axios";
import VerticalCard from './VerticalCard';
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
    <div className='w-screen min-h-screen bg-slate-900 p-5'>
      {/* topnav */}
      <div className='w-full h-[10vh] flex justify-between items-center p-6'>
        <Link
          className='text-2xl text-zinc-400 font-semibold hover:text-[#07E2F3] flex '
          onClick={() => navigate(-1)}
        >
          <i className='ri-arrow-left-line'></i> Back
        </Link>
        <Topnav />
        <div className="flex gap-3">
          <Dropdown
            title="Category"
            options={["all", "tv", "movie"]}
            category={(e) => setSelectedCategory(e.target.value)}
          />
          <Dropdown
            title="Duration"
            options={["day", "week"]}
            category={(e) => setDuration(e.target.value)}
          />
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
