import React from 'react'
import { useContext, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/user.context";


const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const admin = true;
  const buyer = false;
  const seller = false;

  // We are consuming our user-management context to
  // get & set the user details here
  const { user, fetchUser, emailPasswordLogin } = useContext(UserContext);

  // We are using React's "useState" hook to keep track
  //  of the form values.
  const [form, setForm] = useState({
    email: "",
    password: ""
  });


  const onFormInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const redirectNow = () => {
    const redirectTo = location.search.replace("?redirectTo=", "");
    navigate(redirectTo ? redirectTo : "/");
  }

  // Once a user logs in to our app, we don’t want to ask them for their
  // credentials again every time the user refreshes or revisits our app, 
  // so we are checking if the user is already logged in and
  // if so we are redirecting the user to the home page.
  // Otherwise we will do nothing and let the user to login.

  const loadUser = async () => {
    if (!user) {
      const fetchedUser = await fetchUser();
      if (fetchedUser) {
        // Redirecting them once fetched.
        redirectNow();
      }
    }
  }

  useEffect(() => {
    loadUser(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  // This function gets fired when the user clicks on the "Login" button.
  const onSubmit = async (event) => {
    try {
      // Here we are passing user details to our emailPasswordLogin
      // function that we imported from our realm/authentication.js
      // to validate the user credentials and log in the user into our App.
      const user = await emailPasswordLogin(form.email, form.password);
      if (user) {
        redirectNow();
      }
    } catch (error) {
      if (error.statusCode === 401) {
        alert("Invalid username/password. Try again!");
      } else {
        alert(error);
      }

    }
  };


  return (
    <div>
      {admin &&
        <div className='w-full'>
          <div className='flex flex-col md:justify-end md:flex-row'>
            <div className='w-1/2 mt-[5rem] p-1 '>
              <center >

                <div className="text-black text-[40px] font-semibold font-['Inter']">Signup/Login as Admin</div>
                <div className='space-between space-y-5 m-2 p-4 flex flex-col'>
                  <input label="Email"
                    type="email"
                    variant="outlined"
                    name="email"
                    value={form.email}
                    onInput={onFormInputChange}
                    className="w-auto h-full bg-zinc-300 rounded-[50px] border-2 border-black"
                    style={{ marginBottom: "1rem" }} />
                  <input label="Password"
                    type="password"
                    variant="outlined"
                    name="password"
                    value={form.password}
                    onInput={onFormInputChange}
                    className="w-auto h-full bg-zinc-300 rounded-[50px] border-2 border-black"
                    style={{ marginBottom: "1rem" }} />
                  <a href=""><div className="text-black text-sm ml-7 font-medium font-['Inter']">Forgot Password?</div></a>
                </div>

                <button className="w-1/3 h-full bg-yellow-400 rounded-[50px] border-2 border-black"
                  onClick={onSubmit}>
                  Login
                </button>
                <a href=""><div className="text-black text-sm ml-7 font-medium font-['Inter']"> <p>Don't have an account? <Link to="/signup">Signup</Link></p></div></a>

              </center>


            </div>
            <div className=''>
              <img className=" h-screen" src="/res/seller.svg" />
            </div>

          </div>

        </div>
      }

      {
        buyer &&
        <div className='w-full'>
          <div className='flex flex-col md:justify-end md:flex-row'>
            <div className='w-1/2 mt-[5rem] p-1 '>
              <center >

                <div className="text-black text-[40px] font-semibold font-['Inter']">Signup/Login as Admin</div>
                <div className='space-between space-y-5 m-2 p-4 flex flex-col'>
                  <input type="text" className="w-auto h-full bg-zinc-300 rounded-[50px] border-2 border-black" />
                  <input type="text" className="w-auto h-full bg-zinc-300 rounded-[50px] border-2 border-black" />
                  <a href=""><div className="text-black text-sm ml-7 font-medium font-['Inter']">Forgot Password?</div></a>
                </div>

                <button className="w-1/3 h-full bg-yellow-400 rounded-[50px] border-2 border-black">
                  Login
                </button>

              </center>


            </div>
            <div className=''>
              <img className=" h-screen" src="/res/seller.svg" />
            </div>

          </div>

        </div>
      }



      {seller &&
        <div className='w-full'>
          <div className='flex flex-col md:justify-end md:flex-row'>
            <div className='w-1/2 mt-[5rem] p-1 '>
              <center >

                <div className="text-black text-[40px] font-semibold font-['Inter']">Signup/Login as Admin</div>
                <div className='space-between space-y-5 m-2 p-4 flex flex-col'>
                  <input type="text" className="w-auto h-full bg-zinc-300 rounded-[50px] border-2 border-black" />
                  <input type="text" className="w-auto h-full bg-zinc-300 rounded-[50px] border-2 border-black" />
                  <a href=""><div className="text-black text-sm ml-7 font-medium font-['Inter']">Forgot Password?</div></a>
                </div>

                <button className="w-1/3 h-full bg-yellow-400 rounded-[50px] border-2 border-black">
                  Login
                </button>

              </center>


            </div>
            <div className=''>
              <img className=" h-screen" src="/res/seller.svg" />
            </div>

          </div>

        </div>
      }

    </div>
  )
}

export default LoginPage