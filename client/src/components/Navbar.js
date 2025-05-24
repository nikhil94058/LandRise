import React from 'react'
import { Login } from './Login'
import { useAuth0 } from "@auth0/auth0-react";
import Logout from './Logout';
import Navigation from './Navigation';
const Navbar = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  return (

    <div className="w-full h-[80px] relative bg-[#FFE91E] flex ">
      <div className='w-[191px] h-[50px] text-black text-[32px] font-normal  leading-10 ml-[271px] mt-5'>
        LandSol
      </div>
      <nav className='w-[416px] h-10 justify-start items-center gap-10 inline-flex ml-[300px] mt-3'>

        <a href="" className="text-center  text-slate-800 text-base font-bold font-['Times New Roman']  leading-10 hover:text-amber-500">Buy</a>
        <a href="" className="text-center text-slate-800 text-base font-bold font-['Times New Roman'] leading-10 hover:text-amber-500">Sell</a>
        <a href="" className="text-center text-slate-800 text-base font-bold font-['Times New Roman'] leading-10 hover:text-amber-500">Transaction</a>
        <a href="" className="text-center text-slate-800 text-base font-bold font-['Times New Roman'] leading-10 hover:text-amber-500">Your Properties</a>
      </nav>


      {!isAuthenticated ?
        <Login /> : <Logout />}


    </div>

  )
}

export default Navbar