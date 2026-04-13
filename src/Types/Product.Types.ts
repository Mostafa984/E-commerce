export interface Category {
  _id: string;
  name: string;
  slug: string;
  image: string;
}

export interface AllSubCategories{
   _id:string;
    name: string;
  slug: string;
  category: string;
  image:string;


}

export interface BrandType {

  _id: string,
  name: string,
  slug: string,
  image: string,
}
export interface CategoryType {
  _id: string,
  name: string,
  slug: string,
  image: string

}

export interface ProductsType {
  id: string;
  title: string;
  slug: string;
  price: number;
  imageCover: string;
  name: string;
  quantity: number;
  priceAfterDiscount?: number;
  brand: BrandType;
  category: CategoryType;
  ratingsAverage: number;
  description:string;
  
}



export interface AllBrands {
  _id: string,
  name: string,
  slug: string,
  image: string

}


