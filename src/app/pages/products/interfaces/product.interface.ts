export interface Product{ 

    // *Una interface sirve para modelar datos
    id:number;
    name:string;
    price:number;
    description:string;
    categoryId: number;
    stock: number;
}