import React, { useState } from 'react';
import { FaGithub, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className='py-4 fixed w-full backdrop-blur-md z-50'>
      <div className='container mx-auto px-4'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <img src='/consolve-logo.png' alt='Consolve' className='h-8 mr-2' />
            <span className='text-xl font-bold text-[#fdca3a]'>Consolve</span>
          </div>

          {/* Mobile menu button */}
          <button
            className='md:hidden text-white'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          {/* Desktop navigation */}
          <nav className='hidden md:flex items-center'>
            <a href='#' className='text-gray-300 mx-2 hover:text-white'>
              Developers ▼
            </a>
            <a href='#' className='text-gray-300 mx-2 hover:text-white'>
              Customers
            </a>
          </nav>
          <a
            href='#'
            className='bg-[#fdca3a] text-black px-4 py-2 rounded-full hover:bg-yellow-500 hidden md:flex items-center ml-4'
          >
            {/* <FaGithub className='mr-2' /> */}
            Get started now
          </a>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className='md:hidden mt-4'>
            <a href='#' className='block text-gray-300 py-2 hover:text-white'>
              Developers ▼
            </a>
            <a href='#' className='block text-gray-300 py-2 hover:text-white'>
              Customers
            </a>
            <a
              href='#'
              className='bg-[#fdca3a] text-black px-4 py-2 rounded-full hover:bg-yellow-500 flex items-center mt-2'
            >
              {/* <FaGithub className='mr-2' /> */}
              Login
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
