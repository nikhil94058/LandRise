import React from 'react'
import Comments from '../Sections/Comments'

const PropertyPage = () => {
  return (
    <div>
      <div className="w-[870px] h-[63.09px] m-[100px] text-black text-4xl font-normal font-['Times New Roman']">10 Hectares Land Available For Sale in Patna</div>
      <div className='flex ml-[300px] space-x-[200px]'>
        <img className="w-[461px] h-[381.52px]" src="https://via.placeholder.com/461x382" />
        <div className="w-[551px] h-48 bg-lime-200 rounded-[25px]" >
          <div className="w-[505px] h-[147px] m-[10px]"><span className="text-black text-[32px] font-normal font-['Inter']">ESTIMATED COST : </span><span className="text-black text-[32px] font-bold font-['Inter']">Rs. 30 lakh<br />LOCATION: Near Bhagalpur, Patna, Bihar</span></div>
        </div>

      </div>
      <Comments />
    </div>
  )
}

export default PropertyPage