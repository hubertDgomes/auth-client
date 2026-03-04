import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div className="absolute top-1/2 left-1/2 -translate-[50%] text-center font-DM">
        <h1 className='text-[40px] font-semibold'>Hi There</h1>
        <p className='text-[20px]'>I am just trying to make an Authentication system.</p>
        <p className='text-[30px] font-extrabold'>Here is the options</p>
        <div className="flex items-center justify-center gap-x-[20px] mt-[20px]">
            <Link to={"/login"}><button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Log In</button></Link>
           <Link to={"/signup"}> <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">Sign Up</button></Link>
        </div>
    </div>
    </>
  )
}

export default Home
