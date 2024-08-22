import React from 'react';

const Section = ({ title, children, dark }) => {
  return (
    <section
      className={`${
        dark ? 'bg-gray-800 text-white' : 'text-black'
      } py-16 px-6 text-center`}
    >
      <h2 className='text-3xl font-semibold mb-4'>{title}</h2>
      <div className='max-w-6xl mx-auto'>{children}</div>
    </section>
  );
};

export default Section;
