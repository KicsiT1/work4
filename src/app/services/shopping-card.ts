import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { CardItem } from '../models/CardItem.model';

@Injectable({
  providedIn: 'root',
})

export class ShoppingCard {
  private ProductItem: CardItem[] = [];
  constructor() {}
  addToCard(product: ProductModel, ImgIndex:number=0,ColorIndex:number=0,Dprice:number) {
  const existingItem = this.ProductItem.find(p => p.Pid === product.ID && p.PColorName === selectedColorName);

  const selectedColorName = product.MainColor ? product.MainColor[ColorIndex].Fantasyname.toString() : 'No color';
  
    if (existingItem) 
    {
      existingItem.Pquantity++;
      console.log('quantity++:', existingItem.PName);
    } 
    else 
    {
      
      const selectedImage = (product.MainColor && product.MainColor[ColorIndex]?.Images) 
      ? product.MainColor[ColorIndex].Images[ImgIndex].toString() 
      : 'No Img';

        const NewItem: CardItem = 
        {
          Pid: product.ID,
          PName: product.Name,
          PPrice: product.Price,
          DPrice: Dprice,
          PImage: selectedImage,
          PColorName: selectedColorName,
          Pquantity: 1
        };

      this.ProductItem.push(NewItem);
      console.log('New product in the shopping card:', NewItem.PName);
    }
  }
  get ProductItems() 
  {
    return this.ProductItem;
  }

  get totalPrice(): number 
  {
    return this.ProductItem.reduce((sum, item) => sum + (item.PPrice * item.Pquantity), 0);
  }

  removeProductItem(pid: number) 
  {
  this.ProductItem = this.ProductItem.filter(item => item.Pid !== pid);
  console.log('Product Removed:', this.ProductItem.length);
  }
}
