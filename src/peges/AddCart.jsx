import React, { useEffect } from 'react'
import CartItem from '../components/CartItem'
import {  useSelector } from "react-redux"
import {useNavigate} from "react-router-dom"
// import { fetchParatha } from '../featurs/paratha/parathaService';

const AddCart = () => {
  const { user } = useSelector((state) => state.auth)
  const { cartItems } = useSelector((state) => state.cart);
  //  const dispatch = useDispatch();
  const navigate = useNavigate();
  const total = cartItems.reduce((p,c)=>{
    return p + c.price;
  },0);

  useEffect(()=>{
     if(!user){
     navigate("/login")
     }
  },[user])
  
 

  return (
    <>
      <div className="mx-auto max-w-7xl px-2  lg:px-0">
  <div className="mx-auto max-w-2xl py-8 px-8 lg:max-w-7xl">
    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
      Shopping Cart
    </h1>
    <form className="mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16">
      <section
        aria-labelledby="cart-heading"
        className="rounded-lg bg-white lg:col-span-8"
      >
        <h2 id="cart-heading" className="sr-only">
          Items in your shopping cart
        </h2>
        <ul role="list" className="divide-y divide-gray-200">
         
       {
        cartItems.map((roti) => (
          <CartItem key={roti.id} roti={roti} />
        ))
       }
        </ul>
      </section>
      <section
        aria-labelledby="summary-heading"
        className="mt-16 rounded-md bg-white lg:col-span-4 lg:mt-0 lg:p-0"
      >
        <h2
          id="summary-heading"
          className=" border-b border-gray-200 px-4 py-3 text-lg font-medium text-gray-900 sm:p-4"
        >
          Price Details
        </h2>
        <div>
          <dl className=" space-y-1 px-2 py-4">
            <div className="flex items-center justify-between">
              <dt className="text-sm text-gray-800">Price (3 item)</dt>
              <dd className="text-sm font-medium text-gray-900">₹ {total}</dd>
            </div>
            <div className="flex items-center justify-between pt-4">
              <dt className="flex items-center text-sm text-gray-800">
                <span>Discount</span>
              </dt>
              <dd className="text-sm font-medium text-green-700">₹ 0</dd>
            </div>
            <div className="flex items-center justify-between py-4">
              <dt className="flex text-sm text-gray-800">
                <span>Delivery Charges</span>
              </dt>
              <dd className="text-sm font-medium text-green-700">Free</dd>
            </div>
            <div className="flex items-center justify-between border-y border-dashed py-4 ">
              <dt className="text-base font-medium text-gray-900">Total Amount</dt>
              <dd className="text-base font-medium text-gray-900">₹{total}</dd>
            </div>
          </dl>
          <div className="px-2 pb-4 font-medium text-green-700">
            You will save ₹ 0.00 on this order
          </div>
        </div>
      </section>
    </form>
  </div>
</div>
  
    </>
  )
}

export default AddCart