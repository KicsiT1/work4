// Manages product-related data in ProductService.
export interface ProductModel
{
    ID:number;
    Name:string;
    Price:number;
    Type:string;
    
    Thumbnail?:string;
    Discount?:number;
    DiscountSeason?:string;
    DiscountMonth?:string;
    Description?:string;
    Images?:string[];
    InStock?: number;
    SaleNumber?:number;
    BrandName?:string;
    ProductFor?:PRODUCTFOR;
    Accessories?:boolean;
    CustomerReviews?:number;
    Rating?:number;
    MainColor?:MAINCOLOR[];
    Collection?:COLLECTION;
    Size:string[];
}

export enum PRODUCTFOR
{
    Men_sFashion="Men’s Fashion",
    Women_sFashion="Women’s Fashion",
}

export enum MAINCOLOR
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

export enum COLLECTION
{
    BestSellers="Best Sellers",
    NewArrivals="New Arrivals"
}