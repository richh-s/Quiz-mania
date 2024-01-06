'use client'
import React from 'react';
import Link from 'next/link';
export default function StartPage() {

 
  const buttonStyle = {
    background: 'linear-gradient(180deg, #FC830E 0%, #D24E02 100%)',
    boxShadow: '0px 1px 0px 3px #521B03',
    border: '1px solid #FFC10A',
    borderRadius: '15px', 
  };

  const categoryButtonStyle = {
    background: 'rgba(255, 255, 255, 0.12)',
    borderColor: '#219078',
    borderWidth: '1px',
    borderRadius: '15px', 
  };
  const gradientStyle = {
    background: 'linear-gradient(180deg, #FC830E 0%, #D24E02 100%)',
    WebkitBackgroundClip: 'text', 
    WebkitTextFillColor: 'transparent', 
    display: 'inline-block', 
  };
  


  return (
    <div
      style={{
        background: 'radial-gradient(94.31% 50% at 50% 50%, #007359 0%, #006C54 35.94%, #024B3B 100%)',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
      className="p-4 text-center"
    >
      {/* Overlay pattern */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/pattern.png')] bg-cover"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Quiz Title Image */}
        <div className="mb-16 mt-12 mx-auto">
          <img src="/assets/logo.png" alt="Quiz Mania" width={200} height={100} className="mx-auto" />
        </div>

        {/* Points Display */}
        <div className="text-white text-xl mb-2">Total Point</div>
        <div style={gradientStyle} className="text-4xl font-bold mb-4">
          800pt
        </div>

        {/* Play Random Button */}
        <Link href="/counter" passHref>
        <div style={{ ...buttonStyle, width: '100%' }} className="text-white px-6 py-3 rounded-md mb-2">
          Play Random
        </div>
       
      </Link>
       
   
        {/* Icon Buttons */}
      
<div className="flex justify-center space-x-16 mt-6">
  <div style={{ ...buttonStyle, borderRadius: '5px' }} className="p-2">
    <img src="/assets/volume.png" alt="Sound" width={24} height={24} />
  </div>
  <div style={{ ...buttonStyle, borderRadius: '5px' }} className="p-2">
    <img src="/assets/trophy.png" alt="Trophy" width={24} height={24} />
  </div>
</div>

      </div>

      {/* Category Buttons and Text */}
      <div className="w-full px-4 mb-2">
        {/* Select Categories Text */}
        <div className="text-white text-lg mb-2">Or select categories to play</div>

        <button style={categoryButtonStyle} className="text-white py-2 rounded-md w-full mb-1">
          Geography
        </button>
        <button style={categoryButtonStyle} className="text-white py-2 rounded-md w-full mb-1">
          History
        </button>
        <button style={categoryButtonStyle} className="text-white py-2 rounded-md w-full">
          Science
        </button>
      </div>
    </div>
  );
}
