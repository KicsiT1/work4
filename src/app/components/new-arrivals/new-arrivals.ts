import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// This makes it safe to use icons (special type for icons)
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
// The different icons I use for the menu
import { faStar } from '@fortawesome/free-solid-svg-icons';
// The data comes through.
import { ProductService } from '../../services/product';
// Includes product interface and ProductFor enum.
import { ProductModel } from '../../models/product.model';
import { ProductFor } from '../../models/product.model';
// This is a pipe that helps filter products.
import { FilterDataPipe } from '../../pipes/filter-data-pipe';

@Component({
  selector: 'app-new-arrivals',
  imports: [ FontAwesomeModule ,FilterDataPipe],
  templateUrl: './new-arrivals.html',
  styleUrl: './new-arrivals.scss',
})

export class NewArrivals {
  // The package icons that appear on the left side 
  // of the product card below the product image.
  faStar:IconDefinition=faStar;
  // Ensures that after each filter, only 6 products 
  // are displayed to the user at the beginning (default 6 item open first).
  protected Visibleproducts=6;
  // the html part of my component accesses this enum 
  // variable when I set the filter.
  protected readonly ProductFor = ProductFor;
  // These two variables ensure that when we enter 
  // the page, the filter is usually set to some basic settings.
  protected currentCategory: ProductFor | 'all' = ProductFor.Women_sFashion;
  protected showAccessoriesOnly: boolean | null = null;
  // The array that contains the subscribed data 
  ProductItems:ProductModel[]=[];
  // I initialize the ProductService class.
  constructor(private productService: ProductService) 

  {}
   ngOnInit()
   {
    this.currentCategory = ProductFor.Women_sFashion;
    // This is where subscribe to the data.
      this.productService.GetNewArrivalsData().subscribe({
        next: (data) => 
          {
            this.ProductItems = data;
          },
        error: (err) =>
          {
            console.error('Error:', err)
          }
      });
      this.ViewMore(0);
   }
   // The ViewMore function is connected to the Show 
   // more button, after clicking it, 3 more items 
   // are always displayed.
   ViewMore(Visible:number):void
   {
    if(this.Visibleproducts<this.ProductItems.length)
    {
      this.Visibleproducts+=Visible;
    }
    else
    {
      this.Visibleproducts=6;
    }
   }
   // Set a (one)specific category like men's fashion or women's 
   // fashion We can use the given enum for type consistency.
   setCategory(cat: ProductFor | 'all') 
   {
    this.currentCategory = cat;
    // I need to reset this because if I don't, the filter won't refresh.
    this.showAccessoriesOnly = null;
    this.Visibleproducts = 6; 
  }
  // This function filters out only the accessories.
  setAccessoryFilter(mode: boolean | null) 
  {
    this.showAccessoriesOnly = mode;
    this.Visibleproducts = 6;
  }
  // This function can take into account two product properties and thus 
  // filter by product type, women's clothing or men's clothing, and can 
  // also monitor whether the product is complementary or not.
  setCombinedFilter(category: ProductFor | 'all', accessories: boolean | null) 
  {
    this.currentCategory = category;
    this.showAccessoriesOnly = accessories;
    this.Visibleproducts = 6; 
  }
}
