import React from 'react';
import { LuChefHat } from "react-icons/lu"; // Import the desired React Icon component
import { MdDirectionsBike } from "react-icons/md"; // Example for another icon
import { GiWaterBottle } from "react-icons/gi"; // Example for another icon
import { FaWifi } from "react-icons/fa"; // Example for another icon
import dots from '../Assets/icons/dots.png';

export default function Coldesign({ icon, name, des }) {
  // Map icon name to React Icon component
  const iconMap = {
    'Professional': (
      <LuChefHat
        size={50}
        className='w-10 sm:w-12 animate-bounce' // Example animation: bouncing effect
      />
    ),
    'Free Delivery': (
      <MdDirectionsBike
        size={50}
        fill='#412124'
        className='w-10 sm:w-12 animate-bike' // Custom animation for bike icon
        style={{ animationName: 'bike-animation', animationTimingFunction: 'ease-in-out', animationDuration: '1s', animationIterationCount: 'infinite' }}
      />
    ),
    'Bottles': (
      <GiWaterBottle
        size={50}
        fill='orange'
        className='w-10 sm:w-12 animate-bounce' // Example animation: bouncing effect
      />
    ),
    'Free Wifi': (
      <FaWifi
        size={50}
        fill='green'
        className='w-8 sm:w-12 animate-ping' // Example animation: pulsing effect
      />
    )
  };

  return (
    <div className='flex group flex-col items-center gap-3.5  '>
      {iconMap[name] /* Render the corresponding React Icon component based on the name */}
      <div>
        <h1 className='sm:font-bold text-s sm:text-2xl text-[#015228]  '>{name}</h1>
        <img src={dots} className='w-5 object-fit mx-auto animate-bike' alt="" 
                style={{ animationName: 'bike-animation', animationTimingFunction: 'ease-in-out', animationDuration: '3s', animationIterationCount: 'infinite', }}
        />
      </div>
      <p className=' text-gray-600/70 hidden sm:block text-center '>{des}</p>
      {/* Inline styles for animation */}
      <style>
        {`
          @keyframes bike-animation {
            0% { transform: translateX(-10px); opacity:0;}
            50% { transform: translateX(10px); }
            100% { transform: translateX(-15px); }
          }
          .animate-bike {
            animation-name: bike-animation;
            animation-timing-function: ease-in-out;
          }
        `}
      </style>
    </div>
  )
}
