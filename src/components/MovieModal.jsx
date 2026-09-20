import React from 'react'
import { FaTimes } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const MovieModal = ({ show, onClose }) => {
  return (
    <div className='fixed inset-0 z-50 flex justify-center items-center bg-black/70 '>
      <div className='relative w-full max-w-3xl md:h-[500px] rounded-2xl bg-gray-900 text-white overflow-hidden'>
        
        <button onClick={onClose} className='absolute right-4 top-4 z-10 text-xl text-green-500 hover:text-white'>
          <FaTimes/>
        </button>

        <div className='h-full grid grid-cols-1 sm:grid-cols-3 gap-6 overflow-y-auto'>
            <div className='sm:col-span-1'>
                <img  
                  src={show.image?.original || show.image?.medium} 
                  alt={show.name} 
                  className="w-full h-[400px] sm:h-full rounded-xl object-cover  " />
            </div>
            <div className='sm:col-span-2 px-2 py-5'>
                <div>
                  <h2 className='text-2xl sm:text-4xl font-bold text-cyan-300'>{show.name}</h2>
                  <div className='mt-2 flex flex-wrap gap-2'>
                    {show.genres?.map((genre) => (
                    <span key={genre} 
                    className='text-xs   font-semibold text-green-400 uppercase tracking-wider
                    rounded-md border border-green-400/30 bg-green-400/10 px-3 py-1'>
                    {genre}
                  </span>
                  ))}
                  </div> 
                </div>

                <div className='mt-12 grid grid-cols-2 gap-3 rounded-2xl text-sm  '>
                      <p className='text-amber-400'> &#9733; {show.rating?.average}</p>
                      <p className="text-slate-400 text-sm mt-2 line-clamp-2"> 
                            <span className='mr-1'>&#128197;&#65038;</span> {show.premiered?.slice(0,4)}</p>
                      <p className="text-slate-400">🌐 {show.language}</p>
                      <p className="text-slate-400">🕐 {show.runtime}</p>
                </div>
                <div className='mt-5 flex gap-8 text-sm'>
                  <p className=' text-gray-400'>Status: <span className='font-semibold text-gray-200'>{" "}{show.status}</span></p>
                  <p className='font-bold text-green-400 hover:text-green-600'>
                    <a href="{show.officialSite}"
                    target='_blank'
                    className='inline-flex items-center gap-1'><FiExternalLink className="text-sm" /> Official site
                    
                    </a>
                     </p>
                </div>
                <div className='mt-10'>
                  <p className='font-semibold text-white text-xl uppercase'>Overview</p>
                  <p className='mt-2 text-sm leading-6 text-gray-400'>
                    {show.summary 
                     ? show.summary.replace(/<[^>]+>/g, "") 
                     : "No overview available."} 
                  </p>
                </div>
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default MovieModal;