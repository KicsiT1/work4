// OnInit - lifecycle hook i use to initialize the functions.
// OnDestroy - I am currently using it against memory leaks.
// ChangeDetectorRef - manually controls Angular change detection
import {Component,OnInit,OnDestroy,ChangeDetectorRef,ChangeDetectionStrategy} from '@angular/core';
// Font Awesome module need for the icons
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
// This makes it safe to use icons (special type for icons)
import {IconDefinition,} from '@fortawesome/fontawesome-svg-core';
// The different icons I use for the hero right side 
import {faAngleLeft,faAngleRight} from '@fortawesome/free-solid-svg-icons';
//Product model
import { Product } from '../../models/product.model';


@Component({
  selector: 'app-current-offer',
  imports: [FontAwesomeModule],
  standalone: true,
  templateUrl: './current-offer.html',
  styleUrl: './current-offer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class CurrentOffer implements OnInit,OnDestroy{
  protected NextIndex:number=0;
  // This part would be better to convert into a separate 
  // class later because the countdown timer is not 
  // only displayed here.
  protected CurentDate:number=0;
  protected Distance:number=0;
  protected Days:number=0;
  protected Hours:number=0;
  protected Minutes:number=0;
  protected Seconds:number=0;
  //////////////////////////////////////////
  protected timerId: any;

  constructor(private cdr: ChangeDetectorRef) 
  {}

  faAngleLeft:IconDefinition=faAngleLeft;
  faAngleRight:IconDefinition=faAngleRight;
  // The products Thumbnails
  Product1:string='/public/assets/images/currentOffer/p1.png';
  Product2:string='/public/assets/images/currentOffer/p2.png';
  Product3:string='/public/assets/images/currentOffer/p3.png';
  // The products
  ProductItems:Product [] = 
  [
    {ID:1, Name:"P1",Price:0,ProductType:"Dress",Thumbnail:this.Product1,Discount:30,DiscountSeason:"Spring Sale",SaleNumber:1},
    {ID:2, Name:"P2",Price:0,ProductType:"Dress",Thumbnail:this.Product2,Discount:50,DiscountSeason:"Spring Sale",SaleNumber:2},
    {ID:3, Name:"P3",Price:0,ProductType:"Dress",Thumbnail:this.Product3,Discount:10,DiscountSeason:"Spring Sale",SaleNumber:3},
  ];
  // This is needed to move between points, I did the calculation in the html code.
  NextProduct(NewIndex:number)
  {
    this.NextIndex=NewIndex;
  }
  //Will need to move this function to a separate Countdown class.
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
    this.cdr.markForCheck();
  }
  /////////////////////////////////////////////////////////
  // Format the clock to look good. If the day value is not 
  // a two-digit number, a 0 should appear on the left side 
  // of the number.
  format(v: number) 
  {
  return v < 10 ? '0' + v : v;
  }
  // initialize the functions
  ngOnInit() {
    
    this.NextProduct(0);
    this.timer();
    this.timerId = setInterval(() => this.timer(), 1000);
  }
  // When I close the window, I clear the memory.
  ngOnDestroy() 
  {
    if (this.timerId) {
      clearInterval(this.timerId);
      console.log("Time stop.")
  }
}
}
