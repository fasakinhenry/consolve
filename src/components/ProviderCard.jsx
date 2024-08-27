import React from 'react';

const ProviderCard = ({ provider }) => {
  return (
    <div className='w-48 h-64 bg-[#1A1A1A] p-4 rounded-lg shadow-md'>
      <img
        src={provider.image}
        alt={provider.name}
        className='w-full h-32 object-cover rounded-md'
      />
      <h3 className='mt-4 text-lg font-semibold'>{provider.name}</h3>
      <p className='text-sm text-gray-400'>{provider.description}</p>
    </div>
  );
};

export default ProviderCard;
