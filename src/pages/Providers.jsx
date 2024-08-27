// src/pages/Providers.jsx
import React from 'react';
import ProviderCard from '../components/ProviderCard';
import AITag from '../components/AITag';
import { providersData, aiSuggestions } from '../mockData/providersData';

const Providers = () => {
  return (
    <div className='flex flex-col h-full p-6 space-y-6'>
      <div className='flex flex-col items-center'>
        <h1 className='text-4xl font-bold mb-4'>Find and be found.</h1>
        <p className='text-sm text-gray-400'>
          Scroll to explore providers and AI suggestions
        </p>
      </div>
      <div className='relative flex overflow-hidden'>
        <div className='flex space-x-4 animate-slide-left'>
          {providersData.map((provider, index) => (
            <ProviderCard key={index} provider={provider} />
          ))}
        </div>
        <div className='flex space-x-2 absolute bottom-0 animate-slide-right'>
          {aiSuggestions.map((suggestion, index) => (
            <AITag key={index} suggestion={suggestion} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Providers;
