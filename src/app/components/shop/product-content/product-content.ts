import { Component,EventEmitter, Input, Output,SimpleChanges} from '@angular/core';
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
  // This is where the current page number is placed, and it is used to 
  // determine which products to display based on the page number.
  @Input() currentPage!: number;
  // These two variables are used to determine the range of products 
  // to be displayed based on the current page number.
  startIndex: number = 0;
  endIndex: number = 9;
  // This function is called whenever there is a change in the input properties of the component,
  // and it updates the startIndex and endIndex based on the current page number.
  ngOnChanges(changes: SimpleChanges) {

    if (changes['currentPage']) 
    {
      console.log('New Data:', changes['currentPage'].currentValue);
      if( this.currentPage === undefined )
      {
        this.startIndex = 0;
        this.endIndex = 9;
      }
      else
      {
        this.startIndex = (this.currentPage - 1) * 9;
        this.endIndex = this.startIndex + 9;
      }
    }

  }
  protected NumberOfProducts:number = 0; // NumberOfProducts = ProductsArraylength
  @Output() ProductsArrayLength = new EventEmitter<number>();
  constructor(private router: Router) {}
  // This is where the filtered data comes in.
  @Input()
  set products(value: ProductModel[]) 
  {
    this._products = value;
    this.NumberOfProducts=this._products.length;
    this.ProductsArrayLength.emit(this.NumberOfProducts);
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
  this.router.navigate(['shop/productinfo', id]);
  }
}
