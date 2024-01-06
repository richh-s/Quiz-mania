import React from 'react';
import Link from 'next/link';
export default function ResultsPage() {
    const buttonStyle = {
        background: 'linear-gradient(180deg, #FC830E 0%, #D24E02 100%)',
        boxShadow: '0px 1px 0px 3px #521B03',
        border: '1px solid #FFC10A',
      };
    const textStyle={
        background: 'linear-gradient(180deg, #FC830E 17.55%, #D24E02 89.36%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
    }
  return (
    <div
      className="flex flex-col items-center justify-center h-screen p-4"
      style={{
        backgroundImage: "url('/assets/pattern.png'), radial-gradient(94.31% 50% at 50% 50%, #007359 0%, #006C54 35.94%, #024B3B 100%)",
        backgroundSize: 'cover',
      }}
    >
      {/* Logo and Score */}
      <img src="/assets/logo.png" alt="Quiz Mania" className="mb-6" />
      <div className="text-center mb-6">
        <p className="text-xl font-bold text-white mb-1">Total Point</p>
        <p
          className="text-4xl font-bold mb-4"
          style={{
            background: 'linear-gradient(180deg, #FC830E 17.55%, #D24E02 89.36%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          800pt
        </p>
        <p className="text-white mb-1">Well Done!</p>
        <p className="text-white">You've answered <span className='text-[#FDA728]'>8/10</span></p>
      </div>

      {/* Time and Bonus Section */}
      <div className="flex justify-between items-center w-full max-w-xs mb-4">
        <span className="text-[#FDA728] font-bold" style={{ fontSize: '1.25rem' }}>05:00</span>
        <span className=" text-white font-bold" style={{ fontSize: '1.25rem' }}>Time Bonus <span className='text-[#FDA728]'>+100</span></span>
      </div>
      <div className="flex justify-between items-center w-full max-w-xs mb-8">
        <span className="text-[#FDA728] font-bold" style={{ fontSize: '1.25rem' }}>4x</span>
        <span className="text-white font-bold" style={{ fontSize: '1.25rem' }}>Streak Bonus <span className='text-[#FDA728]'>+100</span></span>
      </div>

       {/* Total Score */}
       <div className="text-center mb-6">
        <p className="text-xl font-bold text-white">Your total score is:</p>
        <p className="text-5xl font-bold text-white"
         style={textStyle}>
            500
        </p>
      </div>

      {/* Replay Button */}
     
        <Link href="/game" passHref className='w-full text-center'>
          <div style={{...buttonStyle, width:'100%'}} className="py-2 px-4 rounded-lg shadow-md text-white font-bold w-full mb-4">
             Replay
          </div>
       </Link>
      {/* Icons below the Replay button */}
      <div className="flex justify-center space-x-8 mt-12">
          <div style={buttonStyle} className="p-2">
            <img src="/assets/volume.png" alt="Sound" width={24} height={24} />
          </div>
          <Link href="/winner" passHref>
          <div style={buttonStyle} className="p-2">
            <img src="/assets/trophy.png" alt="Trophy" width={24} height={24} />
          </div>
          </Link>
        
          <Link href="/" passHref>
          <div style={buttonStyle} className="p-2">
            <img src="/assets/home.png" alt="home" width={24} height={24} />
          </div>
          </Link>
     </div>
    </div>
  );
}
