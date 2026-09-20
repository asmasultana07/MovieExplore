import React from 'react';
import { Outlet } from 'react-router';
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

const MainLayout = () => {
  return (
    <div className='min-h-screen bg-black'>
        <div className=''>
          <Navbar />

        <main className='min-h-screen  flex-1'>
            <Outlet />
        </main> 

        <Footer />
        </div>
    </div>
  )
}

export default MainLayout;