// OnInit - lifecycle hook i use to initialize the functions.
// OnDestroy - I am currently using it against memory leaks.
// ChangeDetectorRef - manually controls Angular change detection
import {Component,OnInit,OnDestroy,ChangeDetectorRef,ChangeDetectionStrategy} from '@angular/core';
// Font Awesome module need for the icons
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
// This makes it safe to use icons (special type for icons)
import {IconDefinition} from '@fortawesome/fontawesome-svg-core';
// The different icons I use for the hero right side 
import {faAngleLeft,faAngleRight} from '@fortawesome/free-solid-svg-icons';

import { ProductService } from '../../services/product';
import { MonthlySalesModel } from '../../models/MonthlySales.model';

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
  protected NextMonth:number=0;
  readonly CurrentMonth = new Date().getMonth();
  // This part would be better to convert into a separate 
  // class later because the countdown timer is not 
  // only displayed here.
  protected CurentDate:number=0;
  protected Distance:number=0;
  protected Days:number=0;
  protected Hours:number=0;
  protected Minutes:number=0;
  protected Seconds:number=0;
  protected TargetDate: number=0;
  protected isAllMonthsFinished:boolean=false;
  //////////////////////////////////////////
  protected timerId: any;
  faAngleLeft:IconDefinition=faAngleLeft;
  faAngleRight:IconDefinition=faAngleRight;
  MonthlySalesItems: MonthlySalesModel[] = [];
  constructor(private cdr: ChangeDetectorRef,private productService: ProductService) 
  {}

  ////////////////////////////////////////////
  // This is needed to move between points, I did the calculation in the html code.
  NextProduct(NewIndex:number)
  {
    this.NextIndex=NewIndex;
  }
  // This needed to move between months
  NextM(index: number) 
  {
    const next = this.NextMonth + index;
    if (next >= 0 && next <= 11) 
    {
      this.NextMonth = next;
      this.NextIndex = 0;
    }
  }
  
  setTargetDateForMonth(monthIndex: number)
  {
    const now = new Date();

    const year =
    monthIndex < now.getMonth()
    ? now.getFullYear() + 1
    : now.getFullYear();

    this.TargetDate = new Date(
    year,
    monthIndex + 1,
    0,
    23, 59, 59
  ).getTime();
  }

  goToNextMonth() 
  {
    if (this.NextMonth < 11) 
    {
      this.NextMonth++;
      this.NextIndex = 0;
      this.setTargetDateForMonth(this.NextMonth);
    } 
    else 
    {
      this.isAllMonthsFinished = true;
      clearInterval(this.timerId);
    }
  }
  //Will need to move this function to a separate Countdown class.
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
    else
    {
        this.goToNextMonth();
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
    this.NextMonth = this.CurrentMonth;
    this.NextIndex = 0;
    this.productService.GetMonthlySalesData().subscribe({
      next: (data) => {this.MonthlySalesItems = data; },
      error: (err) => console.error('Error:', err)
    });

    this.setTargetDateForMonth(this.NextMonth);
    this.timer();
    this.timerId = setInterval(() => this.timer(), 1000);
  }
  // When I close the window, I clear the memory.
  ngOnDestroy() 
  {
    if (this.timerId) 
    {
      clearInterval(this.timerId);
      console.log("Timer stopped.")
    }
  }
}