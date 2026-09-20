import React from 'react';
import banner from "../assets/film-banner.jpg"
import { NavLink } from "react-router"; 
import { FaPlay, FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className='relative min-h-screen overflow-hidden bg-[#45455e]'>
      <img src={banner} alt="banner" className='absolute inset-0 object-cover h-full w-full' />
      <div className='absolute inset-0 bg-black/50'></div> 

      <div className='relative z-10 flex items-center justify-center h-full px-5 py-30'>
        <div className='max-w-2xl text-center text-white '>
            <h1 className='text-xl md:text-3xl text-green-400 uppercase font-semibold mb-5'> Welcome to MovieExplore </h1>
            <h2 className='text-3xl md:text-5xl font-extrabold leading-tight'>Discover Your Next {""} 
              <span className='text-green-400'>Favorite Movie</span>
            </h2>
            <p className='mt-6 max-w-xl text-base leading-7 text-gray-300 sm:text-lg md:text-xl'>
              Explore amazing Movies, discover new stories, and find something perfect to watch. 
              Your next favorite movie is just a search away.</p>
            
            <div className='mt-8 flex justify-center'>
            <NavLink to="/movies" 
              className="flex items-center justify-center gap-2 rounded-full bg-green-600 px-7 py-3.5  text-lg
              font-semibold text-white transition duration-300 hover:bg-green-700 hover:shadow-lg hover:shadow-green-600/30">
              Browse Movies
              <FaArrowRight className='text-sm' />
            </NavLink>
            </div>
        </div>
      </div>
    </section> 
  )
}

export default Hero;