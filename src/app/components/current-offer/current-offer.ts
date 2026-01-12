import {Component,OnInit,OnDestroy,ChangeDetectorRef} from '@angular/core';
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
  standalone: true,
  templateUrl: './current-offer.html',
  styleUrl: './current-offer.scss',
})

export class CurrentOffer implements OnInit,OnDestroy{
  NextIndex:number=0;
  CurentDate:number=0;
  Distance:number=0;
  Days:number=0;
  Hours:number=0;
  Minutes:number=0;
  Seconds:number=0;
  private timerId: any;
  constructor(private cdr: ChangeDetectorRef) 
  {}

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
  TargetDate: number = new Date("February 1 2026 00:00:00").getTime();
  timer()
  {
    this.CurentDate = new Date().getTime();
    this.Distance = this.TargetDate - this.CurentDate;
    if(this.Distance>0)
    {
    this.Days=Math.floor(this.Distance/1000/60/60/24);
    this.Hours=Math.floor(this.Distance/1000/60/60)%24;
    this.Minutes=Math.floor(this.Distance/1000/60)%60;
    this.Seconds=Math.floor(this.Distance/1000)%60;
    }
    this.cdr.detectChanges();
  }

  format(v: number) 
  {
  return v < 10 ? '0' + v : v;
  }

  ngOnInit() {
    
    this.NextProduct(0);
    this.timer();
    this.timerId = setInterval(() => this.timer(), 1000);
  }

  ngOnDestroy() 
  {
    if (this.timerId) {
      clearInterval(this.timerId);
      console.log("Time stop.")
  }
}
}
