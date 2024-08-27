import React, { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import ProfileDropdown from '../components/ProfileDropdown';

const MainLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  return (
    <div className='flex'>
      <Sidebar isOpen={isSidebarOpen} />
      <div className='flex-1'>
        {/* Add Navbar with hamburger on smaller screens */}
        <main>{children}</main>
      </div>
      {isProfileDropdownOpen && <ProfileDropdown />}
    </div>
  );
};

export default MainLayout;
