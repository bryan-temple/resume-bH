import React from 'react';

export const FrontPage = () => {
  return (
    <header>
      <h2 className="text-5xl font-thin m-3 items-center">
        Generate professional Resume and{' '}
        <span className="font-black">get Hired</span>
      </h2>
      <div className="flex items-center flex-col justify-center py-4 px-4 mt-8">
        <button className="bg-[#213559] rounded-md p-3 mb-2 text-white ">
          Get Started
        </button>
        <button className="border-2 border-cyan-900 rounded text-[#213559] px-6 py-2">
          Resume
        </button>
      </div>
      
    </header>
  );
};
