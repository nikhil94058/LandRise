import React from 'react';



const Card = ({ name, location, image, price }) => {

  return (
    <div className="w-[332.93px] h-[492.45px] bg-zinc-300 rounded-[15px] ml-[100px]">
      <div className="w-[167.56px] h-[87.23px] text-black text-xl font-normal font-['Inter']">

        <img src='/assets/Rectangle 18.svg' alt={name} className="w-full" />
        <br /><br />
        <div className="flex flex-col mt-4">
          <div>
            <div>{name}</div>
            <div>{location}</div>
          </div>
          <div className="mt-2">Price: {price}</div>
        </div>
      </div>

    </div>
  );
};

export default Card;
