import React from 'react'

const Review = () => {
  return (
    <>
     <section>
  <div className="mx-auto max-w-7xl px-2 lg:px-8">
    <div className="mb-4 max-w-lg">
      {/* <p className="text-sm font-semibold uppercase tracking-widest text-black">
        100+ Tailwind Components
      </p> */}
      <h2 className="mt-6 text-3xl md:text-4xl font-bold leading-tight text-black">
       What are our Customer say about us
      </h2>
    </div>
    <hr />
    <div className="mt-8 grid grid-cols-1 items-center gap-6 md:grid-cols-2 lg:grid-cols-3">
      <div className="flex items-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-9 w-9 text-gray-700"
        >
          <path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"></path>
        </svg>

      

        <div className="ml-5">
          <h2 className="font-semibold text-black">
            Charli Chaplin
          </h2>
          <p className="mt-3 text-base text-gray-600">
            Best Paratha ever with extra cheese and masala .  
          </p>
        </div>
      </div>
      <div className="flex items-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-9 w-9 text-gray-700"
        >
          <path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"></path>
        </svg>

      

        <div className="ml-5">
          <h2 className="font-semibold text-black">
            Ritk Tomar
          </h2>
          <p className="mt-3 text-base text-gray-600">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint.
          </p>
        </div>
      </div>
      <div className="flex items-start">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-9 w-9 text-gray-700"
        >
          <path d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"></path>
        </svg>

      

        <div className="ml-5">
          <h2 className="font-semibold text-black">
            Mangal Sonaniya
          </h2>
          <p className="mt-3 text-base text-gray-600">
            I have test it's paratha 
            so ymmi and crispi paratha ever
            i love'd Mr. Paratha Store.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
   
    </>
  )
}

export default Review