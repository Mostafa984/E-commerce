"use server"

import { SignUpDataType } from "./signUp.scheme"

export async function signUpAction(values:SignUpDataType){


const res = await fetch("https://ecommerce.routemisr.com/api/v1/auth/signup", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
    "Content-Type": "application/json  "
        }
})

//final response with token
const finalRes = await res.json()

console.log("FINAL RES FROM ACTION PAGE ",finalRes)
console.log("res is  ",res)




return {
      ok: res.ok,
      status: res.status,
      
      message:finalRes.message
     
    }

}
