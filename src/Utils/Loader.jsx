import React from 'react'
import Rhombus from "../assets/Rhombus.gif";




function Loader() {
  return (
    <div className='w-full h-screen flex items-center justify-center bg-slate-900'>
        <img className='w-[10%] mix-blend-darken' src={Rhombus} alt="" />
    </div>
  )
}

export default Loader