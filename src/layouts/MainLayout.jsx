// src/layouts/MainLayout.jsx
import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import AppHeader from '../components/AppHeader';

const MainLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <AppHeader toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-900 p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
