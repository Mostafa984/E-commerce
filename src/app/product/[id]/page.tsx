
import React from 'react'
import image1 from "../../../images/d475d9fec79c242fb84c186855ab92dffca40705 (1).jpg"
import { getProductById } from '@/_Services/Api'
import { FaBolt, FaShieldAlt, FaShoppingCart, FaStar } from 'react-icons/fa'
import { LuDot } from 'react-icons/lu'
import { CiHeart } from 'react-icons/ci'
import { IoShareSocialOutline } from 'react-icons/io5'
import { FaTruckFast } from 'react-icons/fa6'
import { IoIosRefresh } from 'react-icons/io'
interface ParamsDT {
    params: Promise<{ id: string }>;
}

export default async function page({ params }: ParamsDT) {

    const myParams = await params
    const finalParams = myParams.id
    const product = await getProductById(finalParams)

    const discounted = 100 - ((product?.priceAfterDiscount) / (product?.price)) * 100
    console.log("discounted tag price :", discounted)

         const cards = [
                { description: "On orders over 500 EGP", title: "free shipping", icon: FaTruckFast , key: "movingTruck", bg: "bg-[#DCFCE7]", iconColor: "text-[#16A34A]" },
                { description: "Secure Payment", title: "100% secure transactions", icon:  IoIosRefresh , key: "refresh", bg: "bg-[#DCFCE7]", iconColor: "text-[#16A34A]" },
                { description: "Easy Returns", title: "14-day return policy", icon: FaShieldAlt , key: "shield", bg: "bg-[#DCFCE7]", iconColor: "text-[#16A34A]" },
        
        
            ]





    return (

        <div className='mx-auto w-10/12     '>
            REST OF DESIGN
            <div className='   grid grid-cols-4 items-center gap-8'>

                <div className='IMAGE sticky p-4 col-span-1 border rounded-lg border-[#d4d4d4]  top-0 shadow-lg   '>
                    <img src={product?.imageCover} alt='bla' className=' object-cover ' />
                </div>

                <div className=' p-5 col-span-3 border rounded-2xl shadow'>

                    {/* brand */}
                    <div className='brand mb-4 flex gap-2'>
                        <span className='bg-[#F0FDF4] text-[#15803D]  py-1.5 px-3 rounded-full'>
                            {product?.category.name}
                        </span>

                        <span className='bg-[#F3F4F6] text-[#364153]   py-1.5 px-3 rounded-full'>
                            {product?.brand.name}
                        </span>
                    </div>

                    <h2 className=' mb-4  text-[#101828] font-bold text-3xl'>{product?.title.split()}</h2>

                    <div className='mb-4  flex gap-2'>
                        <p>
                            <FaStar className='text-amber-300' />
                        </p>
                        <span className='text-[#4A5565] font-medium text-sm'>{product?.ratingsAverage} ({product?.quantity} Reviews  ) </span>

                    </div>

                    <h3 className='mb-4'>{product?.priceAfterDiscount ? <div className='flex items-center  gap-4   '>
                        <p className='text-[#101828] font-bold text-3xl'>  {product.price} EGP</p>
                        <p className='text-[#99a1af] font-medium text-[18px] line-through'>{product.priceAfterDiscount} EGP</p>
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

                    <p className='border-t-2 border-t-[#F3F4F6] pt-5 text-[#4A5565] font-medium text-base m-2'>{product?.description}</p>

                    <div>
                        <p className='text-[#364153] font-medium text-sm m-2'>Quantity</p>
                        DO THE BUTTON HEREREREREREREER

                    </div>

                    <div className=' p-4 flex items-center justify-between mb-4 bg-gray-50 border-8 rounded-2xl border-transparent'>
                        <p className='text-[#4A5565] *:font-medium text-2xl'>Total Price:</p>
                        <p className='text-[#16A34A] font-bold text-2xl'>{product?.price}.00 EGP</p>
                    </div>

                    <div className="buttons cursor-pointe flex gap-3 mb-4">
                        <button type='button' className=' shadow-2xl flex items-center justify-center  gap-4 bg-[#16A34A] cursor-pointer border-12 border-transparent h-[52px] w-full rounded-2xl  py-3.5 px-6  hover:bg-[#078234] transition'>
                            <FaShoppingCart className='w-5 h-4 text-white' />
                            <p className='font-medium text-2xl text-white'>Add to Cart</p>
                        </button>

                        <button type='button' className='flex items-center justify-center  gap-4 bg-[#101828] text-white cursor-pointer border-12 border-transparent h-[52px] w-full rounded-2xl  py-[14px] px-[24px] shadow-2xl shadow hover:bg-mist-700 transition'>
                            <FaBolt className='w-5 h-4 text-white' />
                            <p className='font-medium text-2xl'>Buy Now</p>
                        </button>


                    </div>

                    <div className='flex items-center gap-3 '>

                        <button type="button" className="group cursor-pointer w-full border-2 py-3 px-4 rounded-xl font-medium 
            flex items-center justify-center gap-2 transition-all duration-200 border-gray-200 text-gray-700 
            hover:border-[#86EFAC] hover:text-[#86EFAC]">

                            <CiHeart className="text-gray-700 group-hover:text-[#86EFAC] transition-colors duration-200" />
                            <span className="font-medium text-2xl text-[#364153] group-hover:text-[#86EFAC] transition-colors duration-200">
                                Add to Wishlist
                            </span>
                        </button>

                        {/* SHARE ICON */}
                        <button type="button" className=' group  hover:border-[#16A34A] cursor-pointer border-2 border-gray-200 text-gray-700 py-3 px-4 rounded-xl hover:border-primary-300 hover:text-primary-600 duration-200'>
                            <IoShareSocialOutline  className='group-hover:text-[#16A34A] '/>
                        </button>

                    </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {cards.map((item) => (
    <div key={item.key} className="flex my-4">
      <div className="p-5 rounded-xl bg-white  flex items-center gap-4   w-full">
        
        {/* Icon */}
        <div className={`icon ${item.bg} w-12 h-12 rounded-full flex items-center justify-center    `}>
          <item.icon className={`${item.iconColor} font-bold text-xl`} />
        </div>

        {/* Content */}
        <div className="services flex-1">
          <h5 className="font-semibold text-sm text-[#1E2939]">{item.title}</h5>
          <p className="font-medium text-[#6A7282] text-sm sm:text-base">
            {item.description}
          </p>
        </div>

      </div>
    </div>
  ))}
</div>


                </div>


            </div>

        </div>
    )
}
