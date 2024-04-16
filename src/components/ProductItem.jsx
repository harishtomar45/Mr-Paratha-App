import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { add } from '../featurs/cart/cartSlice';
import {  ThreeDots } from 'react-loader-spinner';

const ProductItem = ({roti}) => {

  const { user } = useSelector((state) => state.auth);
  const { isLoading } = useSelector((state) => state.parathas);
  
  const dispatch = useDispatch();
  
  const addToCart = (CartItem) =>  {
    dispatch(add(CartItem))
    
  }

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
 <div className="rounded-md border">
    <img
      src={roti.img}
      alt="Laptop"
      className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
    />
    <div className="p-4">
      <h1 className="inline-flex items-center text-lg font-semibold">
        {roti.name}
      </h1>
      <p className="mt-3 text-sm text-gray-600">
      {roti.description}
      </p>
     
      <div className="mt-5 flex items-center space-x-2">
        <span className="block text-sm font-semibold">Price : </span>
        <span className="block   p-1 px-2 text-xs font-medium">
       {roti.price}
        </span>
      </div> 
      <button
      onClick={()=> addToCart(roti)}
        type="button"
        className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Add to Cart
      </button>
    </div>
  </div>
  {/* <div className="rounded-md border">
    <img
      src="https://image.telanganatoday.com/wp-content/uploads/2022/06/Pizza_V_jpg--442x260-4g.webp?sw=412&dsz=442x260&iw=372&p=false&r=2.625"
      alt="Laptop"
      className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
    />
    <div className="p-4">
      <h1 className="inline-flex items-center text-lg font-semibold">
        Cheese Paratha
      </h1>
      <p className="mt-3 text-sm text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
        debitis?
      </p>
     
      <div className="mt-5 flex items-center space-x-2">
        <span className="block text-sm font-semibold">Price : </span>
        <span className="block   p-1 px-2 text-xs font-medium">
        ₹ 199.00
        </span>
      </div>
      <button
        type="button"
        className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Add to Cart
      </button>
    </div>
  </div>
  <div className="rounded-md border">
    <img
      src="https://pipingpotcurry.com/wp-content/uploads/2022/11/Paneer-Paratha-Piping-Pot-Curry.jpg"
      alt="Laptop"
      className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
    />
    <div className="p-4">
      <h1 className="inline-flex items-center text-lg font-semibold">
        Cheese Paratha
      </h1>
      <p className="mt-3 text-sm text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
        debitis?
      </p>
     
      <div className="mt-5 flex items-center space-x-2">
        <span className="block text-sm font-semibold">Price : </span>
        <span className="block   p-1 px-2 text-xs font-medium">
        ₹ 199.00
        </span>
      </div>
      <button
        type="button"
        className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Add to Cart
      </button>
    </div>
  </div>
  <div className="rounded-md border">
    <img
      src="https://static.toiimg.com/photo/53109843.cms"
      alt="Laptop"
      className="aspect-[16/9] w-full rounded-md md:aspect-auto md:h-[300px] lg:h-[200px]"
    />
    <div className="p-4">
      <h1 className="inline-flex items-center text-lg font-semibold">
        Cheese Paratha
      </h1>
      <p className="mt-3 text-sm text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
        debitis?
      </p>
     
      <div className="mt-5 flex items-center space-x-2">
        <span className="block text-sm font-semibold">Price : </span>
        <span className="block   p-1 px-2 text-xs font-medium">
        ₹ 199.00
        </span>
      </div>
      <button
        type="button"
        className="mt-4 w-full rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
      >
        Add to Cart
      </button>
    </div>
  </div> */}
    </>
  )
}

export default ProductItem