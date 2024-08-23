import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-[#1a1a1a] text-white py-12'>
      <div className='container'>
        <div className='flex flex-col md:flex-row justify-between mb-8'>
          <div className='mb-6 md:mb-0'>
            <div className='text-xl font-bold text-[#fdca3a] mb-4'>
              Consolve
            </div>
            <p className='text-gray-400 max-w-xs'>
              Empowering developers to build scalable solutions for global
              impact.
            </p>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-8'>
            <div>
              <h4 className='font-bold mb-4'>Links</h4>
              <ul className='space-y-2'>
                <li>
                  <a href='#' className='hover:text-[#fdca3a]'>
                    Developers
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-[#fdca3a]'>
                    Customers
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-[#fdca3a]'>
                    Pricing
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='font-bold mb-4'>Company</h4>
              <ul className='space-y-2'>
                <li>
                  <a href='#' className='hover:text-[#fdca3a]'>
                    About Us
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-[#fdca3a]'>
                    Careers
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-[#fdca3a]'>
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className='font-bold mb-4'>Legal</h4>
              <ul className='space-y-2'>
                <li>
                  <a href='#' className='hover:text-[#fdca3a]'>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-[#fdca3a]'>
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='border-t border-gray-700 pt-8 mt-8 text-center md:text-left'>
          <p className='text-gray-400'>
            &copy; 2024 Consolve. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
