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
    BrandName?:BRAND[];
    ProductFor?:PRODUCTFOR;
    Accessories?:boolean;
    CustomerReviews?:number;
    Rating?:number;
    MainColor?:MAINCOLOR[];
    Collection?:COLLECTION;
    Size?:SIZE[];
    Tag?:TAG[];
}

export enum BRAND
{
    Minimog="Minimog",
    Retrolie="Retrolie",
    Brook="Brook",
    Learts="Learts",
    Vagabond="Vagabond",
    Abby="Abby",
    AlKaram="Al Karam"
}

export enum SIZE
{
    S="S",
    M="M",
    L="L",
    XL="XL",
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
    AllProducts="All products",
    Accessories="Accessories",
    BestSellers="Best Sellers",
    NewArrivals="New Arrivals"
}

export enum TAG
{
    Fashion="Fashion",
    Hats="Hats",
    Sandal="Sandal",
    Belt="Belt",
    Bags="Bags",
    Snacker="Snacker",
    Denim="Denim",
    Minimog="Minimog",
    Vagabond="Vagabond",
    Sunglasses="Sunglasses",
    Beachwear="Beachwear"
}

export enum PRODUCTFOR
{
    Men_sFashion="Men’s Fashion",
    Women_sFashion="Women’s Fashion",
}