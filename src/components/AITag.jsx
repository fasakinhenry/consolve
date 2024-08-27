// src/components/AITag.jsx
import React from 'react';

const AITag = ({ suggestion }) => {
  return (
    <div className='bg-[#2B2B2B] text-sm text-white py-1 px-3 rounded-full shadow-md'>
      {suggestion}
    </div>
  );
};

export default AITag;
