import React, { useState } from "react";
import logo from "../assets/yslogo.svg";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  
    const handleDownloadClick = () => {
      navigate('/download');
    };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    //hello world
  };

  return (
    <div className="fixed top-0 left-0 flex justify-between px-6 p-3 shadow-md w-full z-20 bg-white">
      <div className="flex items-center">
        <div>
          <img src={logo} alt="Logo" />
        </div>

        <div className="hidden lg:flex font-montserrat items-center space-x-4">
          {/* <div className='p-1 ml-2 text-sm'>Trading</div> */}
          {/* <div className='p-1 ml-2 text-sm'>Career</div> */}
          {/* <Link to="/refund-policy"><div className='p-1 ml-2 text-sm font-semibold text-blue-700'>Cancellation & Refund Policy</div></Link> */}
          {/* <Link to="/terms-condition"><div className='p-1 ml-2 font-semibold text-blue-700 text-sm'>Terms and Condition</div></Link> */}
        </div>
      </div>

      <div className="hidden lg:flex items-center space-x-2">
        <div>
          <button
            type="button"
            className="text-white font-montserrat font-bold bg-blue-700 border-blue-700 border-[1px] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm px-3 py-2 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={handleDownloadClick}
          >
            Download App
          </button>
        </div>
        {/* <div>
          <button type="button" className="text-blue-500 font-montserrat border-blue-500 border-[1px] font-bold rounded-lg text-sm px-5 py-2 me-2 mb-2">
            Trade online
          </button>
        </div> */}
      </div>

      <div className="lg:hidden flex items-center">
        <button onClick={toggleMenu} className="text-blue-500">
          {/* Menu Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start ">
          {/* <div className='p-1 mb-2 text-sm'>Trading</div>
          <div className='p-1 mb-2 text-sm'>Career</div>
          <div className='p-1 mb-2 text-sm'>Cares</div>
          <div className='p-1 mb-2 text-sm'>About us</div> */}
        </div>
      )}
    </div>
  );
};

export default Navbar;
