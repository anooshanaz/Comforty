export interface simpleProduct {
    productName: string;
    image(image: any): unknown;
    image: any;
  category: any;
    _id:string,
    imageUrl:string,
    price:number,
    title:string,
    priceWithoutDiscount:number,
      badge:string
      description:string,
      inventory:number,
    slug:string
}

export interface fullProduct{
    tags: boolean;
    imageUrl: string;
    inventory: number;
    title: string | undefined;
    _id:string,
    images:any,
    price:number,
    slug:string,
    name:string,
    description: string
    rating:number
    simpleProduct:any
}