import { getProducts } from '@/_Services/Api'
import Link from 'next/link'
import React from 'react'
import { CiHeart } from 'react-icons/ci'
import {  FaStar } from 'react-icons/fa'
import { LuEye, LuRefreshCcw } from 'react-icons/lu'
import AddToCardBtn from './AddToCardBtn'


export default async function Products() {

    const products = await getProducts()
    
    console.log("products sd",products)

  

    return (
        <>




            <section className='PRODUCTS container mx-auto   py-4   grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5  gap-5  '>


                {products?.map((product) => <div className='relative cursor-pointer my-4  p-3  border rounded-[8px]  border-[#E5E7EB] hover:shadow-2xl transition  hover:-translate-y-3 '
                    key={product.id}>

                    <div className='relative '>
                        <div className='overflow-auto'>

                            <img className='   w-full h-60 object-contain bg-white' alt={product.title} src={product.imageCover} width={400} height={400} />

                        </div>
                        

                        {product.priceAfterDiscount && <div className='bg-red-500 text-white text-xs px-2 py-1 rounded'> Discouasdasnted tag </div>}

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
                                            <span className="mx-3 text-lg text-[#16A34A] font-bold">{product.priceAfterDiscount} EGP</span>

                                            <span className="line-through font-bold text-sm text-[#6A7282]">{product.price} EGP</span>


                                        </div>


                                        : <span className='text-[#1E2939] font-bold text-lg'>
                                            {product.price} EGP

                                        </span>}

                                </span>
                            </div>
            <AddToCardBtn productId={product.id}/>
                        </div>

                    </div>


                </div>)}


            </section>




        </>
    )
}
