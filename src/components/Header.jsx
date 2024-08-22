import React from 'react';

const Header = () => {
  return (
    <header className='text-center py-12'>
      <nav className='flex justify-between items-center px-6'>
        <div className='text-xl font-bold text-yellow-400'>
          Service Connector
        </div>
        <div>
          <a href='#' className='text-yellow-400 mx-2'>
            Download
          </a>
          <a href='#' className='text-yellow-400 mx-2'>
            Customers
          </a>
          <a href='#' className='text-yellow-400 mx-2'>
            Login
          </a>
        </div>
      </nav>
      <h1 className='text-5xl font-bold my-4'>
        Redefine How Essential Services Are Connected 🌍
      </h1>
      <p className='text-lg mb-6'>
        Empower communities to bridge the gap between essential local services
        and users.
      </p>
      <a
        href='#start'
        className='bg-yellow-400 text-black px-6 py-3 rounded-full hover:bg-yellow-500'
      >
        Join the Movement
      </a>
    </header>
  );
};

export default Header;
