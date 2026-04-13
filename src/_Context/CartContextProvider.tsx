"use client"
import { getUserCart } from '@/_Card.Actions/Card.actions'
import { CartItemType, CartResType } from '@/Types/Cart.Types'
import React, { createContext, ReactNode, useEffect, useState } from 'react'

export const  cartContext = createContext({})




export default function CartContextProvider( {children,userCart} :   {children:ReactNode, userCart:CartResType}  ) {
    const [numberOfCartItems, setnumberOfCartItems] = useState(userCart.numOfCartItems)
    const [totalPriceOfCart, setTotalPriceOfCart] = useState(userCart.data.totalCartPrice)
     console.log("userCart.data.totalCartPrice ",userCart.data.totalCartPrice)
      const [cartProducts, setcartProducts] = useState<CartItemType[]>(userCart.data.products)




  return (  
    <cartContext.Provider value={{ numberOfCartItems, setnumberOfCartItems,totalPriceOfCart, setTotalPriceOfCart
      ,cartProducts, setcartProducts
    }}>

        {children}

    </cartContext.Provider>
    


    
  )
}
