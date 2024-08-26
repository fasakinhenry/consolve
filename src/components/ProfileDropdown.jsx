import React from 'react';
import { Link } from 'react-router-dom';
import { ProfileIcon, SettingsIcon, LogoutIcon } from 'iconsax-react'; // Import Iconsax icons

const ProfileDropdown = () => {
  return (
    <div className='absolute top-12 right-0 bg-[#333] rounded-lg p-4 shadow-lg'>
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
  );
};

export default ProfileDropdown;
