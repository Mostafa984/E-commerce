
import React from 'react'
import image1 from "../../../images/d475d9fec79c242fb84c186855ab92dffca40705 (1).jpg"
import { getProductById } from '@/_Services/Api'
import { FaBolt, FaShoppingCart, FaStar } from 'react-icons/fa'
import { LuDot } from 'react-icons/lu'
import { CiHeart } from 'react-icons/ci'
import { IoShareSocialOutline } from 'react-icons/io5'

export default async function page({ params }) {

    const myParams = await params
    const finalParams = myParams.id
    const product = await getProductById(finalParams)

    const discounted = 100 - ((product?.priceAfterDiscount) / (product?.price)) * 100
    console.log(discounted)


    return (

        <div className='  h-screen  rounded-xl shadow-sm p-6  '>
            REST OF DESIGN
            <div className=' mx-auto w-10/12  grid grid-cols-4 items-center gap-4'>

                <div className='IMAGE  col-span-1 border-3 shadow-xl rounded-2xl'>
                    <img src={product?.imageCover} alt='bla' className='object-cover     ' />
                </div>
                <div className=' p-5 col-span-3 border rounded-2xl shadow'>

                    {/* brand */}
                    <div className='brand mb-4 flex gap-2'>
                        <span className='bg-[#F0FDF4] text-[]#15803D  py-1.5 px-3 rounded-full'>
                            {product?.category.name}

                        </span>

                        <span className='bg-[#F3F4F6] text-[#364153]   py-1.5 px-3 rounded-full'>
                            {product?.brand.name}
                        </span>
                    </div>

                    <h2 className=' mb-4  text-[#101828] font-bold text-3xl'>{product?.title.split()}</h2>

                    <div className='mb-4  flex gap-2'>
                        <p>
                            <FaStar />
                        </p>
                        <span className='text-[#4A5565] font-medium text-sm'>{product?.ratingsAverage} ({product?.quantity} Reviews  ) </span>

                    </div>

                    <h3 className='mb-4'>{product?.priceAfterDiscount ? <div className='flex items-center  gap-4   '>
                        <p className='text-[#101828] font-bold text-3xl'>  {product.price}</p>
                        <p className='text-[#99a1af] font-medium text-[18px] line-through'>{product.priceAfterDiscount}</p>
                        <p className='font-medium text-white bg-red-500  py-1 px-3 rounded-full'>save {Math.floor(discounted)}%</p>
                    </div> : <p className='text-[#101828] font-bold text-3xl'>  {product.price} EGP</p>}
                    </h3>


                    <div className='flex  items-center gap-2 mb-6'>
                        {product?.quantity ? <div className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-green-50 text-green-700">
                            <span className='w-2 h-2 rounded-full bg-green-500'></span>
                            <p>in stock</p>
                        </div> :
                            <div>
                                <span className='w-2 h-2 rounded-full bg-red-500'></span>
                                <p>Not in stock</p>
                            </div>

                        }
                    </div>

                    <p className='border-t-2 border-t-[#F3F4F6] pt-5 text-[#4A5565] font-medium text-base'>{product?.description}</p>

                    <div>
                        <p className='text-[#364153] font-medium text-sm'>Quantity</p>
                        DO THE BUTTON HEREREREREREREER

                    </div>

                    <div className=' p-4 flex items-center justify-between mb-4 bg-gray-50 border-8 rounded-2xl border-transparent'>
                        <p className='text-[#4A5565] *:font-medium text-2xl'>Total Price:</p>
                        <p className='text-[#16A34A] font-bold text-2xl'>{product?.price}.00 EGP</p>
                    </div>

                    <div className="buttons cursor-pointe flex gap-3 mb-4">
                        <button type='button' className='flex items-center justify-center  gap-4 bg-[#16A34A] cursor-pointer border-12 border-transparent h-[52px] w-[518px] rounded-2xl  py-[14px] px-[24px] shadow-2xl shadow-amber-400 hover:bg-lime-400 transition'>
                            <FaShoppingCart className='w-5 h-4 text-white' />
                            <p className='font-medium text-2xl'>Add to Cart</p>
                        </button>

                        <button type='button' className='flex items-center justify-center  gap-4 bg-[#101828] text-white cursor-pointer border-12 border-transparent h-[52px] w-[518px] rounded-2xl  py-[14px] px-[24px] shadow-2xl shadow-amber-400 hover:bg-mist-700 transition'>
                            <FaBolt className='w-5 h-4 text-white' />
                            <p className='font-medium text-2xl'>Buy Now</p>
                        </button>


                    </div>

                    <div className='flex items-center gap-3 '>

                        <button type="button" className='flex-1 border-2 py-3 px-4 rounded-xl font-medium transition flex items-center justify-center gap-2 border-gray-200 text-gray-700 hover:border-primary-300 hover:text-primary-600   '>
                            <CiHeart />
                            <p className='text-[#364153]   font-medium text-2xl'> Add to Wishlist</p>
                        </button>

                        {/* SHARE ICON */}
                        <button type="button" className=' cursor-pointer border-2 border-gray-200 text-gray-700 py-3 px-4 rounded-xl hover:border-primary-300 hover:text-primary-600 transition'>
                            <IoShareSocialOutline />
                        </button>
                    </div>


                </div>


            </div>

        </div>
    )
}
