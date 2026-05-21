import { Component,Input} from '@angular/core';
import { ProductModel } from '../../../models/product.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-product-content',
  imports: [],
  standalone: true,
  templateUrl: './product-content.html',
  styleUrl: './product-content.scss',
})

export class ProductContent {
  constructor(private router: Router) {}
  // This is where the filtered data comes in.
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
  // This is where the filtered data comes in.
  private _products: ProductModel[] = [];
  // This is where the index pictures that can be viewed in the store are placed.
  protected Images:string[]=[];
  ngOnInit()
  {
    this.Images = this.products.flatMap(p => p.MainColor?.flatMap(c => c.Images) ?? []);
  }
  // This function helps the heart and images to be set so that the correct image is displayed for each color.
  GetProdIndex(i:number,j:number)
  {    
    this.Images[i]=this.products[i].MainColor?.[j]?.Images?.[0] ?? '';
  }
  // Clicking on the product card will display more information about the product.
  // redirect us to another route
  openProduct(id: number) 
  {
  this.router.navigate(['/shop/productinfo', id]);
  }
}
