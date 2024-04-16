import React, { useEffect } from 'react'
// import ReguleItem from '../components/ReguleItem'
import { useDispatch, useSelector } from "react-redux"
import ProductItem from '../components/ProductItem';
import { parathaItems } from '../featurs/paratha/parathaSlice';


const RegulerProduct = () => {

  const { paratha , isLoading, isError, message } = useSelector((state) => state.parathas);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(parathaItems())
  },[])
  return (
    <>
 <div className="text-2xl font-bold px-5">Our Reguler Dishes</div>
<div className="mx-auto grid w-full max-w-7xl items-center space-y-4 px-2 py-10 md:grid-cols-2 md:gap-6 md:space-y-0 lg:grid-cols-4">
    
{
      paratha.map((roti)=>
      <ProductItem key={roti.id} roti={roti}/> )
    }
</div>

    </>
  )
}

export default RegulerProduct