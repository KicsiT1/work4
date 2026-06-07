import { Component ,Input, Output, SimpleChanges,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.html',
  styleUrl: './pagination.scss',
})

export class Pagination 
{
  // Current size of the Product array.
  @Input() productsLength!:number;
  // Number of pages Only 9 products are displayed on one page
  protected PagesNumber:number=0;
  // This array helps display the numbering in the pagination
  protected PagesArray:number[]=[];
  // It determines how many numbers I want to see at once
  protected PagignationStart:number=0;
  protected PaginationEnd:number=3;
  // This indicates which page I am on in the pagination
  protected pageIndex:number=0;
  ngOnChanges(changes: SimpleChanges) 
  {
    if (changes['productsLength']) 
    {
      // Update the productsLength and recalculate pagination details
      this.productsLength = changes['productsLength'].currentValue;
      // I determine how many pages I need from the number of products
      this.PagesNumber = this.productsLength % 9 === 0 ? Math.floor(this.productsLength / 9) : Math.floor(this.productsLength / 9) + 1;
      // When changing, I empty the array so that this does not happen 1,2,3,1,2,3
      this.PagesArray = [];
      // I fill the array with the number of pages
      for(let i=1;i<=this.PagesNumber;i++)
      {
        this.PagesArray.push(i);
        console.log(this.PagesArray);
      }
    }
  }
  // This function is responsible for the previous button in the pagination
  Previous()
  {
    if(this.PagignationStart!==0)
    {
      this.PagignationStart-=1;
      this.PaginationEnd-=1;
    }
  }
  // This function is responsible for the next button in the pagination
  next()
  {
    if(this.PaginationEnd<=this.PagesNumber)
    {
      this.PagignationStart+=1;
      this.PaginationEnd+=1;
    }
  }
  // This event emitter is responsible for sending the page number to the parent component when a page number is clicked
  @Output() pageChanged = new EventEmitter<number>();
  // This function is responsible for sending the page number to the parent 
  // component when a page number is clicked and also for changing the 
  // pageIndex to change the active class
  GetPage(page:number)
  {
    this.pageChanged.emit(page);
    this.pageIndex = page - 1;
  }
}

