
import Categoriesnav from '@/_Components/Categoriesnav'
import { getAllSubCategories, getCategoryById, getSubCategories } from '@/_Services/Api'
import Link from 'next/link'

import React from 'react'
import { FaArrowLeft, FaArrowRight, FaFolder, FaTags } from 'react-icons/fa'

interface ParamsDT {
  _id: string,
  name: string,
  slug: string,
  image: string,

}
export default async function page({ params }: ParamsDT) {
  console.log({ params })
  const myParams = await params
  console.log("myparams ", myParams)

  const caetgoryById = await getCategoryById(myParams.id)
  console.log("caetgoryById ", caetgoryById)

  const allSubCategories = await getAllSubCategories()
  console.log("allSubCategories from", allSubCategories)

  return (
    <>

      <Categoriesnav field={caetgoryById?.name} bgLinear={"  bg-gradient-to-br from-[#16A34A] hover: via-[#22C55E] to-[#4ADE80]"}
        title={caetgoryById?.name} disc={"Choose a subcategory to browse products"} category='categories'
        icon={<FaTags className='text-white text-3xl' />} />

      <div className='mx-auto w-10/12'>


        <Link href={"/categories"} className='inline-flex items-center gap-2 text-gray-600 hover:text-[#16A34A] transition-colors mb-6'>
          <FaArrowLeft />
          <span> Back to Categories</span>
        </Link>


        <h2 className='text-lg font-bold mb-4 text-gray-900'>40 Subcategories in {caetgoryById?.name}</h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 '>

         

          {allSubCategories?.map(  (categry)=> <div key={categry._id} className='group bg-white rounded-2xl border cursor-pointer border-gray-100 p-6 shadow-sm hover:shadow-xl hover:border-primary-200 transition-all duration-300 hover:-translate-y-1'>

       <div className='w-14 h-14 rounded-xl bg-[#DCFCE7] flex items-center justify-center mb-4 group-hover:bg-[#97f7b9] transition-colors'>
             <span>
              <FaFolder className='text-[#16a34a]'/>
            </span>
       </div>

      <h3 className='font-bold text-gray-900 text-lg group-hover:text-[#16a34a] transition-colors mb-2'>
{categry.name}
    <div className='flex items-center gap-2 text-sm text-[#16a34a] opacity-0 group-hover:opacity-100 transition-opacity'>
    <span>Browse Products</span>
    <FaArrowRight/>

    </div>
   {/* <h4>Browse Products  <FaArrowRight/> </h4> */}
      </h3>
         

          </div>)}



        </div>

      </div>


      {allSubCategories?.map((item) => <div key={item._id}>


        {/* <h2>
       40 Subcategories in {caetgoryById?.name}
    </h2> */}

        {/* <span src={item.name} className='w-100'/> */}
        {/* <span>{item.name}</span> */}
        <img src={item.image} />


      </div>)}





    </>
  )
}
