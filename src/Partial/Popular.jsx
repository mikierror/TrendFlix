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
  const [category, setcategory] = useState("movie")
   const [popular,setpopular]=useState([])
    const [page,setpage]=useState(1)
   //data fetched
  const getpopulardata= ()=>{
  Axios.get(`/${category}/popular?page=${page}`)
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

  return popular&&  (
    <div className='bg-slate-900 min-h-screen w-screen '>
          <div className=' w-full h-[10vh] p-[3%]   flex justify-between  '>
          <Link className='text-2xl text-zinc-400 font-semibold hover:text-[#07E2F3]' onClick={() => navigate(-1)} >
                    <i className='text-gray-400 hover:text-[#07E2F3] ri-arrow-left-line'></i>
                    Popular
                </Link>
                <Topnav/>
                <Dropdown options={["movie","tv","person"]} category={(e)=>setcategory(e.target.value)} title={"Popular-list"}/>
          </div>
          <InfiniteScroll
          dataLength={popular.length}
          loader={<Loader/>}
          hasMore={true}
          next={getpopulardata}
          >
          <VerticalCard data={popular} title={"movie"}/>
          </InfiniteScroll>
        </div>
  )
}

export default Popular
