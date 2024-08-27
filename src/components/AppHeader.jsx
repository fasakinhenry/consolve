// src/components/Header.jsx
import React from 'react';
import { HambergerMenu } from 'iconsax-react';

const AppHeader = ({ toggleSidebar }) => {
  return (
    <header className="bg-gray-800 lg:hidden">
      <div className="px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <img src="/path-to-your-logo.png" alt="Logo" className="h-8 w-8 mr-2" />
          <span className="text-xl font-semibold text-white">Tublian</span>
        </div>
        <button onClick={toggleSidebar} className="text-white">
          <HambergerMenu size="24" />
        </button>
      </div>
    </header>
  );
};

export default AppHeader;
