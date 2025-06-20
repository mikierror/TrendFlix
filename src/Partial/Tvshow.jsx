import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Topnav from '../Components/Topnav'
import Dropdown from './Dropdown'
import Axios from "../Utils/Axios"
import Loader from '../Utils/Loader'
import VerticalCard from './VerticalCard'

import InfiniteScroll from 'react-infinite-scroll-component'

function Tvshow() {
  const navigate = useNavigate()
  const [category, setcategory] = useState("airing_today")
  const [tv, settv] = useState([])
  const [page, setpage] = useState(1)
  //data fetched
  const getpopulardata = () => {
    Axios.get(`/tv/${category}?page=${page}`)
      .then((res) =>
        settv((prev) => [...prev, ...res.data.results])
        , setpage(page + 1)

      )
      .catch((err) => console.log(err))
  }
  console.log(tv)


  // new thing i learn i made the date to up it simple logic but need focus for that
  const referdata = () => {
    if (tv.length == 0) {
      getpopulardata()

    }
    else {
      settv([])
      setpage(1)
      getpopulardata()
    }
  }

  useEffect(() => {
    referdata();
  }, [category])

  return tv && (
    <div className='bg-slate-900 min-h-screen w-screen '>
      <div className=' w-full h-[10vh] p-[3%]   flex justify-between  '>
        <Link className='text-2xl text-zinc-400 font-semibold hover:text-[#07E2F3]' onClick={() => navigate(-1)} >
          <i className='text-gray-400 hover:text-[#07E2F3] ri-arrow-left-line'></i>
          TvShows
        </Link>
        <Topnav />
        <Dropdown options={["airing_today", "on_the_air", "popular", "top_rated"]} category={setcategory} title={"Category"} />
      </div>
      <InfiniteScroll
        dataLength={tv.length}
        loader={<Loader />}
        hasMore={true}
        next={getpopulardata}
      >
        <VerticalCard data={tv} title="tv" />
      </InfiniteScroll>
    </div>
  )
}

export default Tvshow
