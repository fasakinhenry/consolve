import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MainLayout = ({ children }) => {
  return (
    <div className='bg-black text-white font-sans'>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
