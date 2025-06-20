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
   const[category,setcategory]=useState("all")
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

useEffect(()=>{
  Getdata();
},[])

  useEffect(() => {
    Getdata2();
  }, [category])



  return wallpaper!=null && trending!=null ? (
    <div className=' w-screen min-h-screen flex bg-gray-900 px-5' id='hello'>
     
      <SideNav />
      <div className=' w-[80%] h-full '>
        <Topnav />
        <Header wallpaper={wallpaper}/>
        <Horizantoal trending={trending} category={setcategory}/>
      </div>
      <Outlet/>
    </div>
  ):(<Loader/>)
}

export default Home

