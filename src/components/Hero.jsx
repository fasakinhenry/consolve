import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className='py-10 md:py-20'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-12 gap-4'>
          <div className='md:col-span-12 text-left md:text-center p-5'>
            <h1 className='text-4xl md:text-6xl lg:text-7xl font-black mb-4 mt-10 md:mt-16 leading-tight'>
              Connect with{' '}
              <span className='text-[#fdca3a]'>Local Services</span> 👨‍🔧
            </h1>
            <h1 className='text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight'>
              in Your <span className='text-[#fdca3a]'>Community 🌍</span>
            </h1>
            <p className='text-lg md:text-xl lg:text-2xl mb-8 font-bold text-[#fefefe]'>
              Access essential services near you with ease.
            </p>
            <Link
              to='/dashboard'
              className='bg-[#fdca3a] text-black px-6 py-3 rounded-full hover:bg-yellow-500 inline-flex items-center'
            >
              <FaGithub className='mr-2' />
              Join with GitHub
            </Link>
          </div>
        </div>
        <div className='mt-16 md:mt-32'>
          <img
            src='/dashboard-preview2.png'
            alt='Dashboard Preview'
            className='w-full rounded-lg shadow-2xl'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
