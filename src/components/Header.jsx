import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Header = () => {
  return (
    <header className='py-4 fixed w-full backdrop-blur-md'>
      <div className='container'>
        <div className='flex justify-between items-center'>
          <div className='flex items-center'>
            <img src='/tuliban-logo.png' alt='Tuliban' className='h-8 mr-2' />
            <span className='text-xl font-bold text-[#fdca3a]'>tuliban</span>
          </div>
          <nav className='flex items-center'>
            <a href='#' className='text-gray-300 mx-2 hover:text-white'>
              Developers ▼
            </a>
            <a href='#' className='text-gray-300 mx-2 hover:text-white'>
              Customers
            </a>
          </nav>
          <a
            href='#'
            className='bg-[#fdca3a] text-black px-4 py-2 rounded-full hover:bg-yellow-500 flex items-center'
          >
            <FaGithub className='mr-2' />
            Login
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
