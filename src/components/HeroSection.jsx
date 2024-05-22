import React from "react";
import img from "../assets/img.png";

const HeroSection = () => {
  return (
    <>
      <div className="relative w-full bg-white">
        <div className="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
          <div className="flex flex-col justify-center px-4 py-12 md:py-16 lg:col-span-7 lg:gap-x-6 lg:px-6 lg:py-24 xl:col-span-6">
            <h1 className="mt-8 text-3xl font-bold tracking-tight text-black md:text-4xl lg:text-6xl">
              Foodie Restaurant and Enjoy The Food
            </h1>
            <p className="mt-8 text-lg text-gray-700">
              Foodie Restaurant and Enjoy The Food
            </p>
            {/* <form action="" className="mt-8 flex items-start space-x-2">
        <div>
          <input
            className="flex w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="email"
            placeholder="Enter your email"
            id="email"
          />
          <p className="mt-2 text-sm text-gray-500">We care about your privacy</p>
        </div>
        <div>
          <button
            type="button"
            className="rounded-md bg-black px-3 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Subscribe
          </button>
        </div>
      </form> */}
          </div>
          <div className="relative hidden md:block lg:col-span-5 lg:-mr-8 xl:col-span-6">
            <img
              className="absolute top-56 left-40 aspect-[3/2] object-cover lg:aspect-[2/1] lg:h-[250px] xl:aspect-[16/9]"
              src={img}
              alt=""
            />

            {/* <!--?xml version="1.0" standalone="no"?-->  */}

            <svg 
              id="sw-js-blob-svg"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg">
              {" "}
              <defs>
                {" "}
                <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                  {" "}
                  <stop
                    id="stop1"
                    stop-color="rgba(248, 117, 55, 1)"
                    offset="0%"></stop>{" "}
                  <stop
                    id="stop2"
                    stop-color="rgba(251, 168, 31, 1)"
                    offset="100%"></stop>{" "}
                </linearGradient>{" "}
              </defs>{" "}
              <path
                fill="url(#sw-gradient)"
                d="M23.4,-29.2C31.3,-26.5,39.2,-20.9,42.6,-13.2C46,-5.5,44.8,4.3,41.1,12.6C37.4,20.9,31.1,27.5,23.9,33.2C16.6,38.9,8.3,43.5,0.3,43.1C-7.8,42.8,-15.6,37.5,-20.4,31C-25.3,24.6,-27.2,17,-28.2,10.1C-29.3,3.1,-29.3,-3.2,-27.9,-9.5C-26.4,-15.7,-23.4,-21.9,-18.5,-25.6C-13.6,-29.3,-6.8,-30.5,0.5,-31.1C7.8,-31.8,15.5,-31.9,23.4,-29.2Z"
                width="100%"
                height="100%"
                transform="translate(50 50)"
                stroke-width="0"
                // style="transition: all 0.3s ease 0s;"
                >
                  
                  </path>{" "}
                  
            </svg>

            {/* <svg
              id="sw-js-blob-svg"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg">
              {" "}
              <defs>
                {" "}
                <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
                  {" "}
                  <stop
                    id="stop1"
                    stop-color="rgba(248, 117, 55, 1)"
                    offset="0%"></stop>{" "}
                  <stop
                    id="stop2"
                    stop-color="rgba(251, 168, 31, 1)"
                    offset="100%"></stop>{" "}
                </linearGradient>{" "}
              </defs>{" "}
              <path
                fill="url(#sw-gradient)"
                d="M21,-36.9C27,-32.9,31.5,-26.8,34.8,-20.4C38,-13.9,40,-6.9,40.8,0.4C41.6,7.8,41.1,15.7,38,22.4C34.9,29.1,29.1,34.7,22.3,37.4C15.5,40,7.8,39.7,0,39.6C-7.7,39.5,-15.3,39.7,-22.4,37.2C-29.4,34.7,-35.8,29.5,-38.3,22.9C-40.7,16.2,-39.2,8.1,-38.8,0.2C-38.4,-7.6,-39,-15.3,-36.3,-21.4C-33.5,-27.5,-27.4,-32.1,-20.7,-35.8C-14.1,-39.5,-7.1,-42.2,0.2,-42.6C7.5,-42.9,15,-40.9,21,-36.9Z"
                width="100%"
                height="100%"
                transform="translate(50 50)"
                stroke-width="0"
                // style="transition: all 0.3s ease 0s;"
                ></path>{" "}
            </svg> */}

            <img src="" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
