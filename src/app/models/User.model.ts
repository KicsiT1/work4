export interface User
{
    ID:number;
    FirstName:string;
    LastName:string;
    EmailAdress:string;
    PhoneNumber:string;
    Password:string;

    UserAvatar?:string;
    UserProfession?:string;
    FavoriteProducts?:string[];
    OpinionAboutStore?:string;
    GeneralRating?:number;
}