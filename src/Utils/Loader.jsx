import React from 'react'
import Rhombus from "../assets/Rhombus.gif";




function Loader() {
  return (
    <div className='max-w-screen h-screen flex items-center justify-center bg-slate-600'>
        <img className='w-[40%] md:w-[15%] mix-blend-darken' src={Rhombus} alt="" />
    </div>
  )
}

export default Loader