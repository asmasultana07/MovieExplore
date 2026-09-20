import React, { useState } from "react"; 
import { NavLink } from "react-router"; 
import { FaFilm, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen ] = useState(false);

  const getNavActive = ({ isActive }) => {
    const navLinkActive = "text-white text-[16px] sm:text-[20px] font-bold text-one";
    const navLink = "text-gray-400 text-[16px] sm:text-[20px] font-medium";

    return isActive ? navLinkActive : navLink;
  };

  return (
    <>
     <header className="bg-[#0b0b0f]/95 backdrop-blur-md "> 
      <nav className="mx-auto w-full max-w-7xl flex justify-between items-center px-4 py-2 md:px-8 md:py-4   shadow-md shadow-cyan-500/20">

       <div className="flex justify-center items-center gap-2">
        <FaFilm className="text-xl   text-green-400" />
        <span className="text-2xl font-bold text-white">Movie
        <span className='text-green-400'>Explorer</span>
        </span>
       </div>

      {/* desktop navigation */}
       <div className="md:flex gap-6 text-white hidden">
         <NavLink to="/" className={getNavActive}>   Home </NavLink>
         <NavLink to="/movies" className={getNavActive}>  Movies</NavLink>
       </div>

       <NavLink to="/movies" className="hidden md:flex text-white font-semibold bg-green-600 rounded-full px-5 py-2 transition hover:bg-white hover:text-green-600">
        Browse Movies
       </NavLink>

       {/* mobile navigation */}
       <button onClick={() => setIsMenuOpen(!isMenuOpen)}
       className="text-white text-xl flex justify-start items-center md:hidden" 
       aria-label="Toggle menu">
        {isMenuOpen ? <FaTimes/> : <FaBars/>}
       </button>
    
    </nav>

      {isMenuOpen && (
        <div className="border-b  border-black/20 bg-blue-100 md:hidden">
            <div className="flex flex-col gap-1 px-5 py-4">
              <NavLink to="/" className={getNavActive}>   Home </NavLink>
              <NavLink to="/movies" className={getNavActive}>  Movies</NavLink>
            </div>
        </div>
      )}

    
    </header>
</>
   
  )
}

export default Navbar;