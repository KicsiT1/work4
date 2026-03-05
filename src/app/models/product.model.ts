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
    RedCoral="#f16363",
    Orange="#ff7629",
    Yellow="#fff06c",
    LimeGreen="#9bff6c",
    GreenMint="#6cff9e",
    Turquoise="#6cffdc",
    SkyBlue="#6cb9ff",
    CyanLightBlue="#6cf6ff",
    Blue="#6ca7ff",
    RoyalBlue="#6c7bff",
    VioletPurple="#8a6cff",
    LavenderPurple="#b66cff",
    MagentaPink="#fc6cff",
    RedSalmon="#ff6c6c",
    SnowWhite="	#FFFFFF",   
    LightBrown="#D2B48C",
    DeepGreen="#02590F",
    Lightlakeblack="#1B1B1B",
    DeepBlack="#050203",
    Burgundy="#9F1D35",
    Brown="#8B4513"
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