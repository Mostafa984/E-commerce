"use server"
import { CartResType } from '@/Types/Cart.Types'
import getMyTokens from '@/utils/getMyToken'


export  async function AddProductToCart(id:string):Promise<CartResType> {
    const token = await getMyTokens()

    const res = await fetch("https://ecommerce.routemisr.com/api/v2/cart",{
        method:"POST",
        body:JSON.stringify({ productId : id}  ),
        headers:{
            "Content-Type":"application/json",
            token:token as string
        }
    
    })

    const finalResp=await res.json()
    console.log("finalResp from cart actions",finalResp)
    return finalResp

}



export  async function getUserCart():Promise<CartResType> {
     const token = await getMyTokens()
    const res = await fetch("https://ecommerce.routemisr.com/api/v2/cart",{
    headers:{
            token:token as string
    }
    })
    console.log("res from getCart is ",res)
    const finalResp= await res.json()
    console.log("final resp fromm getUserCart is ",finalResp)
    return finalResp

}



export  async function deleteItemFromCart(productId:string):Promise<CartResType> {
     const token = await getMyTokens()
    const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart/${productId}`,{
    headers:{
            token:token as string
    },
    method:"DELETE"
    })
    console.log("res from deleteItemFromCart is ",res)
    const finalResp= await res.json()
    console.log("final resp deleteItemFromCart ",finalResp)
    return finalResp

}




export  async function UpdateProductCart(id:string,count:string):Promise<CartResType> {
     const token = await getMyTokens()
    const res = await fetch(`https://ecommerce.routemisr.com/api/v2/cart/{id}`,{
    headers:{
            token:token as string,
            "Content-Type":"application/json"
    },
    body:JSON.stringify({count}),
    method:"PUT"
    })
    console.log("res from deleteItemFromCart is ",res)
    const finalResp= await res.json()
    console.log("final resp deleteItemFromCart ",finalResp)
    return finalResp

}