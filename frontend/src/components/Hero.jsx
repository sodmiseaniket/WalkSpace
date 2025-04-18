import React from 'react';
import { assets } from '../assets/assets';

const Hero = () => {
  return (
    <div className="relative flex flex-col-reverse sm:flex-row items-center bg-none">
      {/* Hero Left Side */}
      <div className="sm:w-1/2 w-full flex items-center justify-center p-6 sm:p-12">
        <div className="text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 mb-4">
            <div className="h-[2px] w-40 bg-gray-800"></div>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Conquer Every Trail
          </h1>
          <div className="flex items-center justify-center sm:justify-start gap-2 mt-4">
            <p className="font-semibold text-gray-700 text-base">Bold Moves Start Here</p>
            <div className="h-[2px] w-40 bg-gray-800"></div>
          </div>
        </div>
      </div>

      {/* Hero Right Side */}
      <div className="sm:w-1/2 w-full">
        <img
          className="w-full h-full object-cover"
          src={assets.hero_img}
          alt="Durable and Comfortable Shoes"
        />
      </div>
    </div>
  );
};

export default Hero;
