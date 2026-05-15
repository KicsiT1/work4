export interface User
{
    ID:number;
    FirstName:string;
    LastName:string;
    EmailAdress:string;
    PhoneNumber:string;
    Password:string;

    AvatarImg?:string;
    Profession?:string;
    FavoriteProducts?:string[];
    OpinionAboutStore?:string;
    GeneralRating?:number;
}