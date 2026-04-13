"use client"
import { AddProductToCart } from "@/_Card.Actions/Card.actions"
import { cartContext } from "@/_Context/CartContextProvider"
import { useContext } from "react"
import { toast } from "sonner" 


export default function AddToCardBtn({productId}:{productId :string}) {
        const {setnumberOfCartItems,setcartProducts,setTotalPriceOfCart} = useContext(cartContext)

   async  function handelAddToCard() {
       const res= await  AddProductToCart(productId)
       console.log("res of addproductscars",res)

       if(res.status=="success"){
        toast.success(res.message,{position:"top-center"})
        setnumberOfCartItems(res.numOfCartItems)

        setcartProducts(res.data.products)
        
        setTotalPriceOfCart(res.data.totalCartPrice)
       }

    }
    return (
        <div>

            <button onClick={handelAddToCard} className='text-center cursor-pointer text-2xl font-semibold bg-[#16A34A] text-white w-10 h-10 rounded-full'>
                +  </button>
        </div>
    )
}
