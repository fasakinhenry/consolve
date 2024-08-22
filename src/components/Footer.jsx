import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-[#1a1a1a] text-white py-12'>
      <div className='max-w-6xl mx-auto px-6'>
        <div className='flex justify-between mb-8'>
          <div className='text-xl font-bold text-[#fdca3a]'>tuliban</div>
          <div className='flex space-x-4'>
            <a href='#' className='hover:text-[#fdca3a]'>
              Twitter
            </a>
            <a href='#' className='hover:text-[#fdca3a]'>
              GitHub
            </a>
            <a href='#' className='hover:text-[#fdca3a]'>
              LinkedIn
            </a>
          </div>
        </div>
        <div className='flex justify-between'>
          <div>
            <h4 className='font-bold mb-2'>Links</h4>
            <ul>
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
            <h4 className='font-bold mb-2'>Company</h4>
            <ul>
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
            <h4 className='font-bold mb-2'>Legal</h4>
            <ul>
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
    </footer>
  );
};

export default Footer;
