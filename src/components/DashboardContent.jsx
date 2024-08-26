import React from 'react';

const DashboardContent = () => {
  return (
    <div className='p-8 ml-64'>
      {/* Header Section */}
      <div className='flex justify-between items-center mb-8'>
        <h2 className='text-xl'>Your Dashboard</h2>
        <button className='btn-refresh'>Refresh</button>
      </div>

      {/* Metrics Section */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {/* Add Cards or Widgets here */}
      </div>
    </div>
  );
};

export default DashboardContent;
