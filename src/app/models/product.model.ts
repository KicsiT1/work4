export interface Product
{
    ID:number;
    Name:string;
    Price:number;
    ProductType:string;

    Thumbnail?:string;
    Discount?:number;
    DiscountSeason?:string;
    Description?:string;
    Images?:string[];
    InStock?: boolean;
    SaleNumber?:number;
    BrandName?:string;
    ProductFor?:string;
    Accessories?:boolean;
}