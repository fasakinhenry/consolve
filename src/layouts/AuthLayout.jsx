import React from 'react';

const AuthLayout = ({ children }) => {
  return (
    <div className="flex h-screen">
      {/* Left Column with Light Bar and Image */}
      <div className="w-1/2 relative flex justify-center items-center bg-black">
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-yellow-400 to-transparent opacity-80 animate-pulse"></div>
        <div className="relative z-20">
          {/* Replace this with your image path */}
          <img src="/path/to/your/image.png" alt="Logo" className="mx-auto" />
        </div>
      </div>
      {/* Right Column with Form */}
      <div className="w-1/2 flex justify-center items-center bg-gray-900 text-white">
        <div className="w-3/4">{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
