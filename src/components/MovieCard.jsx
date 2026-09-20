import React from 'react' 

const MovieCard = ({show, onDetails }) => {
  return (
    <div className='rounded-xl bg-cyan-600/10 border border-cyan-700  pb-3'>
      <div className='relative overflow-hidden rounded-xl'>
              <img src={show.image?.medium} alt={show.image} className="w-full h-100 object-cover  " />
              <h2 className="absolute right-2 top-3 rounded-md bg-black/80 px-2 py-1  
                             text-[10px] font-bold text-green-400 uppercase tracking-wider">
                  {show.genres?.join(" • ")}
              </h2>
              


              <div className="p-3">
                
                <span className="text-xl font-bold text-slate-300 line-clamp-1">{show.name}</span>

                <div className='flex justify-between items-center mt-2'>
                   <span className='text-amber-400'> &#9733; {show.rating?.average}</span> 
                  <p className="text-slate-400 text-sm mt-2 line-clamp-2"> 
                    <span className='mr-1'>&#128197;&#65038;</span> {show.premiered?.slice(0,4)}
                  </p> 
                </div>
              </div>
        </div>

          <div className=' px-4'>
            <button 
              onClick={onDetails} 
              className="w-full  py-2 flex justify-center items-center  rounded-lg border border-cyan-500/20   font-medium  bg-gray-100/10 hover:text-green-300 transition">
                View Details
            </button>
          </div>
      </div>
  )
}

export default MovieCard;