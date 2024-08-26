import React from 'react';
import { Link } from 'react-router-dom';
import {
  DashboardIcon,
  ProvidersIcon,
  InboxIcon,
  AppointmentIcon,
  CommunityIcon,
  ServicesIcon,
  WalletIcon,
  LogisticsIcon,
  BountiesIcon,
  EventsIcon,
  ToolsIcon,
  ProfileIcon,
  SettingsIcon,
  LogoutIcon,
} from 'iconsax-react'; // Import Iconsax icons

const Sidebar = ({ isOpen }) => {
  return (
    <div
      className={`fixed left-0 top-0 h-full ${
        isOpen ? 'w-64' : 'w-0'
      } transition-width duration-200 bg-[#1c1c1e]`}
    >
      <div className='flex flex-col justify-between h-full'>
        <div className='space-y-4'>
          {/* Sidebar Links */}
          <Link
            to='/dashboard'
            className='flex items-center p-4 hover:bg-[#333]'
          >
            <DashboardIcon className='mr-2' />
            Dashboard
          </Link>
          <Link
            to='/providers'
            className='flex items-center p-4 hover:bg-[#333]'
          >
            <ProvidersIcon className='mr-2' />
            Providers
          </Link>
          {/* Add other links similarly */}
        </div>
        {/* Profile Section */}
        <div className='p-4'>
          <div className='flex items-center justify-between'>
            <ProfileIcon />
            <span>User</span>
            <button className='focus:outline-none'>
              <span className='arrow-down-icon' />{' '}
              {/* Create the arrow-down icon */}
            </button>
          </div>
          {/* Profile Dropdown */}
          <div className='hidden'>
            {' '}
            {/* Toggle this based on state */}
            <Link to='/profile' className='flex items-center p-2'>
              <ProfileIcon className='mr-2' />
              Profile
            </Link>
            <Link to='/settings' className='flex items-center p-2'>
              <SettingsIcon className='mr-2' />
              Settings
            </Link>
            <Link to='/logout' className='flex items-center p-2'>
              <LogoutIcon className='mr-2' />
              Logout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
