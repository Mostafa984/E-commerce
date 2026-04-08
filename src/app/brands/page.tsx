import Categoriesnav from '@/_Components/Categoriesnav'
import { getAllBrands } from '@/_Services/Api'
import React from 'react'
import { FaTags } from 'react-icons/fa'
import { FaArrowRight } from 'react-icons/fa6'

export default async function brands() {


 const product = await getAllBrands()
  console.log("brands: ",product)

  

  return (
    <section className=''>
    <div className=''>

      <Categoriesnav field={"Brands"} bgLinear={"  bg-gradient-to-br from-[#7F22FE] hover: via-[#8E51FF] to-[#C27AFF]"}
        title={"Top Brands"} disc={"Shop from your favorite brands"}
        icon={<FaTags className='text-white text-3xl' />}
      />



<div className="mx-auto w-10/12 ">
  <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 p-5  ">
    {product?.map((brand) => (
      
      <div key={brand._id} className="bg-white shadow-sm  rounded-3xl overflow-hidden group hover:-translate-y-5 duration-350 hover:border-violet-200 hover:shadow-2xl">
        <div className="bg-[#F9FAFB] p-4 m-5 rounded-2xl">
          <img
            src={brand.image}
            alt={brand.name}
            className=" object-contain h-28 group-hover:scale-105 transition-transform"
          />
        </div>
        <div className="px-5 pb-6 text-center">
          <h3 className="font-semibold text-[#101828] mb-4 group-hover:text-[#7f22fe] transition-colors">
            {brand.name}
          </h3>
          <button className=" flex items-center justify-center  gap-1.5 w-full py-2.5 opacity-0 group-hover:opacity-100  text-sm group-hover:text-[#7f22fe] duration-350">

           <span>View All Products</span>
           <FaArrowRight />
            
          </button>
        </div>
      </div>
    ))}
  </div>


</div>
  





      
    </div>



    </section>
  )
}
