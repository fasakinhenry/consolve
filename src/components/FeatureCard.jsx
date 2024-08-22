import React from 'react';

const FeatureCard = ({ title, description, linkText, image }) => {
  return (
    <div className='bg-[#1a1a1a] rounded-lg overflow-hidden'>
      <img src={image} alt={title} className='w-full h-48 object-cover' />
      <div className='p-6'>
        <h3 className='text-2xl font-semibold mb-4'>{title}</h3>
        <p className='mb-4 text-gray-300'>{description}</p>
        <a href='#' className='text-[#fdca3a] hover:underline'>
          {linkText} →
        </a>
      </div>
    </div>
  );
};

export default FeatureCard;
