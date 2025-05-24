import React from 'react';
import Card from './Card';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import SliderC from './SliderC';

const Hero = ({ data }) => {
  // Assuming data contains information about cards
  // For now, let's create some dummy data
  const dummyData = [
    { id: 1, location: 'House 1', price: '$500,000' },
    { id: 2, location: 'House 2', price: '$600,000' },
    { id: 3, location: 'House 3', price: '$700,000' }
  ];

  return (
    <div>
      <div>
        <div className="w-[1256.59px] h-[132.26px] text-black text-4xl font-bold font-['Wavefont'] ml-[360px] mt-6">
          Welcome to LandSol-.. Your One Place Destination to BUY/SELL/RENT properties
          <br /> with seamless and safe blockchain-based transactions
        </div>
      </div>

      <br />

      <div>
        <div className="w-[390.23px] h-[42.21px] text-black text-4xl font-normal font-['Inika']">FOR SALE!!</div>
      </div>

      <SliderC />
      <div className='ml-[1600px]'>
        <a href="" className="w-[223.75px]   h-[37px] text-black text-4xl font-normal font-['Inika'] ">view more ...</a>
      </div>


      <div>
        <div className="w-[390.23px] h-[42.21px] text-black text-4xl font-normal font-['Inika']">FOR RENT!!</div>
      </div>
      <SliderC />
      <a href="" className="w-[223.75px]   h-[37px] text-black text-4xl font-normal font-['Inika'] ">view more ...</a>
    </div>
  );
};

export default Hero;
