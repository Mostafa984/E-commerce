import { AllBrands, Category, ProductsType } from "@/Types/Product.Types";

export async function getCategories(): Promise<Category[] | undefined> {
    try {

        const response = await fetch("https://ecommerce.routemisr.com/api/v1/categories", {
            cache: "force-cache",
        })
        const finalResponse = await response.json()
        return finalResponse.data


    } catch (error) {
        console.log(error)


    }
}

export async function getProducts(): Promise<ProductsType[] | undefined> {
    try {
        const response = await fetch("https://ecommerce.routemisr.com/api/v1/products", {
            cache: "force-cache"
        })
        console.log("response from getProducts is: ",response)
        const finalResponse = await response.json()

        return finalResponse.data

    } catch (error) {
        console.log(error)
        return undefined

    }


}


export async function getAllBrands(): Promise<AllBrands[] | undefined> {
    try {
        const response = await fetch("https://ecommerce.routemisr.com/api/v1/brands", {
            cache: "force-cache"
        })
      
        const finalResponse = await response.json()

        return finalResponse.data

    } catch (error) {
        console.log(error)
        return undefined

    }


}




export async function getProductById(id: string): Promise<ProductsType | undefined> {
    try {
        const response = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`, {
            cache: "force-cache"
        })
        const finalResponse = await response.json()

        return finalResponse.data

    } catch (error) {
        console.log(error)
        return undefined

    }

}




