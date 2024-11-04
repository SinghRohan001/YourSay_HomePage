import React from 'react'
import logo from '../assets/Yoursay.svg'

const Navbar = () => {
  return (
    <div className='fixed top-0 left-0 flex justify-between px-6 p-3 shadow-md w-full z-20 bg-white'>
        <div className='flex '>
        <div >
            <img src={logo} alt="" />
        </div>

        <div className='hidden lg:flex items-center space-x-4'>
            <div className='p-1 ml-2 text-sm'>Trading</div>
            <div className='p-1 ml-2 text-sm'>Career</div>
            <div className='p-1 ml-2 text-sm'>Cares</div>
            <div className='p-1 ml-2 text-sm'>About us</div>
        </div>
        </div>

        <div className='hidden lg:flex items-center space-x-2'>
            <div>
            <button type="button" class="text-white font-bold bg-blue-700 border-blue-700 border-[1px] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-3 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Download Now</button>
            </div>

            <div>
            <button type="button" class="text-blue-500 border-blue-500 border-[1px] font-bold   rounded-lg text-sm px-5 py-2 me-2 mb-2 ">Trade Online</button>
            </div>
        </div>

        <div className='lg:hidden flex items-center'>
        <button className='text-blue-500'>
          {/* Menu Icon */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Navbar