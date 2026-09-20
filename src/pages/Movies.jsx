import React, { useEffect, useState } from 'react'
import MovieCard from "../components/MovieCard"; 
import MovieModal from "../components/MovieModal"; 
import { Link } from "react-router";
import { FiSearch } from "react-icons/fi"
 

const Movies = () => {
  const [shows, setShows ] = useState([]);
  const [search, setSearch ] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectShow, setSelectShows] = useState(null);

  useEffect(() => {
    setLoading(true);

    if(search.trim() === "") {
      fetch("https://api.tvmaze.com/shows")
      .then((response) => response.json())
      .then((data) => {
      // console.log(data); 
      setShows(data);
      setLoading(false);
      
     });
    } 
    else {
      fetch(`https://api.tvmaze.com/search/shows?q=${search}`)
      .then((response) => response.json())
      .then((data) => { 
      const results = data.map((item) => item.show);
      setShows(results);
      setLoading(false);
    });
  }
  }, [search]);

  return (
    <div className=' mx-auto w-full max-w-7xl bg-black text-white  px-2 py-14'>
      <h1 className='text-xl text-green-400 uppercase font-semibold mb-4'> Browse the collection </h1>
      <h2 className='text-5xl font-extrabold leading-tight'>Discover Your Next {""} 
              <span className='text-green-400'>Favorite Movie</span>
      </h2>
      <p className='text-base  text-gray-400 sm:text-lg'>
              Search the TVMaze catalog and discover a new story to love.
      </p>

        
      <div className='my-12 relative w-2/3'> 
        <FiSearch className='absolute left-4 top-1/2 -translate-y-1/2 text-cyan-400 text-xl' />
        <input type="text" value={search}
               onChange={(e) => setSearch(e.target.value)}
               placeholder='Search Movies by Title...'
        className='w-full rounded-2xl border border-cyan-700 bg-white/10 pl-12 pr-4 py-3 text-white outline-none' />
      </div>
  
      {loading ? (
        <div className='flex justify-center items-center gap-3 py-12'>
          <span className='w-3 h-3 rounded-full bg-cyan-400 shadow-md animate-bounce'></span>
          <span className='w-3 h-3 rounded-full bg-cyan-400 shadow-md animate-bounce [animation-delay:0.2s]'></span>
          <span className='w-3 h-3 rounded-full bg-cyan-400 shadow-md animate-bounce [animation-delay:0.4s]'></span>
        </div>
      ) : shows.length === 0 ? (
        <div className="col-span-full my-14 md:my-8 ">
          <div className="flex flex-col justify-center items-center gap-4">
            <h1 className="text-primary text-3xl md:text-5xl font-semibold mt-4">
              Shows Not Found
            </h1>
            <p className="text-gray-400 text-center text-base md:text-xl">
              The Show you are requesting is not found on our system. Please try
              another one
            </p>
            <button className="mt-6   px-6   py-2    rounded-lg border border-cyan-500/20      bg-gray-100/10 hover:text-green-300 transition">
              <Link to="/movies" onClick={() => setSearch("")}>
                 
                See All Shows
              </Link>
            </button>
          </div>
        </div>
      ) : (
      
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8  mt-8'>
        {shows.map((show) => (
            <MovieCard key={show.id} show={show} onDetails={() => setSelectShows(show)} />
        ))}
      </div>
    )}
    
      {selectShow && (
        <MovieModal show={selectShow} onClose={() => setSelectShows(null)} />
      )}
    </div>
  )
}

export default Movies