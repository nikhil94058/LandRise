import React from 'react';
import { Review } from './Review';
import Commetslider from './Commetslider';
import Footer from '../components/Footer';

const Comments = () => {
  return (
    <div>
      <div className='w-[1449px] h-[1058px] relative bg-gradient-to-b from-lime-200 to-lime-200 mt-[200px]'>
        <div className="w-[563.42px] text-slate-900 text-4xl font-extrabold font-['Inter'] leading-[45px] ">Reviews About This Property</div>
        <center>
          <Review />
          <Commetslider />
        </center>
        <button className='mt-[200px]'>
          <div className="w-[833px] h-36 bg-gradient-to-r from-lime-300 to-lime-100 rounded-[30px] border border-black" >

            <div className="w-[757px] h-[98px] text-center text-black text-[40px] font-bold font-['Times New Roman']">Perform Sentiment Analysis For This Property</div>
          </div>
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Comments;
