"use server"

import { cookies } from "next/headers"
import { SignInDataType } from "./Login.scheme"


export async function getLogInAction(values:SignInDataType){
    const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signin", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
    "Content-Type": "application/json  "
        }
})

    // console.log("values : ", values)
    console.log("init response: .status ", res)


 
 const myCookies =  await cookies()
      



    const finalResp = await res.json()
   
    console.log("finalResp.token: ",finalResp.Token)
     myCookies.set("useasdasr Token",finalResp.token,{
        maxAge:60*60*12,
        secure:true,
        httpOnly:true,
        sameSite:"strict",
        priority:"high",
        path:'/login'

     })
    const getttingall = myCookies.getAll("useasdasr Token")
     console.log("getttingall",getttingall)
    // console.log("finalResp: ", finalResp)
  
    //finalResp.statusMsg :


    
    return  res.statusText

}