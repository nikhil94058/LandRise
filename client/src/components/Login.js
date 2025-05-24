import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {
  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();
  const notify = () => toast("You are Redirected to Some external website !");
  return (
    <div>
      {!isAuthenticated ? (
        <div>

          <div className="w-[150pxpx] h-10 px-6 bg-amber-500 justify-start items-center gap-4 inline-flex ml-[700px] mt-5 hover:bg-amber-700">
            <button className="text-right text-white text-base font-bold font-['Times New Roman'] " onClick={() => loginWithRedirect()}>Log In</button>
            <div className="w-6 h-6 relative">
              <img className="w-[17.99px] h-[14.40px] left-[3.01px] top-[4.80px] absolute" src="https://via.placeholder.com/18x14" />
            </div>
          </div>

        </div>) :
        (
          <div>Footor</div>
        )}

      <ToastContainer />


    </div>
  )
}
