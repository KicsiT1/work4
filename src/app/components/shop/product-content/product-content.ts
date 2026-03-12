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
    this.Images = value.map(p => p.MainColor?.[0]?.Images?.[0] ?? '');
  }

  get products(): ProductModel[] 
  {
    return this._products;
  }

  private _products: ProductModel[] = [];

  protected Images:string[]=[];
  ngOnInit()
  {
    this.Images = this.products.flatMap(p => p.MainColor?.flatMap(c => c.Images) ?? []);
  }
  GetProdIndex(i:number,j:number)
  {    
    this.Images[i]=this.products[i].MainColor?.[j]?.Images?.[0] ?? '';
  }
}
