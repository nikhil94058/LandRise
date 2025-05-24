import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/sidebar';

const LoginPage = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <div className='flex ml-[400px] mt-[200px]'>

        <div className="flex flex-col items-center">

          <div className='flex flex-col items-center mt-8'>
            <div className="text-black text-[40px] font-semibold font-['Inter'] mb-4">Signup/Login as Admin</div>
            <input type="text" className="w-[562px] h-[86px] bg-zinc-300 rounded-[50px] border-2 border-black mb-4" placeholder="Username" />
            <input type="password" className="w-[562px] h-[86px] bg-zinc-300 rounded-[50px] border-2 border-black mb-4" placeholder="Password" />
            <div className="text-black text-2xl font-medium font-['Inter'] mb-8">Forgot Password?</div>
            <button className="w-[200px] h-[60px] bg-black text-white font-semibold rounded-[30px]">Login</button>
          </div>


        </div>

      </div>
    </>
  );
};

export default LoginPage;
