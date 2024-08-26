// src/layouts/AuthLayout.jsx
import React from 'react';

const AuthLayout = ({ children, stage, lightColor, infoText }) => {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 relative hidden md:flex overflow-hidden">
        <div 
          className="absolute inset-0" 
          style={{
            background: `radial-gradient(circle at top left, ${lightColor}, transparent 70%)`,
          }}
        ></div>
        <img src="/tuliban-logo.png" alt="Tuliban" className="absolute top-10 left-10 h-12" />
        <div className="absolute bottom-10 left-10 right-10 bg-black bg-opacity-20 backdrop-blur-md rounded-lg p-4">
          <p className="text-white">{infoText}</p>
        </div>
      </div>
      <div className="w-full md:w-1/2 bg-[#111111] p-10 flex flex-col justify-between items-center">
        <div className="w-full max-w-md">
          <div className="h-1 bg-gray-700 rounded-full mb-8">
            <div 
              className="h-full bg-[#fdca3a] rounded-full transition-all duration-300 ease-in-out" 
              style={{ width: `${stage * 20}%` }}
            ></div>
          </div>
          {children}
        </div>
        <button className="text-gray-400 hover:text-white mt-6">
          Already have an account? Sign in
        </button>
      </div>
    </div>
  );
};

export default AuthLayout;