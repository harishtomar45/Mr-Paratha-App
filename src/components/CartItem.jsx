import React, { useState } from "react";
import { useDispatch } from "react-redux"
import { remove } from "../featurs/cart/cartSlice";

const CartItem = ({roti}) => {



    
  const dispatch = useDispatch();

  const [count, setCount] = useState(1);


  const plusOne = () =>{
   setCount(count + 1)
  }

  const minasOne = () =>{
    if(count > 1){
      setCount(count -1)
    }
   }

   
 const final = count * roti.price;
 

  const handleRemove = (id) => {
        dispatch(remove(id))
  }
  return (
    <>
      <div className="">
        <li className="flex py-6 sm:py-6 ">
          <div className="flex-shrink-0">
            <img
              src={roti.img}
              alt="Cheese Paratha"
              className="sm:h-38 sm:w-38 h-24 w-24 rounded-md object-contain object-center"
            />
          </div>
          <div className="ml-4 flex flex-1 flex-col justify-between sm:ml-6">
            <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
              <div>
                <div className="flex justify-between">
                  <h3 className="text-sm">
                    <a href="#" className="font-semibold text-black">
                      {roti.name}
                    </a>
                  </h3>
                </div>
              
                <div className="mt-1 flex items-end">
                  {/* <p className="text-xs font-medium text-gray-500 line-through">
                    ₹{roti.price}
                  </p> */}
                  <p className="text-sm font-medium text-gray-900">  ₹{final}</p>
                  {/*   <p className="text-sm font-medium text-green-500"> 0% Off</p>  */}
                </div>
              </div>
            </div>
          </div>
        </li>
        <div className="mb-2 flex">
          <div className="min-w-24 flex">
            <button onClick={minasOne} type="button" className="h-7 w-7">
              -
            </button>
            {/* <input
            
            type="text"
              className="mx-1 h-7 w-9 rounded-md border text-center"
              value="1"
            /> */}
            {count}
            <button
            onClick={plusOne}
              type="button"
              className="flex h-7 w-7 items-center justify-center">
              +
            </button>
          </div>
          <div className="ml-6 flex text-sm">
            <button
            onClick={() => handleRemove(roti.id)}
              type="button"
              className="flex items-center space-x-1 px-2 py-1 pl-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-red-500">
                <path d="M3 6h18"></path>
                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
              </svg>
              <span className="text-xs font-medium text-red-500">Remove</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
