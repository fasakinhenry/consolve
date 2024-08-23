import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='py-20'>
      <div className='container'>
        <div className='grid'>
          <div className='col-span-12 text-center p-5'>
            <h1 className='text-7xl font-black mb-4 mt-16'>
              Redefine How <span className='text-[#fdca3a]'>&lt;/&gt;</span>{' '}
              Software
            </h1>
            <h1 className='text-7xl font-black mb-6'>Is Built ⚡</h1>
            <p className='text-xl mb-8 font-bold text-[#fefefe]'>
              Turn every developer into a solo corporation
            </p>
            <Link
              to='/login'
              className='bg-[#fdca3a] text-black px-6 py-3 rounded-full hover:bg-yellow-500 inline-flex items-center'
            >
              <FaGithub className='mr-2' />
              Join with GitHub
            </Link>
          </div>
        </div>
        <div className='mt-32'>
          <img
            src='/dashboard-preview.png'
            alt='Dashboard Preview'
            className='w-full rounded-lg shadow-2xl'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
