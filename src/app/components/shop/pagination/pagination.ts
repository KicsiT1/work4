import { Component ,Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  imports: [],
  templateUrl: './pagination.html',
  styleUrl: './pagination.scss',
})

export class Pagination 
{
  @Input() productsLength!:number;
  PagesNumber:number=0;
  PagesArray:number[]=[];
  PagignationStart:number=0;
  PaginationEnd:number=3;
  ngOnChanges(changes: SimpleChanges) 
  {
    if (changes['productsLength']) 
    {
      this.productsLength = changes['productsLength'].currentValue;
      this.PagesNumber = this.productsLength % 9 === 0 ? Math.floor(this.productsLength / 9) : Math.floor(this.productsLength / 9) + 1;
      this.PagesArray = [];
      for(let i=1;i<=this.PagesNumber;i++)
      {
        this.PagesArray.push(i);
        console.log(this.PagesArray);
      }
    }
  }

  Previous()
  {
    if(this.PagignationStart!==0)
    {
      this.PagignationStart-=1;
      this.PaginationEnd-=1;
    }
  }

  next()
  {
    if(this.PaginationEnd!==this.PagesNumber)
    {
      this.PagignationStart+=1;
      this.PaginationEnd+=1;
    }
  }
}

