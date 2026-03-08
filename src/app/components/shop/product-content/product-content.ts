import { Component,Input} from '@angular/core';
import { ProductModel } from '../../../models/product.model';

@Component({
  selector: 'app-product-content',
  imports: [],
  standalone: true,
  templateUrl: './product-content.html',
  styleUrl: './product-content.scss',
})

export class ProductContent {

  @Input()
  set products(value: ProductModel[]) 
  {
    this._products = value;
    this.Images = value.map(p => p.Images?.[0] ?? '');
  }

  get products(): ProductModel[] 
  {
    return this._products;
  }

  private _products: ProductModel[] = [];

  protected Images:string[]=[];
  ngOnInit()
  {
    this.Images = this.products.map(p => p.Images[0]); 
  }
  GetProdIndex(i:number,j:number)
  {
    this.Images[i]=this.products[i].Images[j];
  }
}
