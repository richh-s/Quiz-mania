
'use client';
// CountdownPage.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCountdown } from '../redux/actions';
import Link from 'next/link';
import { motion } from 'framer-motion';

const CountdownPage = () => {
  const dispatch = useDispatch();
  const countdown = useSelector((state) => state.countdown.countdown);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      if (countdown > 1) {
        dispatch(setCountdown(countdown - 1));
      } else {
        clearInterval(countdownInterval);
 
        window.location.href = '/game';
      }
    }, 1000);

    return () => clearInterval(countdownInterval);
  }, [countdown, dispatch]);

  const cancelButtonStyle = {
    background: 'linear-gradient(180deg, #FC830E 0%, #D24E02 100%)',
    boxShadow: '0px 1px 0px 3px #521B03',
    border: '1px solid #FFC10A',
  };

  return (
    <div
      style={{
        background:
          'radial-gradient(94.31% 50% at 50% 50%, #007359 0%, #006C54 35.94%, #024B3B 100%)',
        height: '100vh',
      }}
      className="relative flex flex-col items-center justify-center p-4"
    >
      {/* Overlay pattern */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/assets/pattern.png')] bg-cover"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {/* Quiz Mania Logo */}
        <div className="mb-4">
          <img
            src="/assets/logo.png"
            alt="Quiz Mania Logo"
            width={200}
            height={100}
          />
        </div>

        <p className="text-white text-2xl mb-4 mt-16">Your game will start in...</p>

        {/* Countdown Number */}
        <div className="mb-4">
          <motion.img
            src={`/assets/${countdown}.png`}
            alt={`Number ${countdown}`}
            width={120}
            height={120}
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* Spacer */}
        <div className="mb-auto"></div>

        {/* Cancel Button */}
        <Link href="/game" passHref className='w-full text-center'>
          <div style={{ ...cancelButtonStyle, width: '100%' }} className="text-white px-6 py-2 rounded-md mt-12">
            Cancel
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

export default CountdownPage;
