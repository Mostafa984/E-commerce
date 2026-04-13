"use client"

import { deleteItemFromCart, UpdateProductCart } from "@/_Card.Actions/Card.actions"
import { cartContext } from "@/_Context/CartContextProvider"
import { CartItemType } from "@/Types/Cart.Types"
import { useContext } from "react"


export default function CartPage() {
  const { cartProducts, totalPriceOfCart, numberOfCartItems
    , setTotalPriceOfCart, setcartProducts, setnumberOfCartItems } = useContext(cartContext)

  async function handelDeleteItem(id: string) {
    const res = await deleteItemFromCart(id)
    setcartProducts(res.data.products)
    setnumberOfCartItems(res.numOfCartItems)
    setTotalPriceOfCart(res.data.totalCartPrice)

    console.log("resp del ", res)
  }



  return (
    <div>
      <div className="bg-gray-50 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Shopping Cart</h1>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <div className="space-y-4">

                {cartProducts.map((item: CartItemType) =>
                  <div key={item.product.id} className="flex items-center justify-between p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
                    <div className="flex items-center gap-6">
                      <div className="h-24 w-24 bg-gray-100 rounded-lg overflow-hidden">
                        <img src={item.product.imageCover} alt={item.product.title} className="h-full w-full object-cover" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">{item.product.title}</h3>
                        <p className="text-sm text-gray-500 mb-2">{item.product.category.name}</p>
                        <button onClick={() => handelDeleteItem(item.product.id)} className="flex items-center text-red-500 text-sm hover:text-red-600 transition-colors">
                          Remove
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-4">
                      <p className="text-xl font-bold text-gray-900">{item.price} EGP</p>
                      <div className="flex items-center border border-gray-200 rounded-lg bg-gray-50">
                        <button className="p-2 hover:text-blue-600">-</button>
                        <span className="px-4 font-medium text-gray-900">{item.count}</span>
                        <button className="p-2 hover:text-blue-600">+</button>
                      </div>
                    </div>
                  </div>
                )}


                {/* */}



              </div>
              <button className="mt-8 flex items-center text-blue-600 font-medium hover:underline">
                Continue Shopping
              </button>
            </div>
            <div className="lg:col-span-4">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 sticky top-8">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>
                <div className="space-y-4 mb-6">

                  <div className="flex justify-between text-gray-600">
                    <span>Total Items</span>
                    <span className="font-medium text-gray-900">{numberOfCartItems}</span>
                  </div>
                  <hr className="border-gray-100" />
                  <div className="flex justify-between text-lg font-bold text-gray-900 pt-2">
                    <span>Total</span>
                    <span>{totalPriceOfCart}</span>
                  </div>
                </div>


                <p className="mt-4 text-center text-xs text-gray-400">
                  Secure SSL Encrypted Payment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}
