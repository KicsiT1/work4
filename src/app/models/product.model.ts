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
    RedCoral="Red Coral",
    Orange="Orange",
    Yellow="Yellow",
    LimeGreen="Lime Green",
    GreenMint="Green Mint",
    Turquoise="Turquoise",
    SkyBlue="Sky Blue",
    CyanLightBlue="Cyan LightBlue",
    Blue="Blue",
    RoyalBlue="Royal Blue",
    VioletPurple="Violet Purple",
    LavenderPurple="Lavender Purple",
    MagentaPink="Magenta Pink",
    RedSalmon="Red Salmon",
    SnowWhite="Snow White",   
    LightBrown="Light Brown",
    DeepGreen="Deep Green",
    Lightlakeblack="Light lake black",
    DeepBlack="Deep Black",
    Burgundy="Burgundy",
    Brown="Brown"
}

export enum Collection
{
    BestSellers="Best Sellers",
    NewArrivals="New Arrivals"
}