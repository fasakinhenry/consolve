import React from 'react';
import './landing.css'; // Optional, only if you add custom styles here

const LandingPage = () => {
  return (
    <div className='bg-black text-white font-sans'>
      {/* Header */}
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

      {/* Section 1 */}
      <section className='text-center py-16 px-6'>
        <h2 className='text-3xl font-semibold mb-4'>
          Empower Communities. Democratize Access.
        </h2>
        <p className='text-lg max-w-2xl mx-auto mb-12'>
          Create an open platform to connect users with essential services,
          improving accessibility and fostering community development.
        </p>
      </section>

      {/* Section 2 */}
      <section className='bg-gray-800 py-16'>
        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6'>
          <div className='text-center'>
            <h3 className='text-xl font-bold mb-2'>Become a Connector</h3>
            <p className='mb-4'>
              Enable seamless service discovery within your community. Join the
              movement today.
            </p>
            <a href='#' className='text-yellow-400 hover:underline'>
              Learn more
            </a>
          </div>
          <div className='text-center'>
            <h3 className='text-xl font-bold mb-2'>Discover Nearby Services</h3>
            <p className='mb-4'>
              Utilize AI to connect with services around you. Accessible and
              efficient.
            </p>
            <a href='#' className='text-yellow-400 hover:underline'>
              Coming Soon
            </a>
          </div>
          <div className='text-center'>
            <h3 className='text-xl font-bold mb-2'>Build and Scale</h3>
            <p className='mb-4'>
              Our platform evolves with you, supporting communities across the
              globe.
            </p>
            <a href='#' className='text-yellow-400 hover:underline'>
              Coming Soon
            </a>
          </div>
        </div>
      </section>

      {/* Section 3 - Testimonials */}
      <section className='py-16 text-center'>
        <h2 className='text-3xl font-semibold mb-12'>
          What Users Are Saying About Us
        </h2>
        <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6'>
          <div className='bg-gray-900 p-6 rounded-lg'>
            <p className='mb-4'>
              “This platform redefined local service connectivity for our
              community. It's amazing!”
            </p>
            <h4 className='text-yellow-400 font-bold'>Adewale Green</h4>
          </div>
          <div className='bg-gray-900 p-6 rounded-lg'>
            <p className='mb-4'>
              “Our business saw immense growth thanks to the easy service
              access.”
            </p>
            <h4 className='text-yellow-400 font-bold'>Seyi Adebayo</h4>
          </div>
          <div className='bg-gray-900 p-6 rounded-lg'>
            <p className='mb-4'>
              “Finally, a platform that makes accessing essential services a
              breeze.”
            </p>
            <h4 className='text-yellow-400 font-bold'>Lara Akinwale</h4>
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </div>
  );
};

export default LandingPage;
