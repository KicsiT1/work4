// simplified model for the product card that is included in the shopping card
export interface CardItem
{
  Pid:number;
  PName:string;
  PImage:string,
  PColorName:string;
  PPrice:number;
  PInStock?:number;
  DPrice:number;
  Pquantity: number;
}