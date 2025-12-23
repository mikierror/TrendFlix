import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Topnav from '../Components/Topnav'
import Dropdown from '../Components/Dropdown'
import Axios from "../Utils/Axios"
import Loader from '../Utils/Loader'
import VerticalCard from '../Components/VerticalCard'

import InfiniteScroll from 'react-infinite-scroll-component'

function People() {
  const navigate = useNavigate()
  const [category, setcategory] = useState("popular")
  const [person, setperson] = useState([])

  const [page, setpage] = useState(1)
  //data fetched
  const getPerson = () => {
    Axios.get(`/person/popular?page=${page}`)
      .then((res) =>
        setperson((prev) => [...prev, ...res.data.results])
        , setpage(page + 1)

      )
      .catch((err) => console.log(err))
  }


  // new thing i learn i made the date to up it simple logic but need focus for that
  const referdata = () => {
    if (person.length == 0) {
      getPerson()

    }
    else {
      setperson([])
      setpage(1)
      getPerson()
    }
  }

  useEffect(() => {
    referdata();
  }, [category])

  return person && (
    <div className='bg-slate-950 min-h-screen max-w-screen '>
      <div className=' w-full h-fit px-[3%] flex flex-col items-center justify-center '>
        <Topnav />
        <div className='flex items-center justify-between h-fit w-full mt-3'>
          <Link className='hidden md:block text-2xl text-zinc-400 font-semibold hover:text-[#07E2F3]' onClick={() => navigate(-1)} >
            <i className='text-gray-400 hover:text-[#07E2F3] ri-arrow-left-line border-2 rounded-full p-1 mr-2 bg-slate-800'></i>
            People
          </Link>

        </div>
      </div>
      <InfiniteScroll
        dataLength={person.length}
        loader={<Loader />}
        hasMore={true}
        next={getPerson}
      >
        <VerticalCard data={person} title="person" />
      </InfiniteScroll>
    </div>
  )
}

export default People
