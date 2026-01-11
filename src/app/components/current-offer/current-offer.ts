import {Component} from '@angular/core';
// Font Awesome module need for the icons
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
// This makes it safe to use icons (special type for icons)
import {IconDefinition,} from '@fortawesome/fontawesome-svg-core';
// The different icons I use for the hero right side 
import {faAngleLeft,faAngleRight} from '@fortawesome/free-solid-svg-icons';
import { Product } from '../../models/product.model';


@Component({
  selector: 'app-current-offer',
  imports: [FontAwesomeModule],
  templateUrl: './current-offer.html',
  styleUrl: './current-offer.scss',
})

export class CurrentOffer {
  NextIndex:number=0;
  constructor() 
  {
    this.NextProduct(0);
  }

  faAngleLeft:IconDefinition=faAngleLeft;
  faAngleRight:IconDefinition=faAngleRight;

  Product1:string='/public/assets/images/currentOffer/p1.png';
  Product2:string='/public/assets/images/currentOffer/p2.png';
  Product3:string='/public/assets/images/currentOffer/p3.png';

  ProductItems:Product [] = 
  [
    {ID:1, Name:"P1",Price:0,ProductType:"Dress",Thumbnail:this.Product1,Discount:30,DiscountSeason:"Spring Sale",SaleNumber:1},
    {ID:2, Name:"P2",Price:0,ProductType:"Dress",Thumbnail:this.Product2,Discount:50,DiscountSeason:"Spring Sale",SaleNumber:2},
    {ID:3, Name:"P3",Price:0,ProductType:"Dress",Thumbnail:this.Product3,Discount:10,DiscountSeason:"Spring Sale",SaleNumber:3},
  ];
  
  NextProduct(NewIndex:number)
  {
    this.NextIndex=NewIndex;
  }

}
