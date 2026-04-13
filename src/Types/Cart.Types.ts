import { ProductsType } from "./Product.Types"

export interface CartResType{
    status:string,
    cartId:string,
    message:string,
    numOfCartItems:number,
    data:{
        totalCartPrice:number ,
        products:CartItemType[]
    }
}

export interface CartItemType{
    count:number,
    price:number,
    product:ProductsType
}