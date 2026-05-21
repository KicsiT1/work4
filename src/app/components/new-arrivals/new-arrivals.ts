import { Component, inject } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// This makes it safe to use icons (special type for icons)
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
// The different icons I use for the menu
import { faStar } from '@fortawesome/free-solid-svg-icons';
// The data comes through.
import { ProductService } from '../../services/product';
// Includes product interface and ProductFor enum.
import { ProductModel } from '../../models/product.model';
import { PRODUCTFOR,COLLECTION } from '../../models/product.model';


@Component({
  selector: 'app-new-arrivals',
  imports: [FontAwesomeModule],
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
  protected readonly ProductFor = PRODUCTFOR;
  // These two variables ensure that when we enter 
  // the page, the filter is usually set to some basic settings.
  protected currentCategory: PRODUCTFOR | 'all' = PRODUCTFOR.Women_sFashion;
  protected showAccessoriesOnly: boolean | null = null;
  // Active only one of filter buttons.
  protected ButtonActive:number=0;
  // The array that contains the subscribed data 
  ProductItems:ProductModel[]=[];
  // I initialize the ProductService class.
  protected ProductService = inject(ProductService);
  
   ngOnInit()
   {
    this.currentCategory = PRODUCTFOR.Women_sFashion;
    // This is where subscribe to the data.
      this.ProductService.GetNewArrivalsData().subscribe({
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
  // I filter the array and get the exact size at the same time.
  get filteredproducts(): ProductModel[] {
  return this.ProductItems.filter(item => {
  
    const matchesCategory = this.currentCategory === 'all' || item.ProductFor === this.currentCategory;
    
    const matchesAccessories = this.showAccessoriesOnly === null || item.Accessories === this.showAccessoriesOnly;

    return  matchesCategory && matchesAccessories;
  });
}
   // The ViewMore function is connected to the Show 
   // more button, after clicking it, 3 more items 
   // are always displayed.
   ViewMore(Visible:number):void
   {
    const currentFilteredCount = this.filteredproducts.length;
    if(this.Visibleproducts<currentFilteredCount)
    {
      this.Visibleproducts+=Visible;
    }
    else
    {
      this.Visibleproducts=6;
    }
   }
  // This function can take into account two product properties and thus 
  // filter by product type, women's clothing or men's clothing, and can 
  // also monitor whether the product is complementary or not.
  setCombinedFilter(category: PRODUCTFOR | 'all', accessories: boolean | null,Active:number) 
  {
    this.currentCategory = category;
    this.showAccessoriesOnly = accessories;
    this.Visibleproducts = 6; 
    this.ButtonActive=Active;
  }
}
