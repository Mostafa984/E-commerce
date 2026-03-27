
import Categories from '@/_Components/Categories';


import Image from 'next/image';
import React from 'react'
import { CiHeart } from 'react-icons/ci';
import { FaArrowRight, FaLeaf } from 'react-icons/fa';
import { FaRegEye, FaStar } from 'react-icons/fa6';
import { LuEye, LuRefreshCcw } from 'react-icons/lu';
import { ProductsType } from '@/Types/Product.Types';
import { getProducts } from '@/_Services/Api';
import { MdOutlineEmail } from 'react-icons/md';
import Link from 'next/link';
import MySlider from './../_Components/MySlider';
import pic1 from "../images/sliderPic.png"
import pic2 from "../images/testPic.jpg"
import Services from '@/_Components/Services';
import CouponCards from '@/_Components/CouponCards';
export default async function page() {
  const products = await getProducts()

  const image = [pic1.src, pic2.src]

  return (

    <div className=' '>
      dynamic pic later
      <MySlider listOfImages={image} />

      <Services />

      <Categories />

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
      <section className='PRODUCT container mx-auto   py-8   grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5  gap-5  '>


        {products?.map((product) => <div className='relative cursor-pointer  p-3  border rounded-[8px]  border-[#E5E7EB] hover:shadow-2xl transition  hover:-translate-y-3 '
          key={product.id}>

          <div className='relative '>
            <div className='overflow-auto'>

              <img className='   w-full h-60 object-contain bg-white' alt={product.title} src={product.imageCover} width={400} height={400} />

            </div>

            {product.priceAfterDiscount && <div className='bg-red-500 text-white text-xs px-2 py-1 rounded'> Discounted tag </div>}

            { /* icons */}
            <div className='absolute top-3 right-1  space-y-3'>
              <CiHeart className='text-[#4A5565] w-8 h-8 rounded-full shadow  hover:text-red-400 transition ' />
              <LuRefreshCcw className='text-[#4A5565] w-8 h-8 shadow rounded-full   hover:text-[#16a34a] transition ' />
              <Link href={`product/${product.id}`}>
                <LuEye className='text-[#4A5565] w-8 h-8 shadow rounded-full   hover:text-[#16a34a] transition ' /></Link>

            </div>



          </div>



          <h4 className=' text-[#6A7282] font-medium text-xs '> {product.category.name} </h4>
          <h2 className='text-[#364153] font-medium text-base'> {product.title.split(" ", 3).join(" ")} </h2>


          {/* number of stars depending on rating */}
          <div className='ratings  flex  gap-3 '>
            <div className='flex'>
              <FaStar className='text-amber-300' />
              <FaStar className='text-amber-300' />
              <FaStar className='text-amber-300' />
              <FaStar className='text-amber-300' />
            </div>

            {/* ratings */}
            <h2 className='font-medium text-xs text-[#6A7282] flex items-center justify-center gap-3'><span>{product.ratingsAverage}</span><span> ({product.quantity})</span> </h2>

          </div>


          {/* PRICES */}
          <div className='  '>


            <div className='flex  justify-between items-center gap-2 '>
              <div>

                <span>
                  {product.priceAfterDiscount ?
                    <div>

                      <span className=' mx-3 text-lg text-[#16A34A] font-bold'>{product.price}  EGP</span>
                      <span className='line-through font-bold text-sm text-[#6A7282]'>{product.priceAfterDiscount}  </span>
                    </div>


                    : <span className='text-[#1E2939] font-bold text-lg'>
                      {product.price} EGP

                    </span>}

                </span>
              </div>

              <button className='flex items-center justify-center cursor-pointer text-2xl font-semibold bg-[#16A34A] text-white w-10 h-10 rounded-full'>+</button>

            </div>

          </div>


        </div>)}


      </section>


    </div>

  )
}






