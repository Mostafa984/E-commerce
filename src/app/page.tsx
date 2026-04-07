import React from 'react'


import MySlider from './../_Components/MySlider';
import pic1 from "../images/sliderPic.png"
import pic2 from "../images/testPic.jpg"
import Services from '@/_Components/Services';
import CouponCards from '@/_Components/CouponCards';
import Products from '@/_Components/Products';
import Allcategories from '@/_Components/Allcategories';
export default async function page() {
 

  const image = [pic1.src, pic2.src]

  return (

    <div className=' '>
      dynamic pic later
      <MySlider listOfImages={image} />

      <Services />

      <Allcategories />

      <CouponCards />


      {/* title */}
      <div className="container mx-auto flex items-center gap-3 py-4">
        {/* Vertical  Bar */}
        <div className="w-1.5 h-8 bg-gradient-to-t from-[#00BC7D] to-[#007A55] rounded-full"></div>

        {/* Heading */}
        <h2 className="font-bold text-3xl text-[#1E2939]">
          Featured <span className="text-[#009966]">Products</span>
        </h2>
      </div>


      {/* Mapped product div */}
    <Products/>


    </div>

  )
}






