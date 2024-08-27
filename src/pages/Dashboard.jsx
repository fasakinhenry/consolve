import React, { useState } from 'react';
import { RefreshCircle, Chrome, ArrowCircleRight } from 'iconsax-react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

// Mock data
const percentileData = [
  { name: '0', value: 0 },
  { name: '20', value: 20 },
  { name: '40', value: 40 },
  { name: '60', value: 80 },
  { name: '80', value: 60 },
  { name: '100', value: 30 },
];

const recentActivities = [
  {
    user: 'ServicePro1',
    action: 'completed a job',
    time: '2 hours ago',
  },
  {
    user: 'ClientA',
    action: 'posted a new job request',
    time: '9 hours ago',
  },
  { user: 'CompanyX', action: 'updated their profile', time: '9 hours ago' },
  {
    user: 'ServicePro2',
    action: 'received a 5-star rating',
    time: '10 hours ago',
  },
  { user: 'ClientB', action: 'left a review', time: '11 hours ago' },
];

const serviceProviders = [
  {
    name: 'ElectricPro',
    location: 'New York, USA',
    rating: 4.8,
    service: 'Electrical Services',
    specialties: ['Residential', 'Commercial', 'Emergency'],
  },
  {
    name: 'PlumbMaster',
    location: 'Los Angeles, USA',
    rating: 4.7,
    service: 'Plumbing',
    specialties: ['Repairs', 'Installation', '24/7 Service'],
  },
];

const topProviders = [
  { name: "John's Handyman", gain: '+95 jobs' },
  { name: 'QuickFix Plumbing', gain: '+87 jobs' },
  { name: 'GreenThumb Landscaping', gain: '+82 jobs' },
];

const jobListings = [
  {
    company: 'HomeRepair Inc.',
    position: 'Experienced Carpenter',
    type: 'Contract',
  },
  {
    company: 'CleanPro Services',
    position: 'House Cleaning Specialist',
    type: 'Part-time',
  },
];

const Dashboard = () => {
  const [currentProviderIndex, setCurrentProviderIndex] = useState(0);

  const nextProvider = () => {
    setCurrentProviderIndex(
      (prevIndex) => (prevIndex + 1) % topProviders.length
    );
  };

  const prevProvider = () => {
    setCurrentProviderIndex(
      (prevIndex) => (prevIndex - 1 + topProviders.length) % topProviders.length
    );
  };

  return (
    <div className='flex flex-col space-y-6 bg-[#121212] p-4 md:p-6'>
      <div className='flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-4 lg:space-y-0'>
        <h1 className='text-2xl font-bold text-white'>Your Dashboard</h1>
        <button className='bg-[#1e1e1e] text-white px-4 py-2 rounded-lg flex items-center'>
          <RefreshCircle size='20' className='mr-2' />
          Refresh Stats
        </button>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {/* Score Card */}
        <div className='bg-[#1e1e1e] p-6 rounded-lg'>
          <h2 className='text-xl font-semibold mb-4 text-white'>
            Reputation Score
          </h2>
          <div className='w-32 h-32 mx-auto'>
            <CircularProgressbar
              value={84.5}
              text={`84.5`}
              styles={buildStyles({
                textColor: '#fff',
                pathColor: '#8B5CF6',
                trailColor: '#374151',
              })}
            />
          </div>
          <div className='text-center mt-4 text-white'>
            <p>Total Jobs: 127</p>
            <p>Positive Reviews: 118</p>
          </div>
        </div>

        {/* Percentile Card */}
        <div className='bg-[#1e1e1e] p-6 rounded-lg'>
          <h2 className='text-xl font-semibold mb-4 text-white'>
            Performance Percentile
          </h2>
          <div className='h-32'>
            <ResponsiveContainer width='100%' height='100%'>
              <AreaChart data={percentileData}>
                <CartesianGrid strokeDasharray='3 3' />
                <XAxis dataKey='name' />
                <YAxis />
                <Tooltip />
                <Area
                  type='monotone'
                  dataKey='value'
                  stroke='#8B5CF6'
                  fill='#8B5CF6'
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <p className='text-green-400 mt-2'>92nd percentile</p>
          <p className='text-white'>You outperform 92% of service providers</p>
        </div>

        {/* Top Provider Card (Mobile Friendly) */}
        <div className='bg-[#1e1e1e] p-6 rounded-lg'>
          <h2 className='text-xl font-semibold mb-4 text-white'>
            Top Providers
          </h2>
          <div className='flex flex-col items-center'>
            <div className='bg-gray-700 w-24 h-24 rounded-full mb-4'></div>
            <p className='text-white text-lg font-semibold'>
              {topProviders[currentProviderIndex].name}
            </p>
            <p className='text-green-400 text-sm'>
              Completed: {topProviders[currentProviderIndex].gain}
            </p>
          </div>
          <div className='flex justify-between mt-4'>
            <button onClick={prevProvider} className='text-white'>
              &lt; Prev
            </button>
            <button onClick={nextProvider} className='text-white'>
              Next &gt;
            </button>
          </div>
        </div>
      </div>

      {/* Connect with Clients Card */}
      <div className='bg-[#3730A3] p-6 rounded-lg'>
        <h2 className='text-2xl font-bold text-white mb-2'>
          Connect with More Clients
        </h2>
        <p className='text-white mb-4'>
          Boost your visibility and grow your business with our AI-powered
          matching system.
        </p>
        <button className='bg-white text-[#3730A3] px-4 py-2 rounded-lg font-bold'>
          Upgrade Profile
        </button>
      </div>

      {/* Service Requests */}
      <div className='bg-[#1e1e1e] p-6 rounded-lg'>
        <h2 className='text-xl font-semibold mb-4 text-white'>
          New Service Requests
        </h2>
        <div className='space-y-4'>
          {serviceProviders.map((provider, index) => (
            <div key={index} className='bg-[#2d2d2d] p-4 rounded-lg'>
              <div className='flex justify-between items-center mb-2'>
                <span className='text-white font-semibold'>
                  {provider.name}
                </span>
                <span className='text-gray-400'>{provider.location}</span>
              </div>
              <div className='text-gray-400 mb-2'>
                Rating: {provider.rating} ⭐
              </div>
              <div className='text-white mb-2'>Service: {provider.service}</div>
              <div className='flex flex-wrap gap-2 mb-2'>
                {provider.specialties.map((specialty, i) => (
                  <span
                    key={i}
                    className='bg-gray-700 text-white px-2 py-1 rounded-full text-sm'
                  >
                    {specialty}
                  </span>
                ))}
              </div>
              <button className='bg-blue-600 text-white px-4 py-2 rounded-lg w-full mt-2'>
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {/* Recent Activities */}
        <div className='bg-[#1e1e1e] p-6 rounded-lg'>
          <h2 className='text-xl font-semibold mb-4 text-white'>
            Recent Activities
          </h2>
          <ul className='space-y-4'>
            {recentActivities.map((activity, index) => (
              <li key={index} className='flex items-start'>
                <div className='bg-gray-700 w-8 h-8 rounded-full mr-3 flex-shrink-0'></div>
                <div>
                  <p className='text-white'>
                    <span className='font-semibold'>{activity.user}</span>{' '}
                    {activity.action}
                  </p>
                  <p className='text-gray-400 text-sm'>{activity.time}</p>
                </div>
              </li>
            ))}
          </ul>
          <button className='text-yellow-400 mt-4 flex items-center'>
            View all activities <ArrowCircleRight size='20' className='ml-2' />
          </button>
        </div>

        {/* Job Listings */}
        <div className='bg-[#1e1e1e] p-6 rounded-lg'>
          <h2 className='text-xl font-semibold mb-4 text-white'>
            Job Listings
          </h2>
          <div className='space-y-4'>
            {jobListings.map((job, index) => (
              <div key={index} className='bg-[#2d2d2d] p-4 rounded-lg'>
                <div className='flex justify-between items-center'>
                  <div>
                    <p className='text-white font-semibold'>{job.company}</p>
                    <p className='text-gray-400'>{job.position}</p>
                  </div>
                  <span className='bg-green-600 text-white px-2 py-1 rounded-full text-xs'>
                    {job.type}
                  </span>
                </div>
                <button className='bg-blue-600 text-white px-4 py-2 rounded-lg w-full mt-4'>
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
