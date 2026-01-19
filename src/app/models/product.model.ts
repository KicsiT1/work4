// Manages product-related data in ProductService.
export interface ProductModel
{
    ID:number;
    Name:string;
    Price:number;
    ProductType:string;

    Thumbnail?:string;
    Discount?:number;
    DiscountSeason?:string;
    DiscountMonth?:string;
    Description?:string;
    Images?:string[];
    InStock?: boolean;
    SaleNumber?:number;
    BrandName?:string;
    ProductFor?:string;
    Accessories?:boolean;
    CustomerReviews?:number;
}