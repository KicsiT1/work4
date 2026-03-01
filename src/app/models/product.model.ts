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
    InStock?: number;
    SaleNumber?:number;
    BrandName?:string;
    ProductFor?:ProductFor;
    Accessories?:boolean;
    CustomerReviews?:number;
    ProductRating?:number;
    ProductMainColor?:ProductMainColor[];
    Collection?:Collection;
    Size:string[];
}

export enum ProductFor
{
    Men_sFashion="Men’s Fashion",
    Women_sFashion="Women’s Fashion",
}

export enum ProductMainColor
{
    RedCoral="RedCoral",
    Orange="Orange",
    Yellow="Yellow",
    LimeGreen="LimeGreen",
    GreenMint="GreenMint",
    Turquoise="Turquoise",
    SkyBlue="SkyBlue",
    CyanLightBlue="CyanLightBlue",
    Blue="Blue",
    RoyalBlue="RoyalBlue",
    VioletPurple="VioletPurple",
    LavenderPurple="LavenderPurple",
    MagentaPink="MagentaPink",
    RedSalmon="RedSalmon",   
}

export enum Collection
{
    BestSellers="Best Sellers",
    NewArrivals="New Arrivals"
}