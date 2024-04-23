import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector} from "react-redux"
import {  registerUser } from "../featurs/auth/authSlice";
import { useNavigate } from "react-router-dom"
import { ThreeDots } from "react-loader-spinner";

const Register = () => {

 
  const {user, isLoading, isError, isSuccess , message} = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name : "",
    email : "",
    password : "",
    password2 : "",
  })

  const {name, email, password , password2} = formData;

  const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name] : e.target.value,
    })
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser(formData));
  }


  useEffect(()=>{
    if(user){
      navigate("/")
    }
  },[user])
  
  if(isLoading){
    return(
      <div className='flex justify-center'><ThreeDots
     visible={true}
     height="80"
     width="80"
     color="#4fa94d"
     radius="9"
     ariaLabel="three-dots-loading"
     wrapperStyle={{}}
     wrapperClass=""
     /> </div>
    )
  }


  return (
    <>
      <section>
        <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
          <div className="w-80 xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
            <div className="mb-2 flex justify-center">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="h-12 w-auto"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9tygPQHyQx3Ujc2myQ3T9binLREfHZJ6bl-x3f1RKOw&s"
                  alt="Your Company"
                />
              </div>
            </div>
            <h2 className="text-center text-2xl font-bold leading-tight text-black">
              Sign up to create account
            </h2>
            <p className="mt-2 text-center text-base text-gray-600">
              Already have an account?{" "}
              <Link to={"/login"}>
                <span
                  title=""
                  className="font-medium text-black transition-all duration-200 hover:underline">
                  Log In
                </span>
              </Link>
            </p>
            <form action="#" method="POST" className="mt-8" onSubmit={handleSubmit}>
              <div className="space-y-5">
                <div>
                  <label
                 
                    
                    className="text-base font-medium text-gray-900">
                    {" "}
                    Full Name{" "}
                  </label>
                  <div className="mt-2">
                    <input
                     onChange={handleChange}
                     value={name}
                     name= "name"
                     required
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="text"
                      placeholder="Full Name"
                      id="name"
                    />
                  </div>
                </div>
                <div>
                  <label
                    className="text-base font-medium text-gray-900">
                    {" "}
                    Email address{" "}
                  </label>
                  <div className="mt-2">
                    <input
                     onChange={handleChange}
                     value={email}
                     name="email"
                     required
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="email"
                      placeholder="Email"
                      id="email"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <label
                
                      className="text-base font-medium text-gray-900">
                      {" "}
                      Password{" "}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                         onChange={handleChange}
                         value={password}
                         name= "password"
                         required
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Password"
                      id="password"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      className="text-base font-medium text-gray-900">
                      {" "}
                      Confirm Password{" "}
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                     onChange={handleChange}
                     value={password2}
                     name= "password2"
                     required
                      className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                      type="password"
                      placeholder="Confirm Password"
                      id="password"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80">
                    Create Account{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="ml-2">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </div>
              </div>
            </form>
            <div className="mt-3 space-y-3">
   
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
