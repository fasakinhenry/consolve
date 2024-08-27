// src/pages/Dashboard.jsx
import React from 'react';
import { RefreshCircle, Chrome, ArrowRight2 } from 'iconsax-react';
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
    user: 'python-learnpro',
    action: 'is working on a github issue',
    time: '2 hours ago',
  },
  {
    user: 'DharhanD',
    action: 'is working on a github issue',
    time: '9 hours ago',
  },
  { user: 'kk1o99', action: 'created a roadmap', time: '9 hours ago' },
  {
    user: 'RisharthSangirl',
    action: 'created a roadmap',
    time: '10 hours ago',
  },
  { user: 'aws-web07', action: 'created a roadmap', time: '11 hours ago' },
];

const pairRequests = [
  {
    name: 'Victorpreston',
    location: 'Kenya',
    streetcred: 70.27,
    task: '[FEAT] Better docs page',
    interests: ['Python', 'MLOps', 'JavaScript'],
  },
  {
    name: 'Vaibhav4228',
    location: 'Bangalore,India',
    streetcred: 70.23,
    task: '[FEAT] Better docs page',
    interests: ['C++', 'JavaScript', 'React.js'],
  },
];

const topContributors = [
  { name: 'Rohit Kumar Saini', gain: '+70.12' },
  { name: 'kumdan job', gain: '+66.44' },
  { name: 'Feaskin Henry', gain: '+64.33' },
];

const jobs = [
  {
    company: 'Roams (YC S23)',
    position: 'iOS Founding Engineer',
    type: 'Remote',
  },
  {
    company: 'Prohos24 (YC S24)',
    position: 'iOS Engineer (SF)',
    type: 'Remote',
  },
];

const Dashboard = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 bg-[#121212] p-6'>
      <div className='lg:col-span-2 space-y-6'>
        <div className='flex justify-between items-center'>
          <h1 className='text-2xl font-bold text-white'>Your Streetcred</h1>
          <button className='bg-[#1e1e1e] text-white px-4 py-2 rounded-lg flex items-center'>
            <RefreshCircle size='20' className='mr-2' />
            Refresh Streetcred
          </button>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
          {/* Score Card */}
          <div className='bg-[#1e1e1e] p-6 rounded-lg'>
            <h2 className='text-xl font-semibold mb-4 text-white'>Score</h2>
            <div className='w-40 h-40 mx-auto'>
              <CircularProgressbar
                value={64.33}
                text={`64.33`}
                styles={buildStyles({
                  textColor: '#fff',
                  pathColor: '#8B5CF6',
                  trailColor: '#374151',
                })}
              />
            </div>
            <div className='text-center mt-4 text-white'>
              <p>Total Connections: 1</p>
              <p>No. of Pairs: 0</p>
            </div>
          </div>
          {/* Percentile Card */}
          <div className='bg-[#1e1e1e] p-6 rounded-lg'>
            <h2 className='text-xl font-semibold mb-4 text-white'>
              Percentile
            </h2>
            <div className='h-40'>
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
            <p className='text-green-400 mt-2'>95th percentile</p>
            <p className='text-white'>You beat 95% of users</p>
          </div>
        </div>
        {/* Fastest Way to Learn Anything Card */}
        <div className='bg-[#3730A3] p-6 rounded-lg'>
          <h2 className='text-2xl font-bold text-white mb-2'>
            Fastest Way to Learn Anything
          </h2>
          <p className='text-white mb-4'>
            A revolutionary AI-driven personalized learning companion for
            developers.
          </p>
          <button className='bg-white text-[#3730A3] px-4 py-2 rounded-lg font-bold'>
            Get Started
          </button>
        </div>
        {/* Pair Requests */}
        <div className='bg-[#1e1e1e] p-6 rounded-lg'>
          <h2 className='text-xl font-semibold mb-4 text-white'>
            Pair Requests
          </h2>
          <button className='bg-gray-700 text-yellow-400 px-4 py-2 rounded-lg w-full text-left flex items-center mb-4'>
            <Chrome size='20' className='mr-2' />
            Add your Discord to accept pair request. Add Discord
          </button>
          <div className='space-y-4'>
            {pairRequests.map((request, index) => (
              <div key={index} className='bg-[#2d2d2d] p-4 rounded-lg'>
                <div className='flex justify-between items-center mb-2'>
                  <span className='text-white font-semibold'>
                    {request.name}
                  </span>
                  <span className='text-gray-400'>{request.location}</span>
                </div>
                <div className='text-gray-400 mb-2'>
                  Streetcred: {request.streetcred}
                </div>
                <div className='text-white mb-2'>Repo: Unlink</div>
                <div className='text-white mb-2'>Task: {request.task}</div>
                <div className='flex flex-wrap gap-2 mb-2'>
                  {request.interests.map((interest, i) => (
                    <span
                      key={i}
                      className='bg-gray-700 text-white px-2 py-1 rounded-full text-sm'
                    >
                      {interest}
                    </span>
                  ))}
                </div>
                <button className='bg-blue-600 text-white px-4 py-2 rounded-lg w-full mt-2'>
                  Accept request
                </button>
              </div>
            ))}
          </div>
        </div>
        {/* Top contributors */}
        <div className='bg-[#1e1e1e] p-6 rounded-lg'>
          <h2 className='text-xl font-semibold mb-4 text-white'>
            Top contributors
          </h2>
          <div className='flex space-x-4 overflow-x-auto'>
            {topContributors.map((contributor, index) => (
              <div key={index} className='flex-shrink-0 w-32'>
                <div className='bg-gray-700 w-32 h-32 rounded-lg mb-2'></div>
                <p className='text-white text-sm truncate'>
                  {contributor.name}
                </p>
                <p className='text-green-400 text-sm'>
                  Gained: {contributor.gain}
                </p>
              </div>
            ))}
          </div>
        </div>
        {/* Jobs */}
        <div className='bg-[#1e1e1e] p-6 rounded-lg'>
          <h2 className='text-xl font-semibold mb-4 text-white'>Jobs</h2>
          <div className='space-y-4'>
            {jobs.map((job, index) => (
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
                  Explore with Copilot
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className='space-y-6'>
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
            View all activities <ArrowRight2 size='20' className='ml-2' />
          </button>
        </div>
        {/* Suggested Connection */}
        <div className='bg-[#1e1e1e] p-6 rounded-lg'>
          <h2 className='text-xl font-semibold mb-4 text-white'>
            Suggested Connection
          </h2>
          <div className='flex items-center mb-4'>
            <div className='bg-gray-700 w-12 h-12 rounded-full mr-4'></div>
            <div>
              <p className='text-white font-semibold'>Ashish Reddy Guvvala</p>
              <p className='text-gray-400 text-sm'>
                Enthusiastic B.Tech student in the 3rd year, poised to embark on
                a promising...
              </p>
            </div>
          </div>
          <button className='bg-blue-600 text-white px-4 py-2 rounded-lg w-full'>
            Connect
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
