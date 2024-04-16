import React from 'react'
import HeroSection from '../components/HeroSection'
import Products from './Products'
import MiddleeHero from '../components/MiddleeHero'
import RegulerProduct from './RegulerProduct'
import Review from './Review'
import FooterSection from '../components/FooterSection'
// import { useSelector } from "react-redux"
// import { Bars } from 'react-loader-spinner'


const Home = () => {

  // const { isLoading } = useSelector((state) => state.parathas);

  // if(isLoading){
  //   return(
  //    <div className='flex justify-center'><Bars
  //    height="80"
  //    width="80"
  //    color="#4fa94d"
  //    ariaLabel="bars-loading"
  //    wrapperStyle={{}}
  //    wrapperClass=""
  //    visible={true}
  //    /> </div>
      
  //   )
  // }
  return (
    <>
     <HeroSection/>
     <Products/>
     <MiddleeHero/>
     <RegulerProduct/>
     <Review/>
     <FooterSection/>   
    </>
  )
}

export default Home