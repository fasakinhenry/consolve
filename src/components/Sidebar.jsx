// src/components/Sidebar.jsx
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {
  Activity,
  Cup,
  Discover,
  Profile2User,
  LogoutCurve,
  Calendar,
  Wallet3,
  Briefcase,
  TruckFast,
  NotificationBing,
  MenuBoard,
  Magicpen,
  Setting,
} from 'iconsax-react';

const sidebarItems = [
  { name: 'Dashboard', icon: Activity, path: '/dashboard' },
  { name: 'Providers', icon: Discover, path: '/providers' },
  { name: 'Inbox', icon: NotificationBing, path: '/inbox' },
  { name: 'Appointments', icon: Calendar, path: '/appointments' },
  { name: 'Community', icon: Profile2User, path: '/community' },
  { name: 'Services', icon: Briefcase, path: '/services' },
  { name: 'Wallet', icon: Wallet3, path: '/wallet' },
  { name: 'Logistics', icon: TruckFast, path: '/logistics' },
  { name: 'Bounties', icon: Cup, path: '/bounties' },
  { name: 'Events', icon: MenuBoard, path: '/events' },
  { name: 'Tools', icon: Magicpen, path: '/tools' },
];

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  return (
    <>
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 bg-[#121212] transition duration-300 transform border-r-[1px   ] border-[#888888] ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 lg:static lg:inset-0`}
      >
        <div className='flex items-center justify-between h-16 px-6'>
          <Link to='/' className='flex items-center cursor-pointer'>
            <img
              src='/consolve-logo.png'
              alt='Logo'
              className='h-8 w-10 mr-2'
            />
            <span className='text-xl font-semibold'>Consolve</span>
          </Link>
          <button onClick={() => setIsOpen(false)} className='lg:hidden'>
            <svg
              className='h-6 w-6'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>
        <nav className='mt-5 px-2'>
          {sidebarItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center px-4 py-2 mt-2 text-gray-100 rounded-lg hover:bg-[#292929] ${
                  isActive ? 'bg-[#292929]' : ''
                }`
              }
            >
              <item.icon className='h-6 w-6 mr-3' />
              {item.name}
            </NavLink>
          ))}
        </nav>
        <div className='absolute bottom-0 w-full'>
          <div className='flex items-center px-4 py-2 mt-2 text-gray-100'>
            <img
              src='/profile2.jpg'
              alt='Profile'
              className='h-8 w-8 rounded-full mr-2'
            />
            <span>John Doe</span>
            <button
              onClick={() => setShowProfileMenu(!showProfileMenu)}
              className='ml-auto'
            >
              <svg
                className='h-4 w-4'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M19 9l-7 7-7-7'
                />
              </svg>
            </button>
          </div>
          {showProfileMenu && (
            <div className='bg-[#292929] py-2'>
              <NavLink
                to='/profile'
                className='flex items-center px-4 py-2 text-gray-100 hover:bg-gray-600'
              >
                <Profile2User className='h-5 w-5 mr-3' />
                Profile
              </NavLink>
              <NavLink
                to='/settings'
                className='flex items-center px-4 py-2 text-gray-100 hover:bg-gray-600'
              >
                <Setting className='h-5 w-5 mr-3' />
                Settings
              </NavLink>
              <button className='flex items-center w-full px-4 py-2 text-gray-100 hover:bg-gray-600'>
                <LogoutCurve className='h-5 w-5 mr-3' />
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
      {isOpen && (
        <div
          className='fixed inset-0 z-20 bg-black opacity-50 transition-opacity lg:hidden'
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Sidebar;
