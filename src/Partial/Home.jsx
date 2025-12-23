import React, { useEffect, useState } from 'react'
import SideNav from '../Components/SideNav'
import Topnav from '../Components/Topnav'
import axios from '../Utils/Axios'
import Header from '../Partial/Header'
import Horizantoal from '../Components/Horizantoal'
import Loader from '../Utils/Loader'
import { Outlet } from 'react-router-dom'
function Home() {

  const [wallpaper, setwallpaper] = useState(null)
  const [trending, settrending] = useState(null)
  const [category, setcategory] = useState("all")
  const Getdata = () => {
    axios.get("/trending/all/day")
      .then((res) => setwallpaper(res.data.results[Math.floor(Math.random() * res.data.results.length)]))
      .catch((err) => console.log(err))
  }

  const Getdata2 = () => {
    axios.get(`/trending/${category}/day`)
      .then((res) => settrending(res.data.results))
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    Getdata();
  }, [])

  useEffect(() => {
    Getdata2();
  }, [category])



  return wallpaper != null && trending != null ? (
    <div className='max-w-screen  min-h-screen lg:max-w-screen lg:min-h-screen flex items-center justify-center lg:flex bg-slate-950 px-5' id='hello'>
      {/* Logo Section */}
    <div className='flex flex-col h-full w-full justify-center items-start mb-[6vh]'>
        <div className="hidden md:flex items-center gap-2 ml-7">
        <i className="text-[#07E2F3] ri-tv-line text-2xl"></i>
        <h2 className="text-white font-bold text-2xl">TrendFlix</h2>
      </div>
      <SideNav />
    </div>
      <div className='w-screen lg:w-[80%] h-full px-2'>
        
        <Topnav />
        <Header wallpaper={wallpaper} />
        <Horizantoal trending={trending} category={setcategory} />
      </div>
      <Outlet />
    </div>
  ) : (<Loader />)
}

export default Home

