// src/pages/Dashboard.jsx
import React from 'react';
import { RefreshCircle } from 'iconsax-react';

const Dashboard = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 bg-[#121212]'>
      <div className='lg:col-span-2 space-y-6'>
        <div className='flex justify-between items-center'>
          <h1 className='text-2xl font-bold'>Your Streetcred</h1>
          <button className='bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center'>
            <RefreshCircle size='20' className='mr-2' />
            Refresh Streetcred
          </button>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* Score Card */}
          <div className='bg-gray-800 p-6 rounded-lg'>
            <h2 className='text-xl font-semibold mb-4'>Score</h2>
            {/* Add score visualization here */}
          </div>
          {/* Percentile Card */}
          <div className='bg-gray-800 p-6 rounded-lg'>
            <h2 className='text-xl font-semibold mb-4'>Percentile</h2>
            {/* Add percentile visualization here */}
          </div>
        </div>
        {/* Answer Questions Card */}
        <div className='bg-gray-800 p-6 rounded-lg'>
          <h2 className='text-xl font-semibold mb-4'>
            Answer Questions on Tublian
          </h2>
          <p className='mb-4'>
            Help out fellow software developers. Use Copilot to answer
            questions.
          </p>
          <button className='bg-blue-600 text-white px-4 py-2 rounded-lg'>
            Get Started
          </button>
        </div>
        {/* Pair Requests */}
        <div className='bg-gray-800 p-6 rounded-lg'>
          <h2 className='text-xl font-semibold mb-4'>Pair Requests</h2>
          <button className='bg-gray-700 text-yellow-400 px-4 py-2 rounded-lg w-full text-left'>
            Add your Discord to accept pair request. Add Discord
          </button>
        </div>
      </div>
      <div className='space-y-6'>
        {/* Recent Activities */}
        <div className='bg-gray-800 p-6 rounded-lg'>
          <h2 className='text-xl font-semibold mb-4'>Recent Activities</h2>
          {/* Add recent activities list here */}
        </div>
        {/* Suggested Connection */}
        <div className='bg-gray-800 p-6 rounded-lg'>
          <h2 className='text-xl font-semibold mb-4'>Suggested Connection</h2>
          {/* Add suggested connection here */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
