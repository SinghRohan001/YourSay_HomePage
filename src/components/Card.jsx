import React from 'react';
import currenct from '../assets/currency.webp.svg';
import sbg from '../assets/SGBs.webp.svg';
import fno from '../assets/F&O.webp.svg';

const Card = () => {
  return (
    <div className='w-full flex flex-col justify-center'>
      {/* Container for the cards with horizontal scroll enabled */}
      <div className='w-full flex overflow-x-scroll'>
        {/* First card */}
        <div className='w-full sm:w-1/2 lg:w-1/4 md:min-w-[33.33%] lg:min-w-[25%] min-w-[50%] border rounded-md shadow-lg p-4 lg:py-6 md:py-6 py-2 ml-4'>
          <div className='mb-4'>
            <img className='w-25' src={currenct} alt="" />
          </div>
          <div>
            <p className='lg:text-2xl md:text-2xl text-lg font-bold mb-2'>Your Price</p>
            <p className='lg:text-xl md:text-xl text-md font-[500]'>Control Your Investment</p>
            <p className='lg:text-sm md:text-sm text-xs font-[200] lg:mb-4 md:mb-4 mb-2'>
              Set the price at which you enter trades, giving you complete control over your actions and decisions.
            </p>
          </div>
        </div>

        <div className='w-full sm:w-1/2 lg:w-1/4 md:min-w-[33.33%] lg:min-w-[25%] min-w-[50%] border rounded-md shadow-lg p-4 lg:py-6 md:py-6 py-2 ml-4'>
          <div className='mb-4'>
            <img className='w-25' src={sbg} alt="" />
          </div>
          <div>
            <p className='lg:text-2xl md:text-2xl text-lg font-bold mb-2'>Your Interest</p>
            <p className='lg:text-xl md:text-xl text-md font-[500]'>Engage with What Matters</p>
            <p className='lg:text-sm md:text-sm text-xs font-[200] lg:mb-4 md:mb-4 mb-2'>
              From trending topics to niche interests, engage with the events and areas that you care about the most.
            </p>
          </div>
        </div>

        {/* Repeat other cards */}
        <div className='w-full sm:w-1/2 lg:w-1/4 md:min-w-[33.33%] lg:min-w-[25%] min-w-[50%] border rounded-md shadow-lg p-4 lg:py-6 md:py-6 py-2 ml-4'>
          <div className='lg:mb-4 md:mb-4 mb-2'>
            <img className='w-25' src={fno} alt="" />
          </div>
          <div>
            <p className='lg:text-2xl md:text-2xl text-lg font-bold mb-2'>Your Price</p>
            <p className='lg:text-xl md:text-xl text-md font-[500]'>Control Your Investment</p>
            <p className='lg:text-sm md:text-sm text-xs font-[200] lg:mb-4 md:mb-4 mb-2'>
              Set the price at which you enter trades, giving you complete control over your actions and decisions.
            </p>
          </div>
        </div>

        {/* Add more cards as needed */}
        <div className='w-full sm:w-1/2 lg:w-1/4 md:min-w-[33.33%] lg:min-w-[25%] min-w-[50%] border rounded-md shadow-lg p-4 lg:py-6 md:py-6 py-2 ml-4'>
          <div className='mb-4'>
            <img className='w-25' src={currenct} alt="" />
          </div>
          <div>
            <p className='lg:text-2xl md:text-2xl text-lg font-bold mb-2'>Your Price</p>
            <p className='lg:text-xl md:text-xl text-md font-[500]'>Control Your Investment</p>
            <p className='lg:text-sm md:text-sm text-xs font-[200] lg:mb-4 md:mb-4 mb-2'>
              Set the price at which you enter trades, giving you complete control over your actions and decisions.
            </p>
          </div>
        </div>

        <div className='w-full sm:w-1/2 lg:w-1/4 md:min-w-[33.33%] lg:min-w-[25%] min-w-[50%] border rounded-md shadow-lg p-4 lg:py-6 md:py-6 py-2 ml-4'>
          <div className='mb-4'>
            <img className='w-25' src={currenct} alt="" />
          </div>
          <div>
            <p className='lg:text-2xl md:text-2xl text-lg font-bold mb-2'>Your Price</p>
            <p className='lg:text-xl md:text-xl text-md font-[500]'>Control Your Investment</p>
            <p className='lg:text-sm md:text-sm text-xs font-[200] lg:mb-4 md:mb-4 mb-2'>
              Set the price at which you enter trades, giving you complete control over your actions and decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
