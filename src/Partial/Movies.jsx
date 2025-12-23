import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Topnav from '../Components/Topnav'
import Dropdown from '../Components/Dropdown'
import Axios from "../Utils/Axios"
import Loader from '../Utils/Loader'
import VerticalCard from '../Components/VerticalCard'

import InfiniteScroll from 'react-infinite-scroll-component'

function Popular() {
  const navigate=useNavigate()
  const [category, setcategory] = useState("now_playing")
   const [popular,setpopular]=useState([])
    const [page,setpage]=useState(1)
   //data fetched
  const getpopulardata= ()=>{
  Axios.get(`/movie/${category}?page=${page}`)
  .then((res)=> 
    setpopular((prev)=>[...prev, ...res.data.results])
  , setpage(page+1)
 
)
   .catch((err)=>console.log(err))
}
console.log(popular)


// new thing i learn i made the date to up it simple logic but need focus for that
const referdata=()=>{
  if(popular.length==0){
    getpopulardata()
       
  }
  else{
    setpopular([])
       setpage(1)
       getpopulardata()
  }
}

useEffect(()=>{
  referdata();
},[category])

  return popular && (
    <div className='bg-slate-950 min-h-screen max-w-screen '>
          <div className=' w-full h-fit px-[3%] flex flex-col items-center justify-center '>
        <Topnav />
        <div className='flex items-center justify-between h-fit w-full mt-3'>
        <Link className='hidden md:block text-2xl text-zinc-400 font-semibold hover:text-[#07E2F3]' onClick={() => navigate(-1)} >
            <i className='text-gray-400 hover:text-[#07E2F3] ri-arrow-left-line border-2 rounded-full p-1 mr-2 bg-slate-800'></i>
            Movies
          </Link>
         <div className="flex gap-3 w-full items-center justify-start md:justify-end"> <Dropdown options={["top_rated","popular","upcoming","now_playing"]} category={setcategory} title={"Popular-list"}/></div>
      </div>
      </div>
          <InfiniteScroll
          dataLength={popular.length}
          loader={<Loader/>}
          hasMore={true}
          next={getpopulardata}
          >
          <VerticalCard data={popular} title="movie"/>
          </InfiniteScroll>
        </div>
  )
}

export default Popular
