import { Component, OnInit } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
// This makes it safe to use icons (special type for icons)
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
// The different icons I use for the menu
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { ProductService } from '../../services/product';
import { ProductModel } from '../../models/product.model';

@Component({
  selector: 'app-new-arrivals',
  imports: [ FontAwesomeModule ],
  templateUrl: './new-arrivals.html',
  styleUrl: './new-arrivals.scss',
})

export class NewArrivals {
  faStar:IconDefinition=faStar;
  protected Visibleproducts=6;
  ProductItems:ProductModel[]=[];
  constructor(private productService: ProductService) 
  {}
   ngOnInit()
   {
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
}
