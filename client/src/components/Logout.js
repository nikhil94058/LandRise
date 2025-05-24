import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
const Logout = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const { logout } = useAuth0();
  return (
    <div>
      {
        isAuthenticated && (
          <div className='ml-[700px] mt-5 '>

            <img className="w-10 h-10 rounded-full" src={user.picture} alt="Rounded avatar" />

            <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>Logout</button>
          </div>
        )
      }
    </div>

  )
}

export default Logout