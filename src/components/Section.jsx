import React from 'react';

const Section = ({ title, description, children, centered }) => {
  return (
    <section className={`py-16 px-6 ${centered ? 'text-center' : ''}`}>
      <div className='max-w-6xl mx-auto'>
        {title && <h2 className='text-3xl font-semibold mb-4'>{title}</h2>}
        {description && <p className='text-xl mb-8'>{description}</p>}
        {children}
      </div>
    </section>
  );
};

export default Section;
