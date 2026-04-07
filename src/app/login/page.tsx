"use client"

import React from 'react'

import { Controller, useForm } from 'react-hook-form'
import { FaClock, FaFacebook, FaGoogle, FaShieldAlt, FaTruck } from 'react-icons/fa'


import { useRouter } from 'next/navigation'
import logoPic from "../../images/LoginPic.png"
import { SignInDataType, signInSchema } from './Login.scheme'
import { zodResolver } from '@hookform/resolvers/zod'
import { Field, FieldError, FieldLabel } from '@/components/ui/field'
import { Input } from '@/components/ui/input'
import { toast } from 'sonner'
import { getLogInAction } from './Login.action'
import Image from 'next/image'
import { InfoIcon } from 'lucide-react'
import Link from 'next/link'




export default function SignIn() {



  const router = useRouter()


  const form = useForm({
    defaultValues: {
    
      email: "",
      password: "",
   
    }, resolver: zodResolver(signInSchema)
  })



  async function handelSignIn(values: SignInDataType) {


    try {
   const LoggedIn = await getLogInAction(values)

   console.log("the LoggedIn  from login is : ",LoggedIn )

  //  console.log("statusText: ",LoggedIn .statusText)
  

      //TO SWITCH THE PLACE OF IFQ

      
      if (LoggedIn == "OK") {

 toast.success("Logged in succfully", {
          richColors: true,
          position: "top-center"
        })
        // router.push("/")

       


      }
      else {
        toast.error("Incorrect email or password", {
          richColors: true,
          position: "top-center"
        })
      }



    } catch (error) {
      console.log(error)

    }
  }




  return (
    <>



      <div className="  container mx-auto max-w-7xl  grid grid-cols-1 lg:grid-cols-2 gap-12 p-4">


 

        <div className="">

          <div className='left '>


            <div className="image my-2 mb-4 h-96 w-130 mx-auto">
              <img src={logoPic.src} alt="Login Pic" className='w-full h-96 object-cover rounded-2xl shadow-lg' />

            </div>

            <div className="text mb-4">
              <p className='text-[#1E2939] font-bold text-3xl text-center my-2'>freshCart - Your One-Stop Shop for Fresh Products</p>
              <p className='text-[#4A5565] font-bold text-base text-center'>Join thousands of happy customers who trust FreshCart for their daily
                grocery needs</p>
            </div>

            <div className="servi mb-4 flex gap-7 items-center justify-center">

              <div className="card1 flex gap-3 items-center  justify-between">
                <FaTruck className='text-[#16A34A]' />
                <p className='text-[#6A7282] font-medium text-base'> Free Delivery</p>
              </div>


              <div className="card1 flex gap-3 items-center  justify-between">
                <FaShieldAlt className='text-[#16A34A]' />
                <p className='text-[#6A7282] font-medium text-base'> Secure Payment</p>
              </div>



              <div className="card1 flex gap-3 items-center  justify-between">
                <FaClock className='text-[#16A34A]' />
                <p className='text-[#6A7282] font-medium text-base'> 24/7 Support</p>
              </div>





            </div>


          </div>

        </div>


        <div className="right ">

          <div className=' bg-white rounded-2xl shadow-xl p-8 lg:p-12 '>

            <div className=" text-center p-4 ">
              <h2 className='text-[#364153] font-semibold text-3xl'>Create Your Account</h2>
              <p className='font-medium text-base text-[#364153] '>Start your fresh journey with us today</p>
            </div>

            <div className="btns space-y-6  gap-3 my-3 ">
              <button className='GOOGLE w-full flex items-center  gap-3  cursor-pointer justify-center border   border-[#D1D5DC] rounded-[8px]  h-11 hover:bg-[#F0FDF4] hover:border-2 hover:border-[#ccfcda] transition-all duration-200'>
                <FaGoogle className='text-[#E7000B]' />
                Continue with Google</button>



              <button className='FACEBOOK w-full my-3  flex items-center  gap-3  cursor-pointer justify-center border border-[#D1D5DC] rounded-[8px]  h-11 hover:bg-[#F0FDF4] hover:border-2 hover:border-[#ccfcda] transition-all duration-200  '>
                <FaFacebook className='text-[#155DFC]' />
                Continue with Facebook</button>

            </div>



            <div className="divider relative w-full h-0.5 bg-gray-300/30 my-4 flex items-center before:content-['OR'] before:absolute before:top-1/2 before:left-1/2 before:-translate-1/2 before:bg-white before:px-4">

            </div>







     <form onSubmit={form.handleSubmit(handelSignIn)}>

          
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>Email*</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="aLi@example.com"
                    autoComplete="off"
                    
                    className='focus:border-amber-400 important'
                  />

                
          
       

                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />


            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor={field.name}>password*</FieldLabel>
                  <Input
                    {...field}
                    id={field.name}
                    aria-invalid={fieldState.invalid}
                    placeholder="create a strong password"
                    autoComplete="off"
                    type='password'
                    className='my-2'
                  />

                  {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
                </Field>
              )}
            />

          

     



              



            <button className='bg-[#16A34A] w-full h-10 rounded-lg  my-4 cursor-pointer flex items-center justify-center gap-3 text-white hover:bg-[#15803D] transition'>
              
              <span className='font-semibold text-base '>Sign In </span>

            </button>



             <p className="border-t pt-10 border-gray-300/30 my-4 text-center">
              Already have an account?
              <Link href={"/signup"} className='px-2 text-primary-600 hover:underline font-medium text-[#16a34a] '>
                 Create an account
              </Link>
            </p>





          </form>





















          </div>








        </div>

      </div>

    </>
  )

}
