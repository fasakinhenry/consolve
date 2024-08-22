import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-yellow-400 text-black py-12'>
      <div className='text-center mb-6'>
        <h3 className='text-2xl font-semibold'>Start Your Journey Today!</h3>
        <p className='max-w-2xl mx-auto my-4'>
          Join a platform that's transforming how essential services are
          accessed. Connect, manage, and grow—right at your fingertips.
        </p>
        <a
          href='#start'
          className='bg-black text-yellow-400 px-6 py-3 rounded-full hover:bg-gray-800'
        >
          Join the Community
        </a>
      </div>
      <div className='flex justify-between max-w-6xl mx-auto px-6'>
        {/* Add Footer Links Here */}
        <div>
          <h4 className='font-bold mb-2'>Links</h4>
          <ul>
            <li>
              <a href='#' className='hover:underline'>
                About Us
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                Blog
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                What is GSC?
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                Careers
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className='font-bold mb-2'>Socials</h4>
          <ul>
            <li>
              <a href='#' className='hover:underline'>
                LinkedIn
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                Twitter
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                YouTube
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className='font-bold mb-2'>Legal</h4>
          <ul>
            <li>
              <a href='#' className='hover:underline'>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                Terms of Use
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
