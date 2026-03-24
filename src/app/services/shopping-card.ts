import { Injectable } from '@angular/core';
import { ProductModel } from '../models/product.model';
import { CardItem } from '../models/CardItem.model';

@Injectable({
  providedIn: 'root',
})

export class ShoppingCard {
  // This is where the products we add to the cart will be placed.
  private ProductItem: CardItem[] = [];

  constructor() 
  {
    if (typeof window !== 'undefined')
    {
      const SavedCard = localStorage.getItem('shopping_cart');
      if(SavedCard)
      {
        this.ProductItem = JSON.parse(SavedCard);
      }
    }
  }
  // Save the products
  SaveToStorege()
  {
    localStorage.setItem('shopping_cart', JSON.stringify(this.ProductItem))
  }
  
  // Adding the product to the cart
  // product      <-- The big product model this is simplified.
  // ImgIndex     <-- It will provide a thumbnail image of the Product
  // ColorIndex   <-- It will save the exact name of the color.
  // Dprice       <-- The discounted value of the product

  addToCard(product: ProductModel, ImgIndex:number=0,ColorIndex:number=0,Dprice:number) {
  const existingItem = this.ProductItem.find(p => p.Pid === product.ID);

  const selectedColorName = product.MainColor ? product.MainColor[ColorIndex].Fantasyname.toString() : 'No color';
  
    if (existingItem) 
    {
      existingItem.Pquantity++;
    } 
    else 
    {
      const selectedImage = (product.MainColor && product.MainColor[ColorIndex]?.Images) 
      ? product.MainColor[ColorIndex].Images[ImgIndex].toString() 
      : 'No Img';
        // This is where the simple model is created
        const NewItem: CardItem = 
        {
          Pid: product.ID,
          PName: product.Name,
          PPrice: product.Price,
          DPrice: Dprice,
          PInStock: product.InStock,
          PImage: selectedImage,
          PColorName: selectedColorName,
          Pquantity: 1
        };
        // Add it to the cart
      this.ProductItem.push(NewItem);
    }
    this.SaveToStorege();
  }

  get ProductItems() 
  {
    return this.ProductItem;
  }

  get totalPrice(): number 
  {
    return this.ProductItem.reduce((sum, item) => {
      const price = item.PPrice ?? 0; 
      const quantity = item.Pquantity ?? 0; 
      return sum + (price * quantity);
    }, 0);
  }

  increaseQuantity(pid: number): number 
  {
    const item = this.ProductItem.find(p => p.Pid === pid);
    if (item?.Pquantity !== undefined && item?.PInStock !== undefined && item.Pquantity < item.PInStock) 
    {
      item.Pquantity++;       
      this.SaveToStorege();  
      return item.Pquantity;  
    }
    return 0;
  }

  DecreaseQuantity(pid: number):number
  {
    const item = this.ProductItem.find(p => p.Pid === pid);
    if (item && item.Pquantity>1) 
    {
      item.Pquantity--;       
      this.SaveToStorege();  
      return item.Pquantity;  
    }
    return item ? item.Pquantity : 0;
  }
  
  removeProductItem(pid: number) 
  {
  this.ProductItem = this.ProductItem.filter(item => item.Pid !== pid);
  // I delete localStorage products when the user deletes the product from the cart
  this.SaveToStorege()
  console.log('Product Removed:', this.ProductItem.length);
  }
}
