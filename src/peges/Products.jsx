import React, { useEffect } from 'react'
import ProductItem from '../components/ProductItem'
import { useDispatch, useSelector } from "react-redux"
import { parathaItems } from '../featurs/paratha/parathaSlice';
import {  ThreeDots } from 'react-loader-spinner';

const Products = () => {

  const { paratha , isLoading, isError, message } = useSelector((state) => state.parathas);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(parathaItems())
  },[])


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
    <div className="text-2xl font-bold px-5">Our Popular Dishes</div>
<div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
    {
      paratha.map((roti)=>
      <ProductItem key={roti.id} roti={roti}/> )
    }
</div>

    </>
  )
}

export default Products