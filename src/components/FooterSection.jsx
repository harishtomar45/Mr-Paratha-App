import React from 'react'

const FooterSection = () => {
  return (
    <>
     <section className="relative overflow-hidden py-20">
  <div className="relative z-10 mx-auto max-w-7xl px-4">
    <div className="-m-6 flex flex-wrap">
      <div className="w-full p-6 md:w-1/2 lg:w-5/12">
        <div className="flex h-full flex-col justify-between">
          <div className="mb-4 inline-flex items-center">
         
            <div className="flex items-center">
                <img
                  className="h-12 w-auto"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9tygPQHyQx3Ujc2myQ3T9binLREfHZJ6bl-x3f1RKOw&s"
                  alt="Your Company"
                />
              </div>
            <span className="ml-4 text-lg font-bold">Mr. Paratha</span>
          </div>
          <div>
            <p className="mb-4  text-base font-medium">
              City's Populer Paratha Store
            </p>
            <p className="text-sm text-gray-600">
              © Copyright 2022. All Rights Reserved by Mr. Paratha.
            </p>
          </div>
        </div>
      </div>
      <div className="w-full p-6 md:w-1/2 lg:w-2/12">
        <div className="h-full">
          <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
            Company
          </h3>
          <ul>
            <li className="mb-4">
              <a
                className=" text-base font-medium text-gray-900 hover:text-orange-400"
                href="#"
              >
                Features
              </a>
            </li>
            <li className="mb-4">
              <a
                className=" text-base font-medium text-gray-900 hover:text-orange-400"
                href="#"
              >
                Pricing
              </a>
            </li>
            <li className="mb-4">
              <a
                className=" text-base font-medium text-gray-900 hover:text-orange-400"
                href="#"
              >
                Affiliate Program
              </a>
            </li>
            <li>
              <a
                className=" text-base font-medium text-gray-900 hover:text-orange-400"
                href="#"
              >
                Press Kit
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full p-6 md:w-1/2 lg:w-2/12">
        <div className="h-full">
          <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
            Support
          </h3>
          <ul>
            <li className="mb-4">
              <a
                className=" text-base font-medium text-gray-900 hover:text-orange-400"
                href="#"
              >
                Account
              </a>
            </li>
            <li className="mb-4">
              <a
                className=" text-base font-medium text-gray-900 hover:text-orange-400"
                href="#"
              >
                Help
              </a>
            </li>
            <li className="mb-4">
              <a
                className=" text-base font-medium text-gray-900 hover:text-orange-400"
                href="#"
              >
                Contact Us
              </a>
            </li>
            <li>
              <a
                className=" text-base font-medium text-gray-900 hover:text-orange-400"
                href="#"
              >
                Customer Support
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full p-6 md:w-1/2 lg:w-3/12">
        <div className="h-full">
          <h3 className="tracking-px mb-9  text-xs font-semibold uppercase text-gray-500">
            Legals
          </h3>
          <ul>
            <li className="mb-4">
              <a
                className=" text-base font-medium text-gray-900 hover:text-orange-400"
                href="#"
              >
                Terms &amp; Conditions
              </a>
            </li>
            <li className="mb-4">
              <a
                className=" text-base font-medium text-gray-900 hover:text-orange-400"
                href="#"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                className=" text-base font-medium text-gray-900 hover:text-orange-400"
                href="#"
              >
                Licensing
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>
   
    </>
  )
}

export default FooterSection